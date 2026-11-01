import { Page, Locator } from '@playwright/test';

export type Point = { x: number; y: number };

export interface CurveOptions {
  minSteps?: number;   // fewest mousemove events per move
  maxSteps?: number;   // most mousemove events per move
  minDelay?: number;   // ms between points
  maxDelay?: number;
}

export interface WanderOptions extends CurveOptions {
  moves?: number;      // how many random points to visit
  from?: Point;        // where the pointer is now (Playwright can't tell us)
  margin?: number;     // keep away from the viewport edges
  minPause?: number;   // ms pause after each move
  maxPause?: number;
}

const rand = (min: number, max: number): number => min + Math.random() * (max - min);
const randInt = (min: number, max: number): number => Math.floor(rand(min, max + 1));

export class MouseUtility {
  // Playwright has no "current pointer position" API, so we track it ourselves.
  private position: Point = { x: 0, y: 0 };

  constructor(private readonly page: Page) {}

  /**
   * Moves the pointer to `to` along a random cubic Bezier curve:
   * ease-in/ease-out spacing, 1px jitter, small random delay between points.
   */
  async curvedMove(to: Point, options: CurveOptions = {}, from: Point = this.position): Promise<Point> {
    const { minSteps = 15, maxSteps = 40, minDelay = 4, maxDelay = 18 } = options;

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const bend = Math.hypot(dx, dy) * 0.3; // how far the curve may bow out
    const c1: Point = { x: from.x + dx * rand(0.2, 0.4) + rand(-bend, bend), y: from.y + dy * rand(0.2, 0.4) + rand(-bend, bend) };
    const c2: Point = { x: from.x + dx * rand(0.6, 0.8) + rand(-bend, bend), y: from.y + dy * rand(0.6, 0.8) + rand(-bend, bend) };

    const steps = randInt(minSteps, maxSteps);
    for (let i = 1; i <= steps; i++) {
      const t = 0.5 - Math.cos(Math.PI * (i / steps)) / 2; // slow at the ends, fast in the middle
      const u = 1 - t;
      let x = u ** 3 * from.x + 3 * u ** 2 * t * c1.x + 3 * u * t ** 2 * c2.x + t ** 3 * to.x;
      let y = u ** 3 * from.y + 3 * u ** 2 * t * c1.y + 3 * u * t ** 2 * c2.y + t ** 3 * to.y;
      if (i < steps) { x += rand(-1, 1); y += rand(-1, 1); } // land exactly on `to`
      await this.page.mouse.move(x, y);                       // one mousemove per call
      await this.page.waitForTimeout(rand(minDelay, maxDelay));
    }
    this.position = { ...to };
    return this.position;
  }

  /** Wanders to `moves` random points in the viewport, pausing after each. */
  async randomMouseMove(options: WanderOptions = {}): Promise<Point> {
    const { moves = 3, from, margin = 10, minPause = 80, maxPause = 400, ...curve } = options;
    const vp = this.page.viewportSize() ?? { width: 800, height: 600 };
    if (from) this.position = { ...from };

    for (let i = 0; i < moves; i++) {
      const to: Point = { x: rand(margin, vp.width - margin), y: rand(margin, vp.height - margin) };
      await this.curvedMove(to, curve);
      await this.page.waitForTimeout(rand(minPause, maxPause));
    }
    return this.position;
  }

  /** Wanders, then curves onto a random point inside the element and clicks it. */
  async randomMoveAndClick(locator: Locator, options: WanderOptions = {}): Promise<Point> {
    await this.randomMouseMove({ moves: 2, ...options });

    await locator.scrollIntoViewIfNeeded();
    const box = await locator.boundingBox();
    if (!box) throw new Error('randomMoveAndClick: element has no bounding box (not visible?)');

    const to: Point = { x: box.x + box.width * rand(0.25, 0.75), y: box.y + box.height * rand(0.25, 0.75) };
    await this.curvedMove(to, options);
    await this.page.waitForTimeout(rand(50, 150));                              // brief "aim" pause
    await this.page.mouse.click(to.x, to.y, { delay: randInt(40, 120) });       // ms between down and up
    return this.position;
  }
}
export default MouseUtility;