import { Locator, Page, TestInfo } from "@playwright/test";
import ProductListingPage, { Card } from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import Logger from "../utils/Logger";

const log = Logger.for("ProductPageFlows");

// Every read says which product it was, and whether its page could be read: problem is "" when it was, otherwise why not (the facts are then empty).
type Visit = { asin: string; title: string; problem: string };

export type SellerFacts = Visit & {
	seller: string; // the seller of the main offer, "" when the buy box shows none
	offerSellers: string[]; // the sellers of all the offers, read only when the main offer is not the expected seller
};
export type BadgeFacts = Visit & { badge: string }; // the text of the card (Top Brand, Pay on Delivery), "" when the page has none
export type RatingFacts = Visit & { rating: string }; // for example "4.2 out of 5 stars", "" when the page shows none

// Opens the product pages of the cards of a listing, one at a time, and reads one thing from each. There is one method per thing:
// each waits only for what it reads, and has its own fallback when that is not there. When what it reads is missing, a screenshot of the page
// is attached to the test.
// The listing tab is never touched: every product opens in its own tab, and that tab is always closed.
// A page that is odd never throws: it comes back with `problem` filled in. The one exception is a blocked page
// (503 or "Continue shopping"), which skips the test, as in every other flow.
class ProductPageFlows {

	private page: Page;
	private testInfo: TestInfo;

	constructor(page: Page, testInfo: TestInfo) {
		this.page = page;
		this.testInfo = testInfo;
	}


	// ---- The flows: one per thing read ----

	// The seller of each product. Fallback: when the main offer is missing or is not the expected seller, the sellers of all the offers are read.
	async readSellers(cards: Card[], limit: number, isExpectedSeller: (seller: string) => boolean): Promise<SellerFacts[]> {
		return this.visitProducts(cards, limit, { seller: "", offerSellers: [] as string[] }, async (tab, detailPage, asin) => {
			await detailPage.sellerNameIndividualPage.first().waitFor({ state: "attached", timeout: 10_000 }).catch(() => {}); // the buy box loads after the page
			const seller: string = await detailPage.textOf(detailPage.sellerNameIndividualPage);
			const offerSellers: string[] = seller !== "" && isExpectedSeller(seller) ? [] : await this.readSellersOfAllOffers(tab, detailPage, asin);
			log.info(`Product ${asin}: buy box seller '${seller || "none"}', offers' sellers [${offerSellers.join(", ")}]`);
			if (!(seller !== "" && isExpectedSeller(seller)) && !offerSellers.some(isExpectedSeller)) {
				await this.captureProduct(tab, "expected seller not found", asin);
			}
			return { seller, offerSellers };
		});
	}

	// The "Top Brand" card of each product. Fallback: when it is not there, the page is reloaded once.
	async readTopBrandBadges(cards: Card[], limit: number): Promise<BadgeFacts[]> {
		return this.visitProducts(cards, limit, { badge: "" }, async (tab, detailPage, asin) => {
			const topBrand: Locator = detailPage.topBrandBadgeIndividualPage;
			const badge: string = (await this.waitForElement(tab, topBrand)) ? await detailPage.textOf(topBrand) : "";
			log.info(`Product ${asin}: Top Brand card '${badge || "none"}'`);
			if (badge === "") await this.captureProduct(tab, "no Top Brand card", asin);
			return { badge };
		});
	}

	// The "Pay on Delivery" card of each product. Fallback: when it is not there, the page is reloaded once.
	async readPayOnDeliveryBadges(cards: Card[], limit: number): Promise<BadgeFacts[]> {
		return this.visitProducts(cards, limit, { badge: "" }, async (tab, detailPage, asin) => {
			const payOnDelivery: Locator = detailPage.payOnDeliveryBadgeIndividualPage;
			const badge: string = (await this.waitForElement(tab, payOnDelivery)) ? await detailPage.textOf(payOnDelivery) : "";
			log.info(`Product ${asin}: Pay on Delivery card '${badge || "none"}'`);
			if (badge === "") await this.captureProduct(tab, "no Pay on Delivery card", asin);
			return { badge };
		});
	}

	// The star rating of each product page. Fallback: when it is not there, the page is reloaded once.
	async readRatings(cards: Card[], limit: number): Promise<RatingFacts[]> {
		return this.visitProducts(cards, limit, { rating: "" }, async (tab, detailPage, asin) => {
			const stars: Locator = detailPage.ratingIndividualPage;
			const rating: string = (await this.waitForElement(tab, stars)) ? ((await stars.first().getAttribute("title", { timeout: 3_000 }).catch(() => "")) ?? "") : "";
			log.info(`Product ${asin}: rating '${rating || "none"}'`);
			if (rating === "") await this.captureProduct(tab, "no rating", asin);
			return { rating };
		});
	}


	// ---- Steps ----

	// Opens the first `limit` products of the cards, each ASIN once, with a pause between pages, and runs `readPage` on each.
	// noFacts is what a page that could not be read returns.
	private async visitProducts<T extends object>(cards: Card[], limit: number, noFacts: T, readPage: (tab: Page, detailPage: ProductListingPage, asin: string) => Promise<T>): Promise<(Visit & T)[]> {
		const asins: string[] = [...new Set(cards.map((card) => card.asin).filter((asin) => asin !== ""))].slice(0, limit);
		const reads: (Visit & T)[] = [];

		for (const asin of asins) {
			const title: string = cards.find((card) => card.asin === asin)?.title ?? "";
			reads.push(await this.visitProduct(asin, title, noFacts, readPage));
			await this.page.waitForTimeout(2_000);
		}
		return reads;
	}

