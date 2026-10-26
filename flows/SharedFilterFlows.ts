import { errors, Locator, Page, TestInfo } from "@playwright/test";
import ProductListingPage from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import RunConfig from "../utils/RunConfig";
import Logger from "../utils/Logger";

const log = Logger.for("SharedFilterFlows");

// One product's scraped values, keyed by field name (filter, title, keyFeatures, about, techDetails, loaded).
type ProductValue = string | number | boolean | null | string[];
type ProductResult = Map<string, ProductValue>;

// What the Discount flow returns for one product card.
type DiscountCard = { filter: string; title: string; discount: number | null; cardText: string };

// The first line of an error message. Playwright messages run to many lines, and one line is enough for the log.
function firstLine(error: unknown): string {
	return error instanceof Error ? error.message.split("\n")[0] : String(error);
}

// Applies the options of one filter (storage, battery, discount...) and reads the products shown under each of them.
// The two public flows only collect data; the test compares it with the filter option it was read under.
//
// How to read the log of a run:
//   FILTER banner      -> the filter, how many options it has, how many are checked
//   OPTION banner      -> one option: applied? how many products listed? how many read? cleared?
//   'option' product N -> one product: tab opened, page loaded, sections found, text read (or what failed)
//   FILTER DONE banner -> totals, and the options that could not be applied
class SharedFilterFlows {

	private page: Page;
	private genericUtility: GenericUtility;
	private productPage: ProductListingPage;
	private testInfo: TestInfo;

	// Filter options that could not be clicked or did not show as applied; the test reports them.
	notAppliedOptions: string[] = [];

	// The listing before any option is applied. A reload keeps the applied option (it is in the address), so going back
	// here is how the page is reset to the unfiltered list when the Clear control cannot be clicked.
	private listingUrl: string = "";

	constructor(page: Page, testInfo: TestInfo) {
		this.page = page;
		this.testInfo = testInfo;
		this.productPage = new ProductListingPage(page);
		this.genericUtility = new GenericUtility(page, testInfo);
	}


	// ---- Flow for the specification filters: open each product and read its details ----

	// For each option of the filter: apply it, open the first products one by one and read their details, then clear it.
	// Returns one map per product read. The test compares each map with the filter option it was read under.
	async applyFilterAndValidateProductsWithResult(filterOptionsBy: Locator, filterName: string): Promise<ProductResult[]> {
		const flowStartedAt: number = Date.now();
		this.listingUrl = this.page.url();

		// The options load in gradually, so wait for them to show and settle before counting them.
		const optionCount: number = await this.genericUtility.waitForFilterOptions(filterOptionsBy, filterName);
		if (optionCount === 0) {
			log.warn(`0 '${filterName}' filter options found after waiting; nothing to validate (${await this.where()})`);
			return [];
		}

		const optionsToCheck: number = RunConfig.filterOptionLimit(optionCount);
		log.section(`FILTER '${filterName}': ${optionCount} option(s) on the page, checking ${optionsToCheck} (${await this.where()})`);

		const results: ProductResult[] = [];

		for (let position = 0; position < optionsToCheck; position++) {

			// 1. Which option is next (read live, the list changes after every apply and clear).
			const filterValue: string | null = await this.readOptionName(filterOptionsBy, filterName, position);
			if (filterValue === null) {
				break;
			}
			const optionStartedAt: number = Date.now();
			log.section(`OPTION ${position + 1} of ${optionsToCheck}: '${filterValue}'`);

			// 2. Apply it. If it cannot be applied, it is recorded in notAppliedOptions and we move on.
			if (!(await this.applyOption(filterName, filterValue, optionStartedAt))) {
				continue;
			}

			// 3. Open the first products one by one and read their details.
			const productCount: number = await this.productsToRead(filterValue);
			let notRead: number = 0;
			for (let productIndex = 0; productIndex < productCount; productIndex++) {
				if (!(await this.productIsListed(productIndex))) {
					log.warn(`'${filterValue}': product ${productIndex + 1} is no longer on the listing; moving on`);
					break;
				}

				const productResult: ProductResult = await this.readProductPage(productIndex, filterValue);
				results.push(productResult);
				if (!productResult.get("loaded")) {
					notRead++;
				}
			}

			// 4. Clear the option, so the next one starts from the full list.
			await this.clearAppliedOption(filterName, filterValue);
			log.info(`'${filterValue}' finished in ${this.secondsSince(optionStartedAt)}s: ${results.length} product result(s) so far, ${notRead} of this option's products not read`);
		}

		this.logFilterDone(filterName, `${results.length} product result(s), ${results.filter((product) => !product.get("loaded")).length} not read`, flowStartedAt);
		return results;
	}


