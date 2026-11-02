// TEMP: checks the filters whose result the page states exactly (numbers, labels, ASINs), against the product cards or the product pages.
// One test per filter and search term; a filter the search does not show is skipped. What was read is saved in collected/ before any check.
//
//  Cards (listing only):  Brands, Discount, Customer Reviews, Free delivery, Price range, and the card's own price / M.R.P. / discount.
//  Product pages:         Pay on Delivery and Top Brands (the label must be there), Seller (the seller sells the product),
//                         and the rating on the card against the rating on the page.
//
// Run:  npx playwright test -c playwright.layer1.config.ts tests-temp/CardFilterChecks.spec.ts -g "Mobile: Discount" --headed
//       PRODUCTS=5 pages per Seller option,  BADGE_PRODUCTS=all|N pages per label filter,  RATING_PRODUCTS=8 pages for the rating check
import fs from "fs";
import path from "path";
import { test, expect, Page, TestInfo } from "@playwright/test";
import ProductListingPage, { Card, isUnavailable } from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import CardFilterFlows from "../flows/CardFilterFlows";
import ProductPageFlows, { ProductFacts } from "../flows/ProductPageFlows";
import testData from "../testdata/searchTerms.json";

const OUT_DIR: string = process.env.COLLECT_DIR ?? "collected";
const SELLER_PRODUCTS: number = process.env.PRODUCTS ? Number(process.env.PRODUCTS) : 5;
const BADGE_PRODUCTS: number = process.env.BADGE_PRODUCTS && process.env.BADGE_PRODUCTS !== "all" ? Number(process.env.BADGE_PRODUCTS) : Number.POSITIVE_INFINITY;
const RATING_PRODUCTS: number = process.env.RATING_PRODUCTS ? Number(process.env.RATING_PRODUCTS) : 8;
const TOP_BRANDS = "Top Brands";


// ---- Small helpers ----

type Verdict = "fits" | "does not fit" | "no value"; // "no value": the card does not print what the rule needs, so it is listed, not judged
type Judged = { what: string; verdict: Verdict };

// The first number in a text: "₹26,000" is 26000, "(44% off)" is 44, "4.1 out of 5 stars" is 4.1, "4 Stars & Up" is 4. NaN when there is none.
const firstNumber = (text: string): number => Number(text.match(/\d[\d,]*\.?\d*/)?.[0].replace(/,/g, "") ?? NaN);

// A brand or seller name without the "..." Amazon puts at the end of a long one.
const cleanName = (name: string): string => name.replace(/\s*(\.{3}|…)\s*$/, "").replace(/\s+/g, " ").trim();

// The two seller names only have to start the same way, whichever is shorter ("NEW TECH WORLD ..." is cut).
const sameSeller = (pageSeller: string, option: string): boolean => cleanName(pageSeller).toLowerCase().startsWith(cleanName(option).toLowerCase()) || cleanName(option).toLowerCase().startsWith(cleanName(pageSeller).toLowerCase());

const hasWholeWord = (text: string, word: string): boolean => new RegExp(`(^|[^a-z0-9])${cleanName(word).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`, "i").test(text);

// Counts the judged items and fails (softly, so every check of the test is reported) when the share that fits is under the threshold.
function checkShare(label: string, items: Judged[], threshold: number): void {
	const fits: number = items.filter((item) => item.verdict === "fits").length;
	const misfits: string[] = items.filter((item) => item.verdict === "does not fit").map((item) => item.what);
	const noValue: number = items.filter((item) => item.verdict === "no value").length;
	const judged: number = fits + misfits.length;
	console.log(`${label}: ${fits} of ${judged} fit, ${noValue} show no value${misfits.length > 0 ? `; do not fit: ${misfits.join(" | ")}` : ""}`);

	expect.soft(judged, `${label}: at least one card could be judged`).toBeGreaterThan(0);
	if (judged > 0) {
		expect.soft(fits / judged, `${label}: the share that fits must be at least ${threshold}. Not fitting: ${misfits.join(" | ")}`).toBeGreaterThanOrEqual(threshold);
	}
}

