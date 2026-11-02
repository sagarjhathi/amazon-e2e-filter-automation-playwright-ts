import { Locator, Page, TestInfo } from "@playwright/test";
import AmazonLandingPage from "../pages/AmazonLandingPage";
import ProductListingPage, { Card } from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import RunConfig from "../utils/RunConfig";
import Logger from "../utils/Logger";

const log = Logger.for("CardFilterFlows");

// The cards read under one applied option.
type OptionCards = { option: string; cards: Card[] };

// The cards read under one applied price range, with what the page showed for it. min and max are in rupees, null when the range is open ("Up to", "Over").
export type PriceRangeCards = { option: string; min: number | null; max: number | null; urlRange: string; sliderMin: string; sliderMax: string; cards: Card[] };

// Like BrandFilterFlows, but it reads the product cards on the listing page instead of only the titles.
// For each option of one filter: apply it, wait for its cards, read them, clear it. Nothing is compared here:
// the test compares each option's cards with the option.
//
// Things the flow handles because Amazon does them:
//  - the options list is collapsed behind "See more", and collapses again after every Clear,
//  - the options list changes after every apply and clear, so each option is read live at its position,
//  - the product list lags behind the selected option, so the cards themselves are watched,
//  - names with quotes, or cut with "...", are never put into a selector.
class CardFilterFlows {

	private page: Page;
	private testInfo: TestInfo;
	private landingPage: AmazonLandingPage;
	private productPage: ProductListingPage;
	private genericUtility: GenericUtility;

	// Options that could not be applied; the test reports them.
	notAppliedOptions: string[] = [];

	// The listing before any option is applied. Going back here resets the page when Clear cannot be clicked.
	private listingUrl: string = "";

	constructor(page: Page, testInfo: TestInfo) {
		this.page = page;
		this.testInfo = testInfo;
		this.landingPage = new AmazonLandingPage(page);
		this.productPage = new ProductListingPage(page);
		this.genericUtility = new GenericUtility(page, testInfo);
	}


	// ---- Opening the results ----