	// ---- Flow for the Discount filter: stays on the listing page, product pages are never opened ----

	// Applies each Discount option and reads the discount printed on the cards in the listing (up to the cards limit).
	// Returns one entry per card that could be read; discount is null when the card shows none.
	async applyDiscountFilterAndReadCards(filterOptionsBy: Locator): Promise<DiscountCard[]> {
		const filterName: string = "discount";
		const flowStartedAt: number = Date.now();
		this.listingUrl = this.page.url();

		const optionCount: number = await this.genericUtility.waitForFilterOptions(filterOptionsBy, filterName);
		if (optionCount === 0) {
			log.warn(`0 '${filterName}' filter options found after waiting; nothing to validate (${await this.where()})`);
			return [];
		}

		const optionsToCheck: number = RunConfig.filterOptionLimit(optionCount);
		log.section(`FILTER '${filterName}': ${optionCount} option(s) on the page, checking ${optionsToCheck} (${await this.where()})`);

		const cards: DiscountCard[] = [];

		for (let position = 0; position < optionsToCheck; position++) {

			// 1. Which option is next.
			const filterValue: string | null = await this.readOptionName(filterOptionsBy, filterName, position);
			if (filterValue === null) {
				break;
			}
			const optionStartedAt: number = Date.now();
			log.section(`OPTION ${position + 1} of ${optionsToCheck}: '${filterValue}'`);

			// 2. Apply it.
			if (!(await this.applyOption(filterName, filterValue, optionStartedAt))) {
				continue;
			}

			// 3. Read the discount on the cards in the listing (up to the cards limit). No product page is opened.
			const productCount: number = await this.productsToRead(filterValue, "cards");
			let cardsRead: number = 0;
			for (let productIndex = 0; productIndex < productCount; productIndex++) {
				if (!(await this.productIsListed(productIndex))) {
					log.warn(`'${filterValue}': card ${productIndex + 1} is no longer on the listing; moving on`);
					break;
				}

				const card: DiscountCard | null = await this.readDiscountCard(productIndex, filterValue);
				if (card !== null) {
					cards.push(card);
					cardsRead++;
				}
			}

			// 4. Clear the option.
			await this.clearAppliedOption(filterName, filterValue);
			log.info(`'${filterValue}' finished in ${this.secondsSince(optionStartedAt)}s: ${cardsRead} of ${productCount} card(s) read`);
		}

		this.logFilterDone(filterName, `${cards.length} card(s) read`, flowStartedAt);
		return cards;
	}


	// ---- Helpers: small logging and timing utilities ----

	// Seconds since startedAt with one decimal, for the "took" part of the log lines.
	private secondsSince(startedAt: number): string {
		return ((Date.now() - startedAt) / 1000).toFixed(1);
	}

	// A short form of the listing tab's address plus its title, to say what the page looked like when something went wrong.
	private async where(): Promise<string> {
		return `url: ${this.genericUtility.shortUrl(this.page.url())}, title: '${await this.page.title().catch(() => "unknown")}'`;
	}

	// The closing banner of a filter: the totals, then the options that could not be applied (if any).
	private logFilterDone(filterName: string, totals: string, flowStartedAt: number): void {
		const notApplied: string = this.notAppliedOptions.length === 0 ? "none" : this.notAppliedOptions.join(" | ");
		log.section(`FILTER '${filterName}' DONE in ${this.secondsSince(flowStartedAt)}s: ${totals}; options not applied: ${notApplied}`);
	}


