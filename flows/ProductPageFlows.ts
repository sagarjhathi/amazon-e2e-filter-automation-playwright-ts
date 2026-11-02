import { Page, TestInfo } from "@playwright/test";
import ProductListingPage, { Card } from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import Logger from "../utils/Logger";

const log = Logger.for("ProductPageFlows");

// What one product page showed. problem is "" when the page was read, otherwise why it could not be (the other fields are then empty).
export type ProductFacts = {
	asin: string;
	title: string;
	problem: string;
	seller: string; // the seller of the main offer, "" when the buy box shows none
	offerSellers: string[]; // the sellers of all the offers, read only when asked for (see isExpectedSeller)
	topBrand: string; // the text of the "Top Brand" card, "" when the page has none
	payOnDelivery: string; // the text of the "Pay on Delivery" card, "" when the page has none
	rating: string; // the star rating of the page, for example "4.2 out of 5 stars", "" when it shows none
};

type ReadSettings = {
	// When given, and the buy box seller is missing or not the expected one, the sellers of all the offers are read too.
	isExpectedSeller?: (seller: string) => boolean;
	// When given, a page that has the "Top Brand" card gets a screenshot of the card in this folder.
	screenshotDir?: string;
};

// Opens the product pages of the cards of a listing, one at a time, and reads what a filter test needs from each.
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


	// ---- The flow ----

	// Reads the first `limit` products of the cards, each ASIN once, with a pause between pages.
	async readProductPages(cards: Card[], limit: number, settings: ReadSettings = {}): Promise<ProductFacts[]> {
		const asins: string[] = [...new Set(cards.map((card) => card.asin).filter((asin) => asin !== ""))].slice(0, limit);
		const facts: ProductFacts[] = [];

		for (const asin of asins) {
			const title: string = cards.find((card) => card.asin === asin)?.title ?? "";
			facts.push(await this.readOneProduct(asin, title, settings));
			await this.page.waitForTimeout(2_000);
		}
		return facts;
	}


	// ---- Steps ----

	private async readOneProduct(asin: string, title: string, settings: ReadSettings): Promise<ProductFacts> {
		const empty: ProductFacts = { asin, title, problem: "", seller: "", offerSellers: [], topBrand: "", payOnDelivery: "", rating: "" };
		const tab: Page = await this.page.context().newPage();
		try {
			// 1. Open the page. One more try when it does not load.
			const loadProblem: string = await this.openProduct(tab, asin);
			if (loadProblem !== "") {
				log.warn(`Product ${asin}: ${loadProblem}`);
				return { ...empty, problem: loadProblem };
			}

			// 2. A blocked page skips the test. This is outside the try block below, which would swallow the skip.
			const tabUtility = new GenericUtility(tab, this.testInfo);
			await tabUtility.skipIfBlocked(await tabUtility.clearBlockers(), `opening product ${asin}`);

			// 3. Read it. Whatever goes wrong here is reported on the product, not thrown.
			try {
				const detailPage = new ProductListingPage(tab);
				await detailPage.sellerNameIndividualPage.first().waitFor({ state: "attached", timeout: 10_000 }).catch(() => {}); // the buy box loads after the page
				const seller: string = await detailPage.textOf(detailPage.sellerNameIndividualPage);
				const topBrand: string = await detailPage.textOf(detailPage.topBrandBadgeIndividualPage);
				const payOnDelivery: string = await detailPage.textOf(detailPage.payOnDeliveryBadgeIndividualPage);
				const rating: string = (await detailPage.ratingIndividualPage.count()) > 0 ? ((await detailPage.ratingIndividualPage.first().getAttribute("title", { timeout: 3_000 }).catch(() => "")) ?? "") : "";
				if (topBrand !== "" && settings.screenshotDir) {
					await detailPage.topBrandBadgeIndividualPage.first().screenshot({ path: `${settings.screenshotDir}/${asin}-top-brand.png` }).catch(() => {});
				}

				const needsOffers: boolean = settings.isExpectedSeller !== undefined && (seller === "" || !settings.isExpectedSeller(seller));
				const offerSellers: string[] = needsOffers ? await this.readSellersOfAllOffers(tab, detailPage, asin) : [];

				log.info(`Product ${asin}: buy box seller '${seller || "none"}', offers' sellers [${offerSellers.join(", ")}], Top Brand card '${topBrand || "none"}', Pay on Delivery card '${payOnDelivery || "none"}', rating '${rating || "none"}'`);
				return { ...empty, seller, offerSellers, topBrand, payOnDelivery, rating };
			} catch (error) {
				const problem = `reading the page failed: ${error instanceof Error ? error.message.split("\n")[0] : error}`;
				log.warn(`Product ${asin}: ${problem}`);
				return { ...empty, problem };
			}
		} finally {
			await tab.close();
		}
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
