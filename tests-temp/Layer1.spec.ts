// TEMP: filter checks on the listing page only, for filters whose values the product cards print. No product page is opened.
//   Layer 1 test, the filter behaves: the option shows as selected, "Clear" appears, the products on screen change, Clear undoes it.
//   Layer 2 test, collects data only: for every applied option it saves the option text and what each card prints, to spike/out/layer2/<term>.json.
//   Nothing is parsed or compared in Layer 2 yet; the saved data is examined afterwards to decide how to verify it.
// Both tests walk the same filters and the same first options of each filter.
// Run:  npx playwright test -c playwright.layer1.config.ts
//       LAYER1_OPTIONS=3 npx playwright test -c playwright.layer1.config.ts -g "Laptop"
import fs from "fs";
import { test, expect, Locator, Page, TestInfo } from "@playwright/test";
import GenericUtility from "../utils/GenericUtility";
import ProductListingPage from "../pages/ProductListingPage";
import searchTerms from "../testdata/searchTerms.json";

const OPTIONS_PER_FILTER: number = Number(process.env.LAYER1_OPTIONS ?? 2);
const CARD_FILTERS: string[] = [
  "Brands", "Discount", "Customer Reviews", "RAM Size", "HDD Size", "CPU Manufacturer",
  "GPU Manufacturer", "Hard Drive Type", "Headphones Form Factor", "Display Technology", "Operation", "Access Location",
];

// ---------- Locators ----------
const HEADING = "//span[@class='a-size-base a-color-base puis-bold-weight-text']"; // a filter group's title in the left panel
const ORGANIC_CARD = 'div[data-component-type="s-search-result"]:not(:has(a[href*="sspa"]))'; // sponsored cards ignore filters, so they are left out

const optionLinks = (page: Page, heading: string): Locator =>
  page.locator(`xpath=${HEADING}[text()="${heading}"]/parent::div/following-sibling::ul//li//a[@href]`);
const selectedOption = (page: Page, heading: string): Locator =>
  page.locator(`xpath=${HEADING}[text()="${heading}"]/parent::div/following-sibling::ul//span[contains(@class,'a-text-bold')]`);
const clearButton = (page: Page): Locator => new ProductListingPage(page).clearButtonBy.first();

// ---------- Reading the cards ----------
type Card = { title: string; text: string; rating: string };

const readCards = (page: Page): Promise<Card[]> =>
  page.locator(ORGANIC_CARD).evaluateAll((cards) =>
    cards.map((card) => ({
      title: (card.querySelector("h2") as HTMLElement | null)?.innerText.trim() ?? "",
      text: (card as HTMLElement).innerText.replace(/\s+/g, " "),
      rating: card.querySelector(".a-icon-alt")?.textContent?.trim() ?? "",
    })),
  );

// ---------- Shared walk: the same filters and options for both tests ----------
// Applies each option, runs `check` on the filtered list, then clears and confirms nothing stays selected.
async function forEachOption(
  page: Page, term: string, testInfo: TestInfo, filters: string[],
  check: (heading: string, option: string, titlesBefore: string[]) => Promise<void>,
  { limit = OPTIONS_PER_FILTER, accept = () => true }: { limit?: number; accept?: (option: string) => boolean } = {}, // how many options to walk per filter, and which ones to apply
): Promise<void> {
  const generic = new GenericUtility(page, testInfo);

  await page.goto(`https://www.amazon.in/s?k=${encodeURIComponent(term)}`, { waitUntil: "domcontentloaded" });
  await generic.requireAnyFilter(filters); // skips the test when Amazon blocks the page
  await expect(page.locator(ORGANIC_CARD).first()).toBeVisible();

  for (const heading of filters) {
    const links: Locator = optionLinks(page, heading);
    const offered: boolean = await links.first().waitFor({ timeout: 5_000 }).then(() => true, () => false); // the panel re-renders after each Clear
    if (!offered) continue; // this search does not offer the filter
    const optionCount: number = Math.min(limit, await links.count());

    for (let index = 0; index < optionCount; index++) {
      const option: string = (await links.nth(index).innerText()).replace(/\s+/g, " ").trim();
      if (!accept(option)) continue;

      await test.step(`${heading} / ${option}`, async () => {
        console.log(`[${term}] ${heading} / ${option}`); // progress line while the run is going
        const titlesBefore: string[] = (await readCards(page)).map((card) => card.title);
        await links.nth(index).click();
        await generic.skipIfBlocked(await generic.clearBlockers(), `applying '${option}'`);
        await expect(clearButton(page), `'${option}': the Clear control is showing`).toBeVisible(); // the page has settled on the filtered list

        await check(heading, option, titlesBefore);

        await clearButton(page).click();
        await expect(clearButton(page), `'${option}': Clear is gone after clearing`).toBeHidden();
        await expect.soft(selectedOption(page, heading), `'${option}': nothing is selected after clearing`).toHaveCount(0);
      });
    }
  }
}