	// ---- Helpers: finding and applying a filter option ----

	// The name of the option at this position, read live, or null when the list is now shorter than the position.
	// Options are read one pass at a time because applying and clearing a filter re-renders the list.
	private async readOptionName(filterOptionsBy: Locator, filterName: string, position: number): Promise<string | null> {
		await this.genericUtility.clearBlockers();

		// The list re-renders after every apply and clear, so let it finish before deciding the position is gone.
		const liveCount: number = await this.genericUtility.waitForFilterOptions(filterOptionsBy, filterName);
		if (position >= liveCount) {
			log.warn(`Option ${position + 1} is beyond the live list (${liveCount} option(s) now); stopping the '${filterName}' filter early`);
			return null;
		}

		try {
			return (await filterOptionsBy.nth(position).innerText()).trim();
		} catch {
			// The list changed between the count and the read. End the loop instead of failing the whole test.
			log.warn(`Option ${position + 1} could not be read (the list changed); stopping the '${filterName}' filter early`);
			return null;
		}
	}

	// Clicks the option. Throws when the click fails.
	private async clickOption(filterName: string, filterValue: string): Promise<void> {
		await this.genericUtility.clearBlockers();
		await this.productPage.getFilterByTypeAndName(filterName, filterValue).click();
		await this.genericUtility.clearBlockers();
	}

	// Waits up to 10s for the option to show as selected. True when it does.
	private async optionShowsAsSelected(filterName: string, filterValue: string): Promise<boolean> {
		try {
			await this.productPage.getAppliedFilterByTypeAndName(filterName, filterValue).first().waitFor({ state: "visible", timeout: 10_000 });
			return true;
		} catch {
			return false;
		}
	}