	private async visitProduct<T extends object>(asin: string, title: string, noFacts: T, readPage: (tab: Page, detailPage: ProductListingPage, asin: string) => Promise<T>): Promise<Visit & T> {
		const tab: Page = await this.page.context().newPage();
		try {
			// 1. Open the page. One more try when it does not load.
			const loadProblem: string = await this.openProduct(tab, asin);
			if (loadProblem !== "") {
				log.warn(`Product ${asin}: ${loadProblem}`);
				return { asin, title, problem: loadProblem, ...noFacts };
			}

			// 2. A blocked page skips the test. This is outside the try block below, which would swallow the skip.
			const tabUtility = new GenericUtility(tab, this.testInfo);
			await tabUtility.skipIfBlocked(await tabUtility.clearBlockers(), `opening product ${asin}`);

			// 3. It must be a product page. A page that has not loaded has no title, and would be judged as a page that lacks what the test looks for.
			const detailPage = new ProductListingPage(tab);
			if (!(await detailPage.productTitleIndividualPage.first().waitFor({ state: "attached", timeout: 10_000 }).then(() => true).catch(() => false))) {
				const problem = "the page is not a product page (no title within 10s)";
				log.warn(`Product ${asin}: ${problem}`);
				await this.captureProduct(tab, "page not read", asin);
				return { asin, title, problem, ...noFacts };
			}

			// 4. Read it. Whatever goes wrong here is reported on the product, not thrown.
			try {
				return { asin, title, problem: "", ...(await readPage(tab, detailPage, asin)) };
			} catch (error) {
				const problem = `reading the page failed: ${error instanceof Error ? error.message.split("\n")[0] : error}`;
				log.warn(`Product ${asin}: ${problem}`);
				await this.captureProduct(tab, "page not read", asin);
				return { asin, title, problem, ...noFacts };
			}
		} finally {
			await tab.close();
		}
	}

	// A screenshot of the product page, attached to the test as evidence of what was missing. Only taken when something is missing.
	private async captureProduct(tab: Page, what: string, asin: string): Promise<void> {
		await new GenericUtility(tab, this.testInfo).capture(this.testInfo, what, asin);
	}

	// Loads the product page, with one more try. Returns "" when it loaded, otherwise the reason.
	private async openProduct(tab: Page, asin: string): Promise<string> {
		let problem: string = "";
		for (let attempt = 1; attempt <= 2; attempt++) {
			try {
				await tab.goto(`https://www.amazon.in/dp/${asin}`, { waitUntil: "domcontentloaded" });
				return "";
			} catch (error) {
				problem = `the page did not load (attempt ${attempt}): ${error instanceof Error ? error.message.split("\n")[0] : error}`;
			}
		}
		return problem;
	}

	// Waits (5s) for the element to be in the page. When it is not, reloads the page once and waits again. True when it showed up.
	private async waitForElement(tab: Page, element: Locator): Promise<boolean> {
		for (let attempt = 1; attempt <= 2; attempt++) {
			if (await element.first().waitFor({ state: "attached", timeout: 5_000 }).then(() => true).catch(() => false)) {
				return true;
			}
			if (attempt === 1) {
				await tab.reload({ waitUntil: "domcontentloaded" }).catch(() => {});
				// A blocked page skips the test, instead of counting as a page without the element.
				const tabUtility = new GenericUtility(tab, this.testInfo);
				await tabUtility.skipIfBlocked(await tabUtility.clearBlockers(), "reloading a product page");
			}
		}
		return false;
	}

	// Opens the panel with all the offers of a product page and returns the seller of each offer (each name once).
	// The panel is opened with "See All Buying Options" (no buy box seller) or the "New (n) from" link (a buy box seller).
	// When the page has neither, the same product is loaded with ?aod=1, which opens the panel by itself. Returns [] if it cannot be read.
	private async readSellersOfAllOffers(tab: Page, detailPage: ProductListingPage, asin: string): Promise<string[]> {
		try {
			const openOffers = detailPage.seeAllBuyingOptionsIndividualPage.or(detailPage.otherOffersLinkIndividualPage).first();
			if (await openOffers.isVisible()) {
				await openOffers.click();
			} else {
				await tab.goto(`https://www.amazon.in/dp/${asin}?aod=1`, { waitUntil: "domcontentloaded" });
			}

			// The seller names are in the page about 2s after the click, but Playwright counts them as not visible (the panel keeps
			// them in a collapsed part), so wait for them to be attached, not visible. Nothing in the panel needs to be clicked.
			await detailPage.offerSellersIndividualPage.first().waitFor({ state: "attached", timeout: 10_000 });
			await tab.waitForTimeout(1_000);

			// The panel lists about 12 offers and loads more as it is scrolled. Scroll to its end until no more appear.
			for (let round = 0; round < 5; round++) {
				const before: number = await detailPage.offerSellersIndividualPage.count();
				await detailPage.offerSellersIndividualPage.last().scrollIntoViewIfNeeded({ timeout: 3_000 }).catch(() => {});
				await tab.waitForTimeout(1_000);
				if ((await detailPage.offerSellersIndividualPage.count()) === before) {
					break;
				}
			}

			const names: string[] = (await detailPage.offerSellersIndividualPage.allInnerTexts()).map((name) => name.replace(/\s+/g, " ").trim()).filter((name) => name !== "");
			return [...new Set(names)];
		} catch (error) {
			log.warn(`Product ${asin}: could not read the sellers of all offers: ${error instanceof Error ? error.message.split("\n")[0] : error}`);
			return [];
		}
	}
}

export default ProductPageFlows;