// ---------- Layer 1: the filter behaves ----------
async function expectFilterBehaves(page: Page, heading: string, option: string, titlesBefore: string[]): Promise<void> {
  const selected: Locator = selectedOption(page, heading);

  await expect.soft(selected, `'${option}': exactly one option is shown as selected under '${heading}'`).toHaveCount(1);
  await expect.soft.poll(async () => option.toLowerCase().includes((await selected.first().innerText()).trim().toLowerCase()), {
    message: `the selected option under '${heading}' is '${option}'`,
  }).toBe(true);
  await expect.soft.poll(async () => (await readCards(page)).map((card) => card.title).join("|") !== titlesBefore.join("|"), {
    message: `'${option}': the products on screen changed`,
  }).toBe(true);
}

// ---------- Layer 2: the cards agree with the filter (only the filters whose card value is a plain word or number) ----------
// A rule answers true (the card fits the option), false (it does not), or null (the card prints nothing to compare).
const MIN_SHARE_FITTING = 0.8; // of the cards that print a value, this share must fit the option
const lettersOnly = (text: string): string => text.toLowerCase().replace(/[^a-z0-9]/g, "");
const firstNumber = (text: string): number => Number(text.match(/\d+(?:\.\d+)?/)?.[0]);

const CARD_RULES: Record<string, (card: Card, option: string) => boolean | null> = {
  Brands: (card, option) => lettersOnly(card.title).includes(lettersOnly(option)), // "Samsung" is in the title
  Discount: (card, option) => { // "25% Off or more" -> the card prints "(NN% off)"
    const printed = card.text.match(/(\d+)% off/);
    return printed ? Number(printed[1]) >= firstNumber(option) : null;
  },
  "Customer Reviews": (card, option) => { // "4 Stars & Up" -> the card prints "4.3 out of 5 stars"
    const stars: number = firstNumber(card.rating);
    return Number.isNaN(stars) ? null : stars >= firstNumber(option);
  },
};

async function expectCardsFitOption(page: Page, heading: string, option: string): Promise<void> {
  const cards: Card[] = await readCards(page);
  const verdicts: boolean[] = cards.map((card) => CARD_RULES[heading](card, option)).filter((verdict): verdict is boolean => verdict !== null);
  const fitting: number = verdicts.filter(Boolean).length;

  expect.soft(verdicts.length, `'${option}': ${verdicts.length} of ${cards.length} cards print a value to compare`).toBeGreaterThan(0);
  expect.soft(fitting / Math.max(verdicts.length, 1), `'${option}': ${fitting} of ${verdicts.length} cards fit`).toBeGreaterThanOrEqual(MIN_SHARE_FITTING);
}

// A RAM option such as "8 GB" or "1 TB". Options under 4 GB, in MB, or worded as an upper bound ("Up to 2 GB") are not applied.
const isRamOfFourGbOrMore = (option: string): boolean => {
  const size = option.match(/(\d+(?:\.\d+)?)\s*(mb|gb|tb)\b/i);
  if (!size || /up to|under|less|below/i.test(option)) return false;
  const gigabytes: number = Number(size[1]) * ({ mb: 1 / 1024, gb: 1, tb: 1024 } as Record<string, number>)[size[2].toLowerCase()];
  return gigabytes >= 4;
};

// ---------- Tests ----------
for (const term of searchTerms.searchTerms) {
  test(`${term}: Layer 2, the cards agree with the filter`, async ({ page }, testInfo) => {
    await forEachOption(page, term, testInfo, Object.keys(CARD_RULES), async (heading, option) => {
      await expectCardsFitOption(page, heading, option);
    });
  });

  test(`${term}: Layer 1, the filter behaves`, async ({ page }, testInfo) => {
    await forEachOption(page, term, testInfo, CARD_FILTERS, async (heading, option, titlesBefore) => {
      await expectFilterBehaves(page, heading, option, titlesBefore);
    });
  });

  test(`${term}: Layer 2, collect what the cards print`, async ({ page }, testInfo) => {
    const collected: { heading: string; option: string; cards: Card[] }[] = [];
    fs.mkdirSync("spike/out/layer2", { recursive: true });

    await forEachOption(page, term, testInfo, CARD_FILTERS, async (heading, option) => {
      const cards: Card[] = await readCards(page);
      expect(cards.length, `'${option}': the filtered list has cards`).toBeGreaterThan(0);
      collected.push({ heading, option, cards });
      fs.writeFileSync(`spike/out/layer2/${term}.json`, JSON.stringify(collected, null, 1)); // saved after every option, so a block part-way keeps what was collected
    });
  });

  // RAM Size only: every option of 4 GB or more, cards saved to spike/out/ram/<term>.json. Nothing is compared here.
  test(`${term}: RAM Size, collect the cards`, async ({ page }, testInfo) => {
    const collected: { option: string; cards: Card[] }[] = [];
    fs.mkdirSync("spike/out/ram", { recursive: true });

    await forEachOption(page, term, testInfo, ["RAM Size"], async (_heading, option) => {
      const cards: Card[] = await readCards(page);
      expect(cards.length, `'${option}': the filtered list has cards`).toBeGreaterThan(0);
      collected.push({ option, cards });
      fs.writeFileSync(`spike/out/ram/${term}.json`, JSON.stringify(collected, null, 1));
    }, { limit: 30, accept: isRamOfFourGbOrMore });
  });
}