	// Clicks the option and waits until it shows as selected. Returns false, and records the option in notAppliedOptions
	// with the reason, when it could not be applied. Any leftover of a failed attempt is cleared before returning.
	private async applyOption(filterName: string, filterValue: string, optionStartedAt: number): Promise<boolean> {

		// 1. Click. A timeout and a locator problem need different fixes, so the reason says which.
		try {
			await this.clickOption(filterName, filterValue);
		} catch (error) {
			const message: string = error instanceof Error ? error.message : String(error);
			const reason: string =
				error instanceof errors.TimeoutError ? "the option was not clickable within 15s"
				: message.includes("strict mode violation") ? "the option locator matches more than one element"
				: firstLine(error);
			console.warn(`[${this.testInfo.title}] Filter not applied for: ${filterValue} (option click) — ${reason}`);
			this.notAppliedOptions.push(`${filterValue} (option click: ${reason})`);
			log.error(`'${filterValue}' NOT applied after ${this.secondsSince(optionStartedAt)}s, the click failed: ${reason} (${await this.where()})`);
			// The click may have partly applied the option; clear it so the next one is not applied on top of it.
			await this.clearAppliedOption(filterName, filterValue);
			return false;
		}
		log.info(`'${filterValue}' clicked; waiting for it to show as selected`);

		// 2. The option showing as selected is the sign that the filter took effect.
		let selected: boolean = await this.optionShowsAsSelected(filterName, filterValue);

		if (!selected) {
			// Find out what the page looks like, because the causes need different handling.
			let stillBlocked: boolean = !(await this.genericUtility.clearBlockers());
			const clearShown: boolean = await this.productPage.clearButtonBy.first().isVisible();
			log.warn(`'${filterValue}' did not show as selected within 10s (blocked: ${stillBlocked}, Clear control showing: ${clearShown}, ${await this.where()})`);

			// 3. Not blocked and Clear is showing, yet the option is not marked: something is off.
			//    A reload keeps the applied filter (it is in the address), so reload once and look again.
			if (!stillBlocked && clearShown) {
				log.warn(`'${filterValue}': Clear is showing but the option is not marked; reloading the page once`);
				await this.page.reload();
				// The reload can land on a "Continue shopping" or 503 page too, so check again.
				stillBlocked = !(await this.genericUtility.clearBlockers());
				selected = await this.optionShowsAsSelected(filterName, filterValue);
				log.info(`'${filterValue}': ${selected ? "shows as selected after the reload" : "still does not show as selected after the reload"}`);
			}

			// 4. One more try, except on a blocked page where a click cannot work.
			//    Clear first: clicking an option that is already selected would switch it off.
			if (!selected && !stillBlocked) {
				log.warn(`'${filterValue}': trying once more, clearing first and then clicking again`);
				await this.clearAppliedOption(filterName, filterValue);
				try {
					await this.clickOption(filterName, filterValue);
					selected = await this.optionShowsAsSelected(filterName, filterValue);
				} catch (retryError) {
					log.warn(`'${filterValue}': the second click failed: ${firstLine(retryError)}`);
				}
				log.info(`'${filterValue}': ${selected ? "shows as selected after the second try" : "still does not show as selected after the second try"}`);
			}

			// 5. Give up, with a reason that says what was seen.
			if (!selected) {
				const reason: string = stillBlocked
					? "the option did not show as selected within 10s: Amazon is showing a 503 or 'Continue shopping' page"
					: clearShown
						? "the option did not show as selected within 10s, also not after a reload and a second try, although the Clear control was showing"
						: "the option did not show as selected within 10s: the click had no effect, also not on a second try (the Clear control was not showing)";
				console.warn(`[${this.testInfo.title}] Filter not applied for: ${filterValue} — ${reason}`);
				this.notAppliedOptions.push(`${filterValue} (${reason})`);
				log.error(`'${filterValue}' NOT applied after ${this.secondsSince(optionStartedAt)}s: ${reason} (${await this.where()})`);
				await this.clearAppliedOption(filterName, filterValue);
				return false;
			}
		}

		// The screenshot is only for the report, so a failure here does not make the option "not applied".
		try {
			await this.genericUtility.smoothScrollToElement(this.productPage.getAppliedFilterByTypeAndName(filterName, filterValue).first());
			await this.genericUtility.capture(this.testInfo);
		} catch (error) {
			log.warn(`'${filterValue}': applied, but the screenshot of it failed: ${firstLine(error)}`);
		}
		log.info(`'${filterValue}' APPLIED in ${this.secondsSince(optionStartedAt)}s: it shows as selected`);
		return true;
	}

	// Removes the applied option, if one is applied, so the next option starts from the full list.
	// "Applied" means the option shows as selected, or Amazon's Clear control is showing (a click that only partly worked).
	// If clearing does not work, the page is reset to the unfiltered listing, so the next option always starts clean.
	private async clearAppliedOption(filterName: string, filterValue: string): Promise<void> {
		// Let a page load that is still in flight finish, so the checks below see the page as it ends up.
		await this.page.waitForLoadState("domcontentloaded").catch(() => {});

		const selectedOption: Locator = this.productPage.getAppliedFilterByTypeAndName(filterName, filterValue).first();
		const clearControl: Locator = this.productPage.clearButtonBy.first();

		const optionSelected: boolean = await selectedOption.isVisible();
		let clearShown: boolean = await clearControl.isVisible();
		if (!optionSelected && !clearShown) {
			log.info(`'${filterValue}' is not applied; nothing to clear`);
			return;
		}

		// 1. The option is selected, so Amazon should be showing Clear too. Give it a moment before deciding it is missing.
		if (optionSelected && !clearShown) {
			clearShown = await clearControl.waitFor({ state: "visible", timeout: 5_000 }).then(() => true).catch(() => false);
		}

		// 2. Click Clear, then confirm the option is no longer selected.
		let cleared: boolean = false;
		if (clearShown) {
			try {
				await this.genericUtility.clearBlockers();
				await clearControl.click();
				await this.genericUtility.clearBlockers();
				await selectedOption.waitFor({ state: "hidden", timeout: 10_000 });
				cleared = true;
			} catch {
				cleared = false;
			}
		}

		if (cleared) {
			log.info(`'${filterValue}' cleared; it no longer shows as selected`);
			return;
		}

		// 3. Anything else: reset the page, so the next option does not get added on top of this one.
		log.warn(`'${filterValue}': could not clear it (selected: ${optionSelected}, Clear showing: ${clearShown}); going back to the unfiltered listing instead`);
		await this.goBackToUnfilteredListing();
	}

