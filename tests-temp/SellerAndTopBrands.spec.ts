// TEMP trial of two filters that are checked on the product page. Each filter is its own check, using its own flow steps:
//  Seller:     apply each Seller option, open its products, see that the option's seller sells the product (buy box or another offer).
//  Top Brands: apply that option, open its products, see that every page has the "Top Brand" card.
// While a page is open, the other filter's fact is noted too (the Top Brand card on Seller products), to see if the two relate.
// Nothing fails on a data mismatch yet: everything is recorded in collected/<term>__Seller_and_TopBrands.json.
// Run:  npx playwright test -c playwright.layer1.config.ts tests-temp/SellerAndTopBrands.spec.ts -g "Mobile" --headed
//       PRODUCTS=5 products per Seller option (default 5),  TOP_PRODUCTS=all|N products of Top Brands (default all)
import fs from "fs";
import path from "path";
import { test, expect } from "@playwright/test";
import ProductListingPage, { isUnavailable } from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import CardFilterFlows from "../flows/CardFilterFlows";
import ProductPageFlows from "../flows/ProductPageFlows";
import testData from "../testdata/searchTerms.json";

const OUT_DIR: string = process.env.COLLECT_DIR ?? "collected";
const SELLER_PRODUCTS: number = process.env.PRODUCTS ? Number(process.env.PRODUCTS) : 5;
const TOP_PRODUCTS: number = process.env.TOP_PRODUCTS && process.env.TOP_PRODUCTS !== "all" ? Number(process.env.TOP_PRODUCTS) : Number.POSITIVE_INFINITY;
const TOP_BRANDS = "Top Brands";

// The option can be cut with "..." ("NEW TECH WORLD ..."), so the two names only have to start the same way, whichever is shorter.
const clean = (name: string): string => name.replace(/\s*(\.{3}|…)\s*$/, "").replace(/\s+/g, " ").trim().toLowerCase();
const sameSeller = (pageSeller: string, option: string): boolean => clean(pageSeller).startsWith(clean(option)) || clean(option).startsWith(clean(pageSeller));

type Row = { filter: "Seller" | "Top Brands"; option: string; asin: string; title: string; problem: string; seller: string; offerSellers: string[]; sellerVerdict: string; topBrand: string };

for (const searchTerm of testData.searchTerms) {

	test(`${searchTerm}: Seller and Top Brands filters, checked on the product pages`, async ({ page }, testInfo) => {
		test.setTimeout(60 * 60_000);
		const productPage = new ProductListingPage(page);
		const genericUtility = new GenericUtility(page, testInfo);
		const cardFilterFlows = new CardFilterFlows(page, testInfo);
		const productPageFlows = new ProductPageFlows(page, testInfo);
		const file: string = path.join(OUT_DIR, `${searchTerm}__Seller_and_TopBrands.json`);
		const screenshotDir: string = path.join(OUT_DIR, "topbrand-cards");
		fs.mkdirSync(screenshotDir, { recursive: true });

		const rows: Row[] = [];
		let topBrandsAsins: string[] = [];
		const save = (): void => fs.writeFileSync(file, JSON.stringify({ searchTerm, collectedAt: new Date().toISOString(), notApplied: cardFilterFlows.notAppliedOptions, topBrandsAsins, rows }, null, 1));

		await cardFilterFlows.openSearchResults(searchTerm);
		await genericUtility.requireFilter("Seller");

		// 1. Seller. Unavailable cards have no offer from that seller, so their pages are not opened.
		const sellerResults = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading("Seller"), "Seller");
		console.log(`[${testInfo.title}] Seller options read: ${sellerResults.map((result) => result.option).join(", ") || "none"}; not applied: ${cardFilterFlows.notAppliedOptions.join("; ") || "none"}`);
		for (const { option, cards } of sellerResults) {
			const available = cards.filter((card) => !isUnavailable(card));
			console.log(`[${testInfo.title}] '${option}': ${cards.length - available.length} of ${cards.length} cards are currently unavailable, not opened`);
			for (const product of await productPageFlows.readProductPages(available, SELLER_PRODUCTS, { isExpectedSeller: (seller) => sameSeller(seller, option), screenshotDir })) {
				const sellerVerdict: string =
					product.problem !== "" ? "page not read"
					: product.seller !== "" && sameSeller(product.seller, option) ? "match (buy box)"
					: product.offerSellers.some((seller) => sameSeller(seller, option)) ? "match (another offer)"
					: product.seller === "" && product.offerSellers.length === 0 ? "no seller found"
					: "different";
				rows.push({ filter: "Seller", option, ...product, sellerVerdict });
			}
			save();
		}

		// 2. Top Brands. Its heading changes with the search ("Cell Phone Brands" for mobiles), so it is found by the option.
		const topHeading: string = await productPage.textOf(productPage.getHeadingOfOption(TOP_BRANDS));
		if (topHeading === "") {
			console.log(`[${testInfo.title}] this search has no '${TOP_BRANDS}' option`);
		} else {
			console.log(`[${testInfo.title}] '${TOP_BRANDS}' is under the heading '${topHeading}'`);
			const topResults = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading(topHeading), topHeading, { onlyOptions: [TOP_BRANDS] });
			for (const { cards } of topResults) {
				topBrandsAsins = cards.map((card) => card.asin);
				for (const product of await productPageFlows.readProductPages(cards, TOP_PRODUCTS, { screenshotDir })) {
					rows.push({ filter: "Top Brands", option: TOP_BRANDS, ...product, offerSellers: [], sellerVerdict: "not checked" });
				}
			}
		}
		save();

		// 3. The summary: how reliable each filter was.
		const sellerRows: Row[] = rows.filter((row) => row.filter === "Seller");
		const topRows: Row[] = rows.filter((row) => row.filter === "Top Brands");
		const count = (list: Row[], check: (row: Row) => boolean): number => list.filter(check).length;
		console.log(`[${testInfo.title}] SELLER: ${sellerRows.length} products: ${count(sellerRows, (r) => r.sellerVerdict === "match (buy box)")} match in the buy box, ${count(sellerRows, (r) => r.sellerVerdict === "match (another offer)")} in another offer, ${count(sellerRows, (r) => r.sellerVerdict === "different")} different, ${count(sellerRows, (r) => r.sellerVerdict === "no seller found")} no seller found, ${count(sellerRows, (r) => r.sellerVerdict === "page not read")} page not read`);
		console.log(`[${testInfo.title}] TOP BRANDS: ${count(topRows, (r) => r.topBrand !== "")} of ${topRows.length} products show the Top Brand card (${count(topRows, (r) => r.problem !== "")} pages not read)`);
		console.log(`[${testInfo.title}] SELLER products with the Top Brand card: ${count(sellerRows, (r) => r.topBrand !== "")} of ${sellerRows.length}; of those ${count(sellerRows, (r) => r.topBrand !== "" && topBrandsAsins.includes(r.asin))} are in the Top Brands list`);

		expect(rows.length, "At least one product page was read").toBeGreaterThan(0);
	});
}
