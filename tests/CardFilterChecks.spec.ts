// Checks the filters whose result the page states exactly (numbers, labels, ASINs), against the product cards or the product pages.
// One test per filter and search term; a filter the search does not show is skipped. What was read is saved in collected/ before any check.
// The rules and thresholds are in utils/CardChecks.ts; the steps on the pages are in flows/CardFilterFlows.ts and flows/ProductPageFlows.ts.
//
//  Cards (listing only):  Brands, Discount, Customer Reviews, Free delivery, Price range, and the card's own price / M.R.P. / discount.
//  Product pages:         Pay on Delivery and Top Brands (the label must be there), Seller (the seller sells the product),
//                         and the rating on the card against the rating on the product page.
//
// It has its own config, playwright.card-checks.config.ts (built on the main one).
// Run:  npx playwright test -c playwright.card-checks.config.ts -g "Mobile: Discount" --headed      (or: npm run test:card-checks -- -g "Mobile: Discount")
//       SLOWMO=10000 pause in ms at every action (default 700),  PW_WORKERS=1 browsers at a time,  PRODUCTS=5 pages per Seller option,
//       BADGE_PRODUCTS=all|N pages per label filter,  RATING_PRODUCTS=8 pages for the rating check
import { test, expect } from "@playwright/test";
import ProductListingPage, { Card, hasNoMainOffer, isUnavailable } from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import CardFilterFlows from "../flows/CardFilterFlows";
import ProductPageFlows from "../flows/ProductPageFlows";
import testData from "../testdata/searchTerms.json";
import {
	BADGE_PRODUCTS, RATING_PRODUCTS, SELLER_PRODUCTS, Judged,
	badgeVerdict, cardRules, checkShare, firstNumber, priceVerdict, ratingVerdict, sameSeller, saveCollected, selfCheckVerdict, sellerVerdict,
} from "../utils/CardChecks";
import { useTestLog } from "../utils/TestHooks";

// Every test gets its own log, attached to the report (the flows write to it).
useTestLog();