	// Resets the page to the unfiltered listing (listingUrl), so the next option starts clean.
	private async goBackToUnfilteredListing(): Promise<void> {
		await this.page.goto(this.listingUrl);
		await this.genericUtility.clearBlockers();
		log.info(`Back on the unfiltered listing (${this.genericUtility.shortUrl(this.page.url())})`);
	}


	// ---- Helpers: the products listed under an applied option ----

	// The results refresh gradually after an option is applied. Waits (at most 10s) until the number of product titles is
	// the same twice, 0.5s apart, and returns it. Returns the last count seen (0 when none showed). Never throws.
	private async waitForProductsToSettle(filterValue: string): Promise<number> {
		const deadline: number = Date.now() + 10_000;
		let lastCount: number = -1;
		while (Date.now() < deadline) {
			const count: number = await this.productPage.productNameListingPageBy.count();
			if (count > 0 && count === lastCount) {
				return count;
			}
			lastCount = count;
			await this.page.waitForTimeout(500);
		}
		log.warn(`'${filterValue}': ${lastCount > 0 ? `the number of products was still changing after 10s (last count ${lastCount})` : "no product title appeared within 10s"}`);
		return Math.max(lastCount, 0);
	}

	// How many of the listed products to read for the applied option. RunConfig sets the limit. Products open a page each,
	// so they have a small limit; cards are read in the listing and have their own, higher limit.
	private async productsToRead(filterValue: string, kind: "products" | "cards" = "products"): Promise<number> {
		const listed: number = await this.waitForProductsToSettle(filterValue);
		const toRead: number = kind === "cards" ? RunConfig.discountCardLimit(listed) : RunConfig.productLimit(listed);
		log.info(`'${filterValue}': ${listed} product(s) listed, reading ${toRead} ${kind === "cards" ? "card(s) (no page is opened)" : "product page(s)"}`);
		if (listed === 0) {
			log.warn(`'${filterValue}': the listing is empty after applying the option, so nothing to read (${await this.where()})`);
		}
		return toRead;
	}

	// True when the product at this position is still on the listing. Waits briefly for it first, because after a
	// recovery (goBack) the list can still be re-rendering.
	private async productIsListed(productIndex: number): Promise<boolean> {
		await this.productPage.productNameListingPageBy.nth(productIndex).waitFor({ state: "visible", timeout: 10_000 }).catch(() => {});
		return productIndex < (await this.productPage.productNameListingPageBy.count());
	}

	// Reads one product's card in the listing: its title and the discount printed on it, for example "(44% off)" -> 44.
	// Returns null, with a warning, when the card cannot be read.
	private async readDiscountCard(productIndex: number, filterValue: string): Promise<DiscountCard | null> {
		const title: Locator = this.productPage.getProductByIndex(productIndex);
		try {
			// The title and the card text are read in one browser call, so both come from the same moment and the same
			// product. The card is the closest result container around the title. A short timeout: the title is already there.
			const read = await title.evaluate(
				(titleElement) => ({
					title: (titleElement as HTMLElement).innerText,
					card: (titleElement.closest("div[data-component-type='s-search-result']") as HTMLElement | null)?.innerText ?? null,
				}),
				undefined,
				{ timeout: 5_000 },
			);
			if (read.card === null) {
				log.warn(`'${filterValue}' card ${productIndex + 1}: no result card around the title '${read.title.trim().slice(0, 60)}', so it is skipped`);
				return null;
			}
			const titleText: string = read.title.trim();
			const cardText: string = read.card.replace(/\s+/g, " ");

			// The discount is printed as "(44% off)". A card can also carry other "% off" text (bank offers, coupons), so
			// look for the printed discount first. Without it, a single "% off" text is still safe to use.
			const printedDiscount = cardText.match(/\((\d+)% off\)/);
			const mentions: string[] = cardText.match(/\d+% off/g) ?? [];
			let discount: number | null = null;
			let source: string = "no discount shown";
			if (printedDiscount) {
				discount = Number(printedDiscount[1]);
				source = `printed as "${printedDiscount[0]}"`;
			} else if (mentions.length === 1) {
				discount = Number(mentions[0].replace(/\D.*$/, ""));
				source = `the only "% off" text on the card, "${mentions[0]}"`;
			}
			if (mentions.length > 1) {
				log.warn(`'${filterValue}' card ${productIndex + 1}: ${mentions.length} "% off" texts on the card (${mentions.join(", ")}); ${printedDiscount ? "used the printed discount" : "none is the printed discount, so no discount was taken"}`);
			}

			log.info(`'${filterValue}' card ${productIndex + 1}: ${discount === null ? "no discount shown" : discount + "% off (" + source + ")"}, title '${titleText.slice(0, 60)}'`);
			return { filter: filterValue, title: titleText, discount, cardText };
		} catch (error) {
			log.warn(`'${filterValue}' card ${productIndex + 1}: could not be read: ${firstLine(error)}`);
			return null;
		}
	}


