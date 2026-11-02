// TEMP: reads the Amazon results of a Chrome that YOU browse. It never navigates, clicks or types: it only reads the page you are on.
// 1. Close Chrome, then start it with its own profile folder and a debugging port:
//      "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir=C:\chrome-live-profile
// 2. In that Chrome, search on amazon.in and apply filter options yourself, one at a time (Clear between them).
// 3. Run:  npx playwright test -c playwright.layer1.config.ts tests-temp/LiveCapture.spec.ts
//    Whenever the page settles on a new list of cards, it is saved to collected/live/<term>__<filter>.json (same layout as the card spec).
//    It stops after LIVE_MINUTES (default 30), or when the file collected/live/STOP exists.
import fs from "fs";
import path from "path";
import { test, chromium, Page } from "@playwright/test";
import ProductListingPage, { Card } from "../pages/ProductListingPage";

const CDP_PORT: number = Number(process.env.CDP_PORT ?? 9222);
const MINUTES: number = Number(process.env.LIVE_MINUTES ?? 30);
const OUT_DIR: string = path.join(process.env.COLLECT_DIR ?? "collected", "live");
const POLL_MS = 3_000;

type SavedFile = { searchTerm: string; heading: string; collectedAt: string; options: { option: string; address: string; cards: Card[] }[] };

// The tab you are looking at, when it is an amazon.in search results page.
async function findResultsPage(pages: Page[]): Promise<Page | undefined> {
	for (const page of pages) {
		const isResultsPage: boolean = /amazon\.in\/s[?/]/.test(page.url());
		const isVisible: boolean = isResultsPage && (await page.evaluate(() => document.visibilityState).catch(() => "")) === "visible";
		if (isVisible) {
			return page;
		}
	}
	return undefined;
}

// Saves the cards on the page under the filter that is applied now: one file per search term and filter, one entry per option.
async function saveCurrentList(page: Page): Promise<void> {
	const productPage = new ProductListingPage(page);
	const applied = await productPage.readAppliedFilters();
	const searchTerm: string = new URL(page.url()).searchParams.get("k") ?? "unknown";
	const heading: string = applied.map((filter) => filter.heading).join("+") || "unfiltered";
	const option: string = applied.flatMap((filter) => filter.options).join(" + ") || "(no filter)";
	const cards: Card[] = await productPage.readCards();

	const file: string = path.join(OUT_DIR, `${searchTerm}__${heading.replace(/\s+/g, "_")}.json`);
	const saved: SavedFile = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : { searchTerm, heading, collectedAt: "", options: [] };
	saved.collectedAt = new Date().toISOString();
	saved.options = [...saved.options.filter((entry) => entry.option !== option), { option, address: page.url(), cards }];
	fs.writeFileSync(file, JSON.stringify(saved, null, 1));
	console.log(`[live] saved '${searchTerm}' / ${heading} / ${option}: ${cards.length} cards (${saved.options.length} option(s) in the file)`);
}

test("live capture: reads the results you open in your own Chrome", async () => {
	test.setTimeout((MINUTES + 1) * 60_000);
	fs.mkdirSync(OUT_DIR, { recursive: true });
	const stopFile: string = path.join(OUT_DIR, "STOP");
	fs.rmSync(stopFile, { force: true });

	const browser = await chromium.connectOverCDP(`http://127.0.0.1:${CDP_PORT}`).catch((error: Error) => {
		throw new Error(`Could not reach Chrome on port ${CDP_PORT}. Start it with --remote-debugging-port=${CDP_PORT} and its own --user-data-dir (see the top of this file). ${error.message.split("\n")[0]}`);
	});
	console.log(`[live] connected. Browse and apply filters in that Chrome. Stops after ${MINUTES} minutes, or create ${stopFile}`);

	const deadline: number = Date.now() + MINUTES * 60_000;
	let lastSeen: string = "";
	let lastSaved: string = "";
	while (Date.now() < deadline && !fs.existsSync(stopFile)) {
		await new Promise((resolve) => setTimeout(resolve, POLL_MS));
		try {
			const page: Page | undefined = await findResultsPage(browser.contexts().flatMap((context) => context.pages()));
			if (!page) {
				continue;
			}
			// The page and its cards as one text. When it is the same on two reads in a row, the list has settled.
			const titles: string = (await new ProductListingPage(page).listOrganicCardTitlesBy.allInnerTexts()).sort().join("|");
			const state: string = `${page.url()}\n${titles}`;
			if (titles !== "" && state === lastSeen && state !== lastSaved) {
				await saveCurrentList(page);
				lastSaved = state;
			}
			lastSeen = state;
		} catch (error) {
			console.log(`[live] could not read the page just now (it may be loading): ${error instanceof Error ? error.message.split("\n")[0] : error}`);
		}
	}
	await browser.close(); // for a browser that was connected to, this only disconnects: your Chrome stays open
	console.log("[live] stopped");
});