for (const searchTerm of testData.searchTerms) {

	// ---- Filters checked on the cards ----

	for (const { heading, threshold, rule } of cardRules) {
		test(`${searchTerm}: ${heading} filter, checked on the cards`, async ({ page }, testInfo) => {
			const productPage = new ProductListingPage(page);
			const genericUtility = new GenericUtility(page, testInfo);
			const cardFilterFlows = new CardFilterFlows(page, testInfo);

			await cardFilterFlows.openSearchResults(searchTerm);
			await genericUtility.requireFilter(heading);

			const results = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading(heading), heading);
			saveCollected(searchTerm, heading, results);

			expect.soft(cardFilterFlows.notAppliedOptions, "Options not applied").toEqual([]);
			for (const { option, cards } of results) {
				checkShare(`${searchTerm} ${heading} '${option}'`, cards.map((card) => ({ what: card.title.slice(0, 50), verdict: rule(option, card) })), threshold);
			}
			expect(results.flatMap((result) => result.cards).length, "At least one card was read").toBeGreaterThan(0);
		});
	}

	test(`${searchTerm}: Price range filter, checked on the cards`, async ({ page }, testInfo) => {
		const cardFilterFlows = new CardFilterFlows(page, testInfo);

		await cardFilterFlows.openSearchResults(searchTerm);
		const results = await cardFilterFlows.applyPriceRangesAndReadCards();
		// Only a search that offers no ranges is skipped. Ranges that were offered but could not be applied fail the test below.
		test.skip(results.length === 0 && cardFilterFlows.notAppliedOptions.length === 0, "This search offers no price ranges");
		saveCollected(searchTerm, "Price", results);

		expect.soft(cardFilterFlows.notAppliedOptions, "Ranges not applied").toEqual([]);
		expect(results.length, "At least one price range was read").toBeGreaterThan(0);
		for (const { option, expectedUrlRange, min, max, urlRange, sliderMin, sliderMax, cards } of results) {
			// Three places state the range: the URL (in paise), the two sliders, and the prices on the cards. A side that is open has no limit to compare.
			expect.soft(urlRange, `'${option}': the range in the URL`).toBe(expectedUrlRange);
			if (min !== null) expect.soft(firstNumber(sliderMin), `'${option}': the lower slider reads '${sliderMin}'`).toBe(min);
			if (max !== null) expect.soft(firstNumber(sliderMax), `'${option}': the upper slider reads '${sliderMax}'`).toBe(max);

			checkShare(`${searchTerm} Price '${option}'`, cards.map((card) => priceVerdict(card, min, max)), 0.9);
		}
	});

	test(`${searchTerm}: price, M.R.P. and printed discount of each card agree`, async ({ page }, testInfo) => {
		const productPage = new ProductListingPage(page);
		const cardFilterFlows = new CardFilterFlows(page, testInfo);

		await cardFilterFlows.openSearchResults(searchTerm);
		const cards: Card[] = await productPage.readCards();
		saveCollected(searchTerm, "Card self-check", cards);

		checkShare(`${searchTerm} card self-check`, cards.map(selfCheckVerdict), 0.95);
	});


	// ---- Filters and facts checked on the product pages ----

	test(`${searchTerm}: Pay On Delivery filter, checked on the product pages`, async ({ page }, testInfo) => {
		const productPage = new ProductListingPage(page);
		const genericUtility = new GenericUtility(page, testInfo);
		const cardFilterFlows = new CardFilterFlows(page, testInfo);
		const productPageFlows = new ProductPageFlows(page, testInfo);

		await cardFilterFlows.openSearchResults(searchTerm);
		await genericUtility.requireFilter("Pay On Delivery");

		const results = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading("Pay On Delivery"), "Pay On Delivery");
		expect.soft(cardFilterFlows.notAppliedOptions, "Options not applied").toEqual([]);
		expect(results.length, "The filter was applied").toBeGreaterThan(0);

		// The filter is applied, so every product page must show the Pay on Delivery card. A product with no main offer is not opened.
		const judged: Judged[] = [];
		const saved = [];
		for (const { option, cards } of results) {
			const products = await productPageFlows.readPayOnDeliveryBadges(cards.filter((card) => !hasNoMainOffer(card)), BADGE_PRODUCTS);
			saved.push({ option, products });
			judged.push(...products.map((product) => badgeVerdict(product, option)));
		}
		saveCollected(searchTerm, "Pay On Delivery pages", saved);
		checkShare(`${searchTerm} Pay on Delivery card on the product pages`, judged, 1);
	});

	test(`${searchTerm}: Top Brands filter, checked on the product pages`, async ({ page }, testInfo) => {
		const productPage = new ProductListingPage(page);
		const genericUtility = new GenericUtility(page, testInfo);
		const cardFilterFlows = new CardFilterFlows(page, testInfo);
		const productPageFlows = new ProductPageFlows(page, testInfo);
		const topBrands = "Top Brands";

		await cardFilterFlows.openSearchResults(searchTerm);
		await genericUtility.skipIfBlocked(await genericUtility.clearBlockers(), "opening the results");

		// The heading changes with the search ("Cell Phone Brands" for mobiles), so it is found by the option. The filters load after the page: wait up to 10s for it.
		await productPage.getHeadingOfOption(topBrands).waitFor({ state: "visible", timeout: 10_000 }).catch(() => {});
		const heading: string = await productPage.textOf(productPage.getHeadingOfOption(topBrands));
		test.skip(heading === "", `This search has no '${topBrands}' option`);

		const results = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading(heading), heading, { onlyOptions: [topBrands] });
		expect.soft(cardFilterFlows.notAppliedOptions, "Options not applied").toEqual([]);
		expect(results.length, "The filter was applied").toBeGreaterThan(0);

		// The filter is applied, so every product page must show the Top Brand card. A product with no main offer is not opened.
		const judged: Judged[] = [];
		const saved = [];
		for (const { option, cards } of results) {
			const products = await productPageFlows.readTopBrandBadges(cards.filter((card) => !hasNoMainOffer(card)), BADGE_PRODUCTS);
			saved.push({ option, products });
			judged.push(...products.map((product) => badgeVerdict(product, option)));
		}
		saveCollected(searchTerm, "Top Brands pages", saved);
		checkShare(`${searchTerm} Top Brand card on the product pages`, judged, 1);
	});

	test(`${searchTerm}: Seller filter, checked on the product pages`, async ({ page }, testInfo) => {
		test.setTimeout(60 * 60_000);
		const productPage = new ProductListingPage(page);
		const genericUtility = new GenericUtility(page, testInfo);
		const cardFilterFlows = new CardFilterFlows(page, testInfo);
		const productPageFlows = new ProductPageFlows(page, testInfo);

		await cardFilterFlows.openSearchResults(searchTerm);
		await genericUtility.requireFilter("Seller");

		const results = await cardFilterFlows.applyFilterAndReadCards(productPage.getFilterLinksByHeading("Seller"), "Seller");
		expect.soft(cardFilterFlows.notAppliedOptions, "Options not applied").toEqual([]);

		// The product is sold by the option's seller in the buy box or in another offer. An unavailable product has no offer to read, so it is not opened.
		const judged: Judged[] = [];
		const saved = [];
		for (const { option, cards } of results) {
			const products = await productPageFlows.readSellers(cards.filter((card) => !isUnavailable(card)), SELLER_PRODUCTS, (seller) => sameSeller(seller, option));
			saved.push({ option, products });
			judged.push(...products.map((product) => sellerVerdict(product, option)));
		}
		saveCollected(searchTerm, "Seller pages", saved);

		// How reliable the Seller filter is has not been settled yet, so a seller that does not match is reported, not failed.
		const different: string[] = judged.filter((item) => item.verdict === "does not fit").map((item) => item.what);
		different.forEach((what) => testInfo.annotations.push({ type: "seller-mismatch", description: what }));
		console.log(`${searchTerm} Seller: ${judged.filter((item) => item.verdict === "fits").length} of ${judged.length} products sold by the option's seller; ${different.length} different; ${judged.filter((item) => item.verdict === "no value").length} unread or no seller`);
		expect(judged.length, "At least one product page was read").toBeGreaterThan(0);
	});

	test(`${searchTerm}: rating on the card equals the rating on the product page`, async ({ page }, testInfo) => {
		test.setTimeout(30 * 60_000);
		const productPage = new ProductListingPage(page);
		const cardFilterFlows = new CardFilterFlows(page, testInfo);
		const productPageFlows = new ProductPageFlows(page, testInfo);

		await cardFilterFlows.openSearchResults(searchTerm);
		const cards: Card[] = (await productPage.readCards()).filter((card) => card.rating !== "" && !isUnavailable(card));
		const cardRatingOf = (asin: string): string => cards.find((card) => card.asin === asin)?.rating ?? "";

		const products = await productPageFlows.readRatings(cards, RATING_PRODUCTS);
		saveCollected(searchTerm, "Rating pages", products.map((product) => ({ ...product, cardRating: cardRatingOf(product.asin) })));

		checkShare(`${searchTerm} card rating against product page`, products.map((product) => ratingVerdict(product, cardRatingOf(product.asin))), 0.9);
	});
}