	// ---- Helpers: reading one product (open its page in a new tab, read the details, close the tab) ----

	// Opens the product in a new tab and reads its details. Always returns a map with the same keys: a product that
	// could not be opened or loaded keeps empty values and loaded = false. The tab is always closed.
	private async readProductPage(productIndex: number, filterValue: string): Promise<ProductResult> {
		const label: string = `'${filterValue}' product ${productIndex + 1}`;

		const productResult: ProductResult = new Map<string, ProductValue>([
			["filter", filterValue],
			["title", null],
			["keyFeatures", null],
			["about", null],
			["techDetails", null],
			["loaded", false],
		]);

		const productTab: Page | undefined = await this.openProductTab(productIndex, filterValue);
		if (!productTab) {
			log.warn(`${label}: no product tab opened, so its details are skipped`);
			return productResult;
		}

		try {
			// Locators belong to the page they were created for, so the product tab needs its own page objects.
			const detailPage = new ProductListingPage(productTab);
			const detailUtility = new GenericUtility(productTab, this.testInfo);

			if (await this.waitForProductPageToLoad(productTab, detailPage, detailUtility, label, filterValue, productIndex)) {
				productResult.set("loaded", true);
				await this.readProductDetails(productTab, detailPage, detailUtility, productResult, label, filterValue, productIndex);
			}
		} finally {
			// Whatever happened above, close the product tab, so the listing tab is the only one left for the next product.
			await productTab.close().catch(() => {});
			log.info(`${label}: product tab closed`);
		}

		log.info(`${label}: ${productResult.get("loaded") ? "READ" : "NOT read"}, text found for: ${this.fieldsRead(productResult)}`);
		return productResult;
	}

	// Which of the four text fields of a product result have text.
	private fieldsRead(productResult: ProductResult): string {
		const found: string[] = ["title", "keyFeatures", "about", "techDetails"].filter((key) => productResult.get(key) !== null);
		return found.join(", ") || "nothing";
	}

	// Clicks the product to open it in a new tab. Two attempts, each waiting only 5s for the tab. A failed click (for
	// example one covered by an overlay) gets one more try. Returns undefined when no tab could be opened.
	private async openProductTab(productIndex: number, filterValue: string): Promise<Page | undefined> {
		const label: string = `'${filterValue}' product ${productIndex + 1}`;

		for (let attempt = 1; attempt <= 2; attempt++) {
			try {
				await this.genericUtility.clearBlockers();
				const productElement: Locator = this.productPage.getProductByIndex(productIndex);
				await this.genericUtility.smoothScrollToElement(productElement);

				log.info(`${label}: opening it in a new tab (attempt ${attempt} of 2)`);
				const productTab: Page = await this.genericUtility.openAndGetNewTab(() => productElement.click({ timeout: 5_000 }), 5_000);
				log.info(`${label}: product tab opened`);
				return productTab;
			} catch (error) {
				console.warn(`[${this.testInfo.title}] Failed to open product index ${productIndex} for filter value -> ${filterValue} (attempt ${attempt} of 2) — ${error}`);
				log.warn(`${label}: attempt ${attempt} of 2 could not scroll to the product or click it open (a tab should open within 5s): ${firstLine(error)}`);

				// A click that opened no tab may have turned the listing tab itself into the product page.
				// Put it back, otherwise the next product would be read from the wrong page. A retry would not help.
				if (await this.listingTabMovedToProductPage()) {
					await this.goBackToListing(label);
					return undefined;
				}
			}
		}
		return undefined;
	}

