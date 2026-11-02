// TEMP: for the filters whose value the cards print, applies every option and reads the cards under it. Nothing is compared yet.
// Run:  npx playwright test -c playwright.layer1.config.ts tests-temp/TrustedFilters.spec.ts   (add -g "Laptop: Brands" for one test)
import fs from "fs";
import path from "path";
import { test, expect } from "@playwright/test";
import ProductListingPage from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import CardFilterFlows from "../flows/CardFilterFlows";
import testData from "../testdata/searchTerms.json";

const OUT_DIR: string = process.env.COLLECT_DIR ?? "collected"; // where the cards are saved, one file per test

// The filter headings as Amazon shows them, and the search terms each one runs for.
const cardFilters = [
	{ heading: "Brands", terms: ["Laptop", "Mobile", "Headphones", "Tablet", "Speaker"] },
	{ heading: "Discount", terms: ["Laptop", "Mobile", "Headphones", "Tablet", "Speaker"] },
	{ heading: "Customer Reviews", terms: ["Laptop", "Mobile", "Headphones", "Tablet", "Speaker"] },
	{ heading: "CPU Manufacturer", terms: ["Laptop"] },
];

for (const searchTerm of testData.searchTerms) {
	for (const { heading, terms } of cardFilters) {

		if (terms.includes(searchTerm)) test(`${searchTerm}: ${heading} filter, reading the cards`, async ({ page }, testInfo) => {

			const productPage = new ProductListingPage(page);
			const genericUtility = new GenericUtility(page, testInfo);
			const cardFilterFlows = new CardFilterFlows(page, testInfo);

			await cardFilterFlows.openSearchResults(searchTerm);
			await genericUtility.requireFilter(heading);

			const results = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading(heading), heading);

			// Save what was read, before any check, so it is kept even when a check fails.
			fs.mkdirSync(OUT_DIR, { recursive: true });
			fs.writeFileSync(path.join(OUT_DIR, `${searchTerm}__${heading.replace(/\s+/g, "_")}.json`), JSON.stringify({ searchTerm, heading, collectedAt: new Date().toISOString(), options: results }, null, 1));

			// 1. Every option was applied.
			expect.soft(cardFilterFlows.notAppliedOptions, "Options not applied").toEqual([]);
			// 2. Cards were read.
			expect(results.flatMap((result) => result.cards).length, "At least one card was read").toBeGreaterThan(0);
			// 3. Comparing each option's cards (result.cards) with the option (result.option) is the next step.
		});
	}
}