// Saves what was read, before any check, so it is kept even when a check fails.
function save(searchTerm: string, name: string, data: unknown): void {
	fs.mkdirSync(OUT_DIR, { recursive: true });
	fs.writeFileSync(path.join(OUT_DIR, `${searchTerm}__${name}.json`), JSON.stringify({ searchTerm, name, collectedAt: new Date().toISOString(), data }, null, 1));
}

// The page objects and flows of a test, with the search results already open.
async function openListing(page: Page, testInfo: TestInfo, searchTerm: string) {
	const flows = {
		productPage: new ProductListingPage(page),
		genericUtility: new GenericUtility(page, testInfo),
		cardFilterFlows: new CardFilterFlows(page, testInfo),
		productPageFlows: new ProductPageFlows(page, testInfo),
	};
	await flows.cardFilterFlows.openSearchResults(searchTerm);
	return flows;
}
type Listing = Awaited<ReturnType<typeof openListing>>;

// Applies the filter's options, opens the products of each, and checks that the page has the label (Pay on Delivery, Top Brand).
// The rule is: the filter is applied, so every product page that was read must show the label. Unavailable products are not opened.
async function checkLabelOnProductPages(listing: Listing, heading: string, field: "topBrand" | "payOnDelivery", label: string, searchTerm: string, onlyOptions?: string[]): Promise<void> {
	const { productPage, cardFilterFlows, productPageFlows } = listing;
	const results = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading(heading), heading, { onlyOptions });
	expect.soft(cardFilterFlows.notAppliedOptions, "Options not applied").toEqual([]);

	const judged: Judged[] = [];
	const saved: { option: string; products: ProductFacts[] }[] = [];
	for (const { option, cards } of results) {
		const products: ProductFacts[] = await productPageFlows.readProductPages(cards.filter((card) => !isUnavailable(card)), BADGE_PRODUCTS);
		saved.push({ option, products });
		for (const product of products) {
			judged.push({ what: `${product.asin} (${option})`, verdict: product.problem !== "" ? "no value" : product[field] !== "" ? "fits" : "does not fit" });
		}
	}
	save(searchTerm, `${heading.replace(/\s+/g, "_")}_pages`, saved);
	checkShare(`${label} on the product pages`, judged, 1);
}


// ---- Filters checked on the cards ----

// The rule of each: whether one card fits the option applied.
const cardRules: { heading: string; threshold: number; rule: (option: string, card: Card) => Verdict }[] = [
	{
		// The brand is a whole word of the title.
		heading: "Brands", threshold: 0.9,
		rule: (option, card) => card.title === "" ? "no value" : hasWholeWord(card.title, option) ? "fits" : "does not fit",
	},
	{
		// The printed discount is at least the option's: "25% Off or more" and "(44% off)". Amazon's own figure can differ a little, so 80% must fit.
		heading: "Discount", threshold: 0.8,
		rule: (option, card) => card.discount === "" ? "no value" : firstNumber(card.discount) >= firstNumber(option) ? "fits" : "does not fit",
	},
	{
		// The card's rating is at least the option's stars: "4 Stars & Up" and "4.1 out of 5 stars".
		heading: "Customer Reviews", threshold: 0.95,
		rule: (option, card) => card.rating === "" ? "no value" : firstNumber(card.rating) >= firstNumber(option) ? "fits" : "does not fit",
	},
	{
		// Every card prints a "FREE delivery" line.
		heading: "Eligible for Free Delivery", threshold: 0.9,
		rule: (_option, card) => card.delivery === "" ? "no value" : /free delivery/i.test(card.delivery) ? "fits" : "does not fit",
	},
];