	// True when the listing tab itself has turned into a product page (a click navigated it instead of opening a new tab).
	// Decided from the page content, not the address: a product page has a product title, the listing does not.
	private async listingTabMovedToProductPage(): Promise<boolean> {
		await this.page.waitForLoadState("domcontentloaded").catch(() => {});
		return (await this.productPage.productNameIndividualPage.count()) > 0;
	}

	// Goes back from a product page that opened in the listing tab, and waits for the listing to show again.
	private async goBackToListing(label: string): Promise<void> {
		log.warn(`${label}: the listing tab itself moved to ${this.genericUtility.shortUrl(this.page.url())}; going back to the listing`);
		try {
			await this.page.goBack();
			await this.genericUtility.clearBlockers();
			await this.productPage.productNameListingPageBy.first().waitFor({ state: "visible", timeout: 10_000 });
			log.info(`${label}: back on the listing`);
		} catch (error) {
			log.error(`${label}: could not get back to the listing, so the next products may be read from the wrong page: ${firstLine(error)}`);
		}
	}

	// Waits up to 10s for the product page to show. It counts as loaded when the title, the key features or the technical
	// details show, whichever comes first. Returns false, with the tab's address and title and a screenshot, when it does not.
	private async waitForProductPageToLoad(
		productTab: Page,
		detailPage: ProductListingPage,
		detailUtility: GenericUtility,
		label: string,
		filterValue: string,
		productIndex: number,
	): Promise<boolean> {
		// The tab can also open on the "Continue shopping" page, so handle it before reading the product.
		await productTab.waitForLoadState("domcontentloaded").catch(() => {});
		await detailUtility.clearBlockers();

		try {
			const loadedSign: Locator = detailPage.productNameIndividualPage
				.or(detailPage.technicalDetailsBlockIndividualPage)
				.or(detailPage.productKeyFeatureBlock)
				.first();
			await loadedSign.waitFor({ state: "visible", timeout: 10_000 });
			log.info(`${label}: product page loaded (${this.genericUtility.shortUrl(productTab.url())})`);
			return true;
		} catch {
			const tabTitle: string = await productTab.title().catch(() => "unknown");
			console.warn(`[${this.testInfo.title}] Product detail page did not load for index ${productIndex} filter '${filterValue}' (tab url: ${productTab.url()}, title: '${tabTitle}'); skipping detail scrape`);
			log.warn(`${label}: the product page did not load within 10s, so its details are skipped (tab url: ${this.genericUtility.shortUrl(productTab.url())}, title: '${tabTitle}')`);
			await detailUtility.capture(this.testInfo, "detail-page-not-loaded", filterValue, String(productIndex));
			return false;
		}
	}