	// The landing page, then the search: the same steps as the other tests.
	async openSearchResults(searchTerm: string): Promise<void> {
		await this.landingPage.openingLandingPage();
		await this.genericUtility.clearBlockers();
		await this.landingPage.givingInputWithinSearchBar(searchTerm);
		await this.landingPage.clickingOnSubmitSearchButton();
		await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), `searching for '${searchTerm}'`);
	}


	// ---- Flow 1: apply each option of a filter and read the cards ----

	// filterName is the heading in the left navigation, for example "Brands". Returns the cards read under each option.
	// Optional: onlyOptions limits it to the options with these names.
	async applyFilterAndReadCards(filterOptionsBy: Locator, filterName: string, settings: { onlyOptions?: string[] } = {}): Promise<OptionCards[]> {
		this.listingUrl = this.page.url();

		// 1. The options. Expand the list first, so the options behind "See more" are counted too.
		if ((await this.genericUtility.waitForFilterOptions(filterOptionsBy, filterName)) === 0) {
			log.warn(`0 '${filterName}' options found after waiting; nothing to read (url: ${this.genericUtility.shortUrl(this.page.url())})`);
			return [];
		}
		await this.expandOptionList(filterOptionsBy, filterName);
		const optionCount: number = RunConfig.filterOptionLimit(await filterOptionsBy.count());
		log.section(`FILTER '${filterName}': checking up to ${optionCount} option(s)`);

		await this.waitForCardsOfOption(""); // with nothing to differ from, this waits for the first list to stop changing
		const unfilteredCards: string = await this.productsOnScreen(); // the products shown before any option is applied
		const results: OptionCards[] = [];
		const done: Set<string> = new Set();

		for (let position = 0; position < optionCount; position++) {

			// 2. The option at this position, read live. A "See more / See less" link is not an option; an option seen before is not repeated.
			const option: string = await this.readOptionName(filterOptionsBy, position);
			if (option === "" || /^see (more|less)/i.test(option) || done.has(option)) {
				log.info(`Position ${position + 1}: '${option}' is not a new option; moving on`);
				continue;
			}
			const wanted: string[] = settings.onlyOptions ?? [];
			if (wanted.length > 0 && !wanted.some((name) => name.toLowerCase() === option.toLowerCase())) {
				continue;
			}
			done.add(option);
			log.section(`OPTION '${option}' (position ${position + 1} of ${optionCount})`);

			// 3. Apply it, and see that the page shows it as selected.
			if (!(await this.applyOption(filterOptionsBy, filterName, position, option))) {
				await this.clearOption(filterName, option, unfilteredCards);
				continue;
			}

			// 4. Wait for the cards of this option, then read them.
			if (await this.waitForCardsOfOption(unfilteredCards)) {
				const cards: Card[] = await this.productPage.readCards();
				log.info(`'${option}': ${cards.length} card(s) read`);
				results.push({ option, cards });
			} else {
				const reason = "the cards on screen did not change from the unfiltered ones within 20s";
				this.genericUtility.markRetryableFailure(`'${option}': ${reason}`);
				this.notAppliedOptions.push(`${option} (${reason})`);
				log.error(`'${option}': ${reason}, so they are not read`);
			}

			// 5. Clear the option, so the next one starts from the unfiltered list.
			await this.clearOption(filterName, option, unfilteredCards);
		}

		// An option asked for by name that was never in the list is reported, not left out quietly.
		for (const name of settings.onlyOptions ?? []) {
			if (![...done].some((seen) => seen.toLowerCase() === name.toLowerCase())) {
				this.notAppliedOptions.push(`${name} (not found in the list)`);
				log.error(`'${name}' was not found among the '${filterName}' options`);
			}
		}

		log.section(`FILTER '${filterName}' DONE: ${results.length} option(s) read, not applied: ${this.notAppliedOptions.join("; ") || "none"}`);
		return results;
	}


	// ---- Flow 2: apply each price range and read the cards ----

	// Price is not a group of options: Amazon offers ranges that change with the search ("₹20,000 - ₹25,000"), and shows the chosen
	// range in the URL (p_36:min-max, in paise) and on two sliders. Each range is read live, applied, and its cards read together
	// with the URL and the sliders. The listing is then reloaded, which is how a range is cleared.
	async applyPriceRangesAndReadCards(): Promise<PriceRangeCards[]> {
		this.listingUrl = this.page.url();
		const presets: Locator = this.productPage.pricePresetLinksBy;

		if ((await this.genericUtility.waitForFilterOptions(presets, "Price")) === 0) {
			log.warn(`No price ranges found after waiting; nothing to read (url: ${this.genericUtility.shortUrl(this.page.url())})`);
			return [];
		}
		const rangeCount: number = RunConfig.filterOptionLimit(await presets.count());
		log.section(`FILTER 'Price': checking up to ${rangeCount} range(s)`);

		await this.waitForCardsOfOption("");
		const unfilteredCards: string = await this.productsOnScreen();
		const results: PriceRangeCards[] = [];

		for (let position = 0; position < rangeCount; position++) {

			// 1. The range at this position: its name, and its limits from the link (p_36:200000-2000000, either side can be empty).
			const option: string = await this.readOptionName(presets, position);
			const href: string = (await presets.nth(position).getAttribute("href").catch(() => null)) ?? "";
			const limits = decodeURIComponent(href).match(/p_36:(\d*)-(\d*)/);
			if (option === "" || !limits) {
				log.info(`Position ${position + 1}: '${option}' is not a price range; moving on`);
				continue;
			}
			const [, minPaise, maxPaise] = limits;
			log.section(`PRICE RANGE '${option}' (position ${position + 1} of ${rangeCount})`);

			// 2. Apply it: the URL must show the range and the cards must change.
			let problem: string = "";
			try {
				await this.genericUtility.clearBlockers();
				await presets.nth(position).click();
			} catch (error) {
				problem = `the click failed: ${error instanceof Error ? error.message.split("\n")[0] : error}`;
			}
			await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), `applying the price range '${option}'`);

			if (problem === "" && !(await this.waitUntil(async () => decodeURIComponent(this.page.url()).includes(`p_36:${minPaise}-${maxPaise}`), 10_000))) {
				problem = "the URL did not show the range within 10s";
			}
			if (problem === "" && !(await this.waitForCardsOfOption(unfilteredCards))) {
				problem = "the cards on screen did not change from the unfiltered ones within 20s";
			}
			if (problem !== "") {
				this.genericUtility.markRetryableFailure(`Price range '${option}' was not applied: ${problem}`);
				this.notAppliedOptions.push(`${option} (${problem})`);
				log.error(`'${option}' was not applied: ${problem}`);
				await this.backToListing(unfilteredCards);
				continue;
			}

			// 3. Read what the page shows for the range, and the cards.
			const result: PriceRangeCards = {
				option,
				min: minPaise === "" ? null : Number(minPaise) / 100,
				max: maxPaise === "" ? null : Number(maxPaise) / 100,
				urlRange: decodeURIComponent(this.page.url()).match(/p_36:([\d-]*)/)?.[1] ?? "",
				sliderMin: (await this.productPage.priceMinSliderButton.first().getAttribute("aria-valuetext", { timeout: 3_000 }).catch(() => "")) ?? "",
				sliderMax: (await this.productPage.priceMaxSliderButton.first().getAttribute("aria-valuetext", { timeout: 3_000 }).catch(() => "")) ?? "",
				cards: await this.productPage.readCards(),
			};
			log.info(`'${option}': ${result.cards.length} card(s) read, sliders '${result.sliderMin}' to '${result.sliderMax}'`);
			results.push(result);

			// 4. Back to the unfiltered listing for the next range.
			await this.backToListing(unfilteredCards);
		}

		log.section(`FILTER 'Price' DONE: ${results.length} range(s) read, not applied: ${this.notAppliedOptions.join("; ") || "none"}`);
		return results;
	}

	// Reloads the unfiltered listing and waits for its cards to come back.
	private async backToListing(unfilteredCards: string): Promise<void> {
		await this.page.goto(this.listingUrl, { waitUntil: "domcontentloaded" });
		await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), "going back to the listing");
		await this.waitUntil(async () => (await this.productsOnScreen()) === unfilteredCards, 20_000);
	}


	// ---- Steps: the options list ----

	// Clicks "See more" under the filter when the list is collapsed, and waits (up to 5s) for more options to show.
	private async expandOptionList(filterOptionsBy: Locator, filterName: string): Promise<void> {
		const seeMore: Locator = this.productPage.getSeeMoreButtonByHeading(filterName);
		if (!(await seeMore.first().isVisible())) {
			return;
		}
		const before: number = await filterOptionsBy.count();
		try {
			await this.genericUtility.smoothScrollToElement(seeMore.first());
			await seeMore.first().click();
			await this.waitUntil(async () => (await filterOptionsBy.count()) > before, 5_000);
			log.info(`'${filterName}': expanded the list (${before} to ${await filterOptionsBy.count()} option(s))`);
		} catch (error) {
			log.warn(`'${filterName}': could not expand the list: ${error instanceof Error ? error.message.split("\n")[0] : error}`);
		}
	}

	// The name of the option at this position, on one line. "" when there is none (the list is shorter now).
	private async readOptionName(filterOptionsBy: Locator, position: number): Promise<string> {
		try {
			return (await filterOptionsBy.nth(position).innerText({ timeout: 5_000 })).replace(/\s+/g, " ").trim();
		} catch {
			return "";
		}
	}

	// True when something is applied under the filter: its group shows a "Clear" link. Every option starts from a cleared
	// filter, so this means the option just clicked. It does not depend on the option's name, bold text or label.
	private async filterIsApplied(filterName: string): Promise<boolean> {
		return this.productPage.getClearLinkByHeading(filterName).first().isVisible();
	}


	// ---- Steps: apply and clear ----

	// Clicks the option at this position and waits (10s) until it shows as selected. False, with the option recorded, when it does not.
	private async applyOption(filterOptionsBy: Locator, filterName: string, position: number, option: string): Promise<boolean> {
		let problem: string = "";

		// 1. The list collapses after every Clear, so an option that is not showing needs "See more" first. Then click it.
		try {
			await this.genericUtility.clearBlockers();
			if (!(await filterOptionsBy.nth(position).isVisible())) {
				await this.expandOptionList(filterOptionsBy, filterName);
			}
			await filterOptionsBy.nth(position).click();
		} catch (error) {
			problem = `the click failed: ${error instanceof Error ? error.message.split("\n")[0] : error}`;
		}

		// 2. A blocked page skips the test. This is outside the try blocks, which would swallow the skip.
		await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), `applying '${option}'`);

		// 3. The option must show as selected.
		if (problem === "" && !(await this.waitUntil(() => this.filterIsApplied(filterName), 10_000))) {
			problem = "the option did not show as selected within 10s";
		}

		if (problem !== "") {
			this.genericUtility.markRetryableFailure(`Filter option '${option}' was not applied: ${problem}`);
			this.notAppliedOptions.push(`${option} (${problem})`);
			log.error(`'${option}' was not applied: ${problem} (url: ${this.genericUtility.shortUrl(this.page.url())})`);
			return false;
		}

		// The screenshot is only for the report, so a failure here does not make the option "not applied".
		try {
			await this.genericUtility.capture(this.testInfo);
		} catch (error) {
			log.warn(`'${option}': applied, but the screenshot of it failed: ${error instanceof Error ? error.message.split("\n")[0] : error}`);
		}
		log.info(`'${option}' applied: it shows as selected`);
		return true;
	}

	// Clicks Clear when something is applied, then waits for the option to go and the unfiltered cards to come back.
	// If that does not work, the page goes back to the unfiltered listing, so the next option starts clean.
	private async clearOption(filterName: string, option: string, unfilteredCards: string): Promise<void> {
		try {
			if (await this.filterIsApplied(filterName)) {
				await this.genericUtility.clearBlockers();
				await this.productPage.getClearLinkByHeading(filterName).first().click();
			}
			if (!(await this.waitUntil(async () => !(await this.filterIsApplied(filterName)), 10_000))) {
				throw new Error("the filter still shows as applied");
			}
			if (!(await this.waitUntil(async () => (await this.productsOnScreen()) === unfilteredCards, 20_000))) {
				throw new Error("the unfiltered cards did not come back");
			}
			log.info(`'${option}' cleared`);
		} catch (error) {
			log.warn(`'${option}': could not clear it (${error instanceof Error ? error.message.split("\n")[0] : error}); going back to the unfiltered listing`);
			await this.page.goto(this.listingUrl, { waitUntil: "domcontentloaded" });
			await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), `going back to the listing after '${option}'`);
		}
	}


	// ---- Steps: waiting for the cards ----

	// Waits (up to 20s) until the cards on screen are not the unfiltered ones and are the same on two reads, 1s apart.
	private async waitForCardsOfOption(unfilteredCards: string): Promise<boolean> {
		let before: string = "";
		return this.waitUntil(async () => {
			const now: string = await this.productsOnScreen();
			const settled: boolean = now !== unfilteredCards && now === before;
			before = now;
			return settled;
		}, 20_000, 1_000);
	}

	// The titles of the cards on screen as one text, order left out. A different set of products gives a different text.
	private async productsOnScreen(): Promise<string> {
		return (await this.productPage.listOrganicCardTitlesBy.allInnerTexts()).sort().join("|");
	}

	// Repeats the check until it is true or the time is up. True when it came true; never throws.
	private async waitUntil(check: () => Promise<boolean>, timeoutMs: number, everyMs: number = 500): Promise<boolean> {
		const deadline: number = Date.now() + timeoutMs;
		while (Date.now() < deadline) {
			if (await check().catch(() => false)) {
				return true;
			}
			await this.page.waitForTimeout(everyMs);
		}
		return false;
	}
}

export default CardFilterFlows;