for (const searchTerm of testData.searchTerms) {

	for (const { heading, threshold, rule } of cardRules) {
		test(`${searchTerm}: ${heading} filter, checked on the cards`, async ({ page }, testInfo) => {
			const listing = await openListing(page, testInfo, searchTerm);
			await listing.genericUtility.requireFilter(heading);

			const results = await listing.cardFilterFlows.applyFilterAndReadCards(listing.productPage.getFilterLinksByHeading(heading), heading);
			save(searchTerm, heading.replace(/\s+/g, "_"), results);

			expect.soft(listing.cardFilterFlows.notAppliedOptions, "Options not applied").toEqual([]);
			for (const { option, cards } of results) {
				checkShare(`${searchTerm} ${heading} '${option}'`, cards.map((card) => ({ what: card.title.slice(0, 50), verdict: rule(option, card) })), threshold);
			}
			expect(results.flatMap((result) => result.cards).length, "At least one card was read").toBeGreaterThan(0);
		});
	}

	test(`${searchTerm}: Price range filter, checked on the cards`, async ({ page }, testInfo) => {
		const listing = await openListing(page, testInfo, searchTerm);

		const results = await listing.cardFilterFlows.applyPriceRangesAndReadCards();
		test.skip(results.length === 0, "This search offers no price ranges, or none could be applied");
		save(searchTerm, "Price", results);

		expect.soft(listing.cardFilterFlows.notAppliedOptions, "Ranges not applied").toEqual([]);
		for (const { option, min, max, urlRange, sliderMin, sliderMax, cards } of results) {
			// Three places state the range: the URL (in paise), the two sliders, and the prices on the cards. A side that is open has no limit to compare.
			expect.soft(urlRange, `'${option}': the range in the URL`).toBe(`${min === null ? "" : min * 100}-${max === null ? "" : max * 100}`);
			if (min !== null) expect.soft(firstNumber(sliderMin), `'${option}': the lower slider reads '${sliderMin}'`).toBe(min);
			if (max !== null) expect.soft(firstNumber(sliderMax), `'${option}': the upper slider reads '${sliderMax}'`).toBe(max);

			checkShare(`${searchTerm} Price '${option}'`, cards.map((card) => {
				const price: number = firstNumber(card.price);
				return { what: `${card.title.slice(0, 40)} ${card.price}`, verdict: Number.isNaN(price) ? "no value" : (min === null || price >= min) && (max === null || price <= max) ? "fits" : "does not fit" };
			}), 0.9);
		}
	});


	// ---- The card against itself ----

	test(`${searchTerm}: price, M.R.P. and printed discount of each card agree`, async ({ page }, testInfo) => {
		const listing = await openListing(page, testInfo, searchTerm);
		const cards: Card[] = await listing.productPage.readCards();
		save(searchTerm, "Card_self_check", cards);

		// (M.R.P. - price) / M.R.P. rounds to the printed percent. A card that does not print all three is not judged.
		checkShare(`${searchTerm} card self-check`, cards.map((card) => {
			const price: number = firstNumber(card.price);
			const mrp: number = firstNumber(card.mrp);
			const printed: number = firstNumber(card.discount);
			if ([price, mrp, printed].some(Number.isNaN)) return { what: card.title.slice(0, 40), verdict: "no value" };
			return { what: `${card.title.slice(0, 40)} price ${price}, M.R.P. ${mrp}, printed ${printed}%`, verdict: Math.abs(Math.round((mrp - price) / mrp * 100) - printed) <= 1 ? "fits" : "does not fit" };
		}), 0.95);
	});


	// ---- Filters and facts checked on the product pages ----

	test(`${searchTerm}: Pay On Delivery filter, checked on the product pages`, async ({ page }, testInfo) => {
		const listing = await openListing(page, testInfo, searchTerm);
		await listing.genericUtility.requireFilter("Pay On Delivery");
		await checkLabelOnProductPages(listing, "Pay On Delivery", "payOnDelivery", "Pay on Delivery card", searchTerm);
	});

	test(`${searchTerm}: Top Brands filter, checked on the product pages`, async ({ page }, testInfo) => {
		const listing = await openListing(page, testInfo, searchTerm);
		// Its heading changes with the search ("Cell Phone Brands" for mobiles), so it is found by the option.
		const heading: string = await listing.productPage.textOf(listing.productPage.getHeadingOfOption(TOP_BRANDS));
		test.skip(heading === "", `This search has no '${TOP_BRANDS}' option`);
		await checkLabelOnProductPages(listing, heading, "topBrand", "Top Brand card", searchTerm, [TOP_BRANDS]);
	});

	test(`${searchTerm}: Seller filter, checked on the product pages`, async ({ page }, testInfo) => {
		test.setTimeout(60 * 60_000);
		const listing = await openListing(page, testInfo, searchTerm);
		await listing.genericUtility.requireFilter("Seller");
		const { productPage, cardFilterFlows, productPageFlows } = listing;

		const results = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading("Seller"), "Seller");
		expect.soft(cardFilterFlows.notAppliedOptions, "Options not applied").toEqual([]);

		// The product is sold by the option's seller in the buy box or in another offer. An unavailable product has no offer to read, so it is not opened.
		const judged: Judged[] = [];
		const saved: { option: string; products: ProductFacts[] }[] = [];
		for (const { option, cards } of results) {
			const products: ProductFacts[] = await productPageFlows.readProductPages(cards.filter((card) => !isUnavailable(card)), SELLER_PRODUCTS, { isExpectedSeller: (seller) => sameSeller(seller, option) });
			saved.push({ option, products });
			for (const product of products) {
				const sold: boolean = sameSeller(product.seller, option) && product.seller !== "" || product.offerSellers.some((seller) => sameSeller(seller, option));
				const noSeller: boolean = product.seller === "" && product.offerSellers.length === 0;
				judged.push({ what: `${product.asin} (${option}, page shows '${product.seller}')`, verdict: product.problem !== "" || noSeller ? "no value" : sold ? "fits" : "does not fit" });
			}
		}
		save(searchTerm, "Seller_pages", saved);

		// How reliable the Seller filter is has not been settled yet, so a seller that does not match is reported, not failed.
		const different: string[] = judged.filter((item) => item.verdict === "does not fit").map((item) => item.what);
		different.forEach((what) => testInfo.annotations.push({ type: "seller-mismatch", description: what }));
		console.log(`${searchTerm} Seller: ${judged.filter((item) => item.verdict === "fits").length} of ${judged.length} products sold by the option's seller; ${different.length} different; ${judged.filter((item) => item.verdict === "no value").length} unread or no seller`);
		expect(judged.length, "At least one product page was read").toBeGreaterThan(0);
	});

	test(`${searchTerm}: rating on the card equals the rating on the product page`, async ({ page }, testInfo) => {
		test.setTimeout(30 * 60_000);
		const listing = await openListing(page, testInfo, searchTerm);
		const cards: Card[] = (await listing.productPage.readCards()).filter((card) => card.rating !== "" && !isUnavailable(card));

		const products: ProductFacts[] = await listing.productPageFlows.readProductPages(cards, RATING_PRODUCTS);
		save(searchTerm, "Rating_pages", products.map((product) => ({ ...product, cardRating: cards.find((card) => card.asin === product.asin)?.rating })));

		// Both print "N out of 5 stars"; a difference of one tenth is rounding.
		checkShare(`${searchTerm} card rating against product page`, products.map((product) => {
			const cardRating: number = firstNumber(cards.find((card) => card.asin === product.asin)?.rating ?? "");
			const pageRating: number = firstNumber(product.rating);
			if (product.problem !== "" || Number.isNaN(cardRating) || Number.isNaN(pageRating)) return { what: product.asin, verdict: "no value" };
			return { what: `${product.asin} card ${cardRating}, page ${pageRating}`, verdict: Math.abs(cardRating - pageRating) <= 0.1001 ? "fits" : "does not fit" };
		}), 0.9);
	});
}