	// A product page loads its sections gradually, and not every product has every section. Looks once a second, for at
	// most 10s, for the four sections we read (title, key features, about, technical details), scrolling down one screen
	// each time so the lazy ones load. Stops early when all four are there; otherwise returns after 10s and the caller
	// reads whatever is on the page. A table section counts as present once it has at least one row.
	private async waitForProductSections(productTab: Page, detailPage: ProductListingPage, label: string): Promise<void> {
		const sections: Record<string, Locator> = {
			title: detailPage.productNameIndividualPage,
			keyFeatures: detailPage.productKeyFeatureBlock.locator("tr"),
			about: detailPage.aboutThisItemBulletPoint,
			techDetails: detailPage.technicalDetailsBlockIndividualPage.locator("tr"),
		};
		const sectionNames: string[] = Object.keys(sections);

		const startedAt: number = Date.now();
		let present: string[] = [];
		while (true) {
			present = [];
			for (const name of sectionNames) {
				if ((await sections[name].count()) > 0) {
					present.push(name);
				}
			}
			if (present.length === sectionNames.length || Date.now() - startedAt >= 10_000) {
				break;
			}
			await productTab.evaluate(() => window.scrollBy(0, window.innerHeight)).catch(() => {});
			await productTab.waitForTimeout(1000);
		}

		const missing: string[] = sectionNames.filter((name) => !present.includes(name));
		if (missing.length === 0) {
			log.info(`${label}: all ${present.length} sections found after ${this.secondsSince(startedAt)}s`);
		} else {
			log.warn(`${label}: after ${this.secondsSince(startedAt)}s found ${present.join(", ") || "none"}; not on this page: ${missing.join(", ")}`);
		}
	}

	// Reads the four text fields of the product page and stores each in productResult as soon as it is read, so a
	// failure part-way keeps what was already read. Never throws: a failure is logged with the step it happened in.
	private async readProductDetails(
		productTab: Page,
		detailPage: ProductListingPage,
		detailUtility: GenericUtility,
		productResult: ProductResult,
		label: string,
		filterValue: string,
		productIndex: number,
	): Promise<void> {
		// The step that is running, so a failure can say where it happened.
		let step: string = "waiting for the sections";
		try {
			await this.waitForProductSections(productTab, detailPage, label);

			step = "reading the title";
			const title: string = await detailUtility.readText(detailPage.productNameIndividualPage.first());
			this.genericUtility.addFieldIfPresent("title", title, filterValue, productIndex, productResult);

			step = "reading the key features";
			const keyFeatures: string = await detailUtility.readRows(detailPage.productKeyFeatureBlock);
			this.genericUtility.addFieldIfPresent("keyFeatures", keyFeatures, filterValue, productIndex, productResult);

			step = "reading the about this item bullets";
			const about: string = await detailUtility.readText(detailPage.aboutThisItemBulletPoint);
			this.genericUtility.addFieldIfPresent("about", about, filterValue, productIndex, productResult);

			step = "reading the technical details";
			const techDetails: string = await detailUtility.readRows(detailPage.technicalDetailsBlockIndividualPage);
			this.genericUtility.addFieldIfPresent("techDetails", techDetails, filterValue, productIndex, productResult);

			log.info(`${label}: text read (characters: title ${title.length}, key features ${keyFeatures.length}, about ${about.length}, tech details ${techDetails.length})`);
			if (techDetails.length === 0) {
				log.warn(`${label}: the technical details table was empty, so a spec filter can find nothing to compare`);
			}
		} catch (error) {
			const reason: string = firstLine(error);
			const tabClosed: boolean = productTab.isClosed();

			// Name the cause, because a closed tab, a page that moved on and a slow read need different fixes.
			const cause: string =
				tabClosed ? "the product tab was closed"
				: error instanceof errors.TimeoutError ? `a read timed out (${reason})`
				: /context was destroyed|navigat/i.test(reason) ? "the page navigated while it was being read, for example a redirect or a blocker page"
				: reason;

			const tabUrl: string = tabClosed ? "tab closed" : this.genericUtility.shortUrl(productTab.url());
			const tabTitle: string = tabClosed ? "unknown" : await productTab.title().catch(() => "unknown");

			console.warn(`[${this.testInfo.title}] Something went wrong while extracting the details — ${error}`);
			log.error(`${label}: reading the product page failed while ${step}: ${cause}. Already read: ${this.fieldsRead(productResult)} (tab url: ${tabUrl}, title: '${tabTitle}')`);
			if (!tabClosed) {
				await detailUtility.capture(this.testInfo, "product-read-failed", filterValue, String(productIndex)).catch(() => {});
			}
		}
	}
}

export default SharedFilterFlows;
