// TEMP: collects what the product cards print under the filters we trust the cards for. Nothing is compared here;
// the saved files are analysed afterwards. One test per search term and filter, one file per test:
//   collected/<term>__<filter>.json   (folder: COLLECT_DIR)
// Run:  npx playwright test -c playwright.layer1.config.ts tests-temp/CollectCards.spec.ts
//       add  -g "Mobile: RAM Size"  for a single test
import fs from "fs";
import path from "path";
import { test, expect, Locator, Page } from "@playwright/test";
import GenericUtility from "../utils/GenericUtility";
import ProductListingPage from "../pages/ProductListingPage";
import searchTerms from "../testdata/searchTerms.json";

const OUT_DIR: string = process.env.COLLECT_DIR ?? "collected";

// ---------- Which filters, under which name, for which search ----------
// The names are what Amazon shows in the left panel for each search (found by opening every search once, 2026-11-01).
// The same idea has different names: RAM Size on all three of Laptop, Mobile and Tablet, but storage is "HDD Size" on
// Laptop and "Storage Capacity" on Mobile. Options are ranges on some searches ("4 to 5.9 GB") and single sizes on others ("8 GB").
type Filter = { heading: string; limit: number; accept?: (option: string) => boolean }; // limit: how many options to walk, from the top of the list

// RAM options under 4 GB are not applied, nor are upper bounds such as "Up to 1.9 GB".
const ramOfFourGbOrMore = (option: string): boolean => {
  const size = option.match(/(\d+(?:\.\d+)?)\s*(mb|gb|tb)\b/i); // for "4 to 5.9 GB" this is "5.9 GB", the end of the range
  if (!size || /up to|under|less|below/i.test(option)) return false;
  return Number(size[1]) * ({ mb: 1 / 1024, gb: 1, tb: 1024 } as Record<string, number>)[size[2].toLowerCase()] >= 4;
};
const ram = (limit: number): Filter => ({ heading: "RAM Size", limit, accept: ramOfFourGbOrMore });

const EVERY_SEARCH: Record<string, Filter> = {
  Brands: { heading: "Brands", limit: 5 },
  Discount: { heading: "Discount", limit: 6 },
  "Customer Reviews": { heading: "Customer Reviews", limit: 1 },
};

const FILTERS_BY_TERM: Record<string, Record<string, Filter>> = {
  Laptop: { ...EVERY_SEARCH, "RAM Size": ram(6), Storage: { heading: "HDD Size", limit: 4 }, "CPU Manufacturer": { heading: "CPU Manufacturer", limit: 5 } },
  Mobile: { ...EVERY_SEARCH, "RAM Size": ram(6), Storage: { heading: "Storage Capacity", limit: 9 } },
  Tablet: { ...EVERY_SEARCH, "RAM Size": ram(9), "CPU Manufacturer": { heading: "CPU Manufacturer", limit: 8 } },
  Headphones: EVERY_SEARCH,
  Speaker: EVERY_SEARCH,
};

// ---------- Locators ----------
const HEADING = "//span[@class='a-size-base a-color-base puis-bold-weight-text']"; // a filter group's title in the left panel
const ORGANIC_CARD = 'div[data-component-type="s-search-result"]:not(:has(a[href*="sspa"]))'; // sponsored cards ignore filters, so they are left out

const optionLinks = (page: Page, heading: string): Locator =>
  page.locator(`xpath=${HEADING}[text()="${heading}"]/parent::div/following-sibling::ul//li//a[@href]`);

// ---------- What is saved for each card ----------
type Card = { asin: string; title: string; price: string; rating: string; text: string };

const readCards = (page: Page): Promise<Card[]> =>
  page.locator(ORGANIC_CARD).evaluateAll((cards) =>
    cards.map((card) => ({
      asin: card.getAttribute("data-asin") ?? "",
      title: (card.querySelector("h2") as HTMLElement | null)?.innerText.trim() ?? "",
      price: card.querySelector(".a-price .a-offscreen")?.textContent?.trim() ?? "",
      rating: card.querySelector(".a-icon-alt")?.textContent?.trim() ?? "",
      text: (card as HTMLElement).innerText.replace(/\s+/g, " "),
    })),
  );

// ---------- Tests ----------
for (const term of searchTerms.searchTerms) {
  for (const [name, filter] of Object.entries(FILTERS_BY_TERM[term] ?? {})) {
    test(`${term}: ${name}`, async ({ page }, testInfo) => {
      const generic = new GenericUtility(page, testInfo);
      const clear: Locator = new ProductListingPage(page).clearButtonBy.first();
      const links: Locator = optionLinks(page, filter.heading);
      const saved: { option: string; address: string; cards: Card[] }[] = [];
      const file: string = path.join(OUT_DIR, `${term}__${name.replace(/\s+/g, "_")}.json`);
      fs.mkdirSync(OUT_DIR, { recursive: true });

      await page.goto(`https://www.amazon.in/s?k=${encodeURIComponent(term)}`, { waitUntil: "domcontentloaded" });
      await generic.requireAnyFilter([filter.heading]); // skips the test when Amazon blocks the page or the search has no such filter
      await expect(page.locator(ORGANIC_CARD).first()).toBeVisible();

      const options: string[] = (await links.allInnerTexts()).map((text) => text.replace(/\s+/g, " ").trim()).slice(0, filter.limit);
      for (const [index, option] of options.entries()) {
        if (/see more/i.test(option) || !(filter.accept?.(option) ?? true)) continue;

        await test.step(`${filter.heading} / ${option}`, async () => {
          console.log(`[${term}] ${filter.heading} / ${option}`); // progress line while the run is going
          await links.nth(index).click();
          await generic.skipIfBlocked(await generic.clearBlockers(), `applying '${option}'`);
          await expect(clear, `'${option}': the Clear control is showing`).toBeVisible(); // the page has settled on the filtered list

          const cards: Card[] = await readCards(page);
          expect(cards.length, `'${option}': the filtered list has cards`).toBeGreaterThan(0);
          saved.push({ option, address: page.url(), cards });
          fs.writeFileSync(file, JSON.stringify({ term, filter: name, heading: filter.heading, collectedAt: new Date().toISOString(), options: saved }, null, 1)); // saved after every option, so a block part-way keeps what was collected

          await clear.click();
          await expect(clear, `'${option}': Clear is gone after clearing`).toBeHidden();
          await links.first().waitFor(); // the options list is drawn again after Clear
        });
      }
    });
  }
}
