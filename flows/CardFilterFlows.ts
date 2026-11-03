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
// expectedUrlRange is the range of the link that was clicked, in paise as the URL has it ("2600000-3600000", "-200000" for "Up to"); urlRange is what the URL shows.
export type PriceRangeCards = { option: string; expectedUrlRange: string; min: number | null; max: number | null; urlRange: string; sliderMin: string; sliderMax: string; cards: Card[] };

// Like BrandFilterFlows, but it reads the product cards on the listing page instead of only the titles.
// For each option of one filter: apply it, read the cards, clear it. Nothing is compared here:
// the test compares each option's cards with the option.
//
// An option is applied when the filter's group shows its "Clear" link, and cleared when that link is gone.
// The cards themselves are not compared with anything.
//
// Things the flow handles because Amazon does them:
//  - the options list is collapsed behind "See more", and collapses again after every Clear,
//  - the options list changes after every apply and clear, so the names are read once and each option is found by its name,
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
		log.section(`SEARCH '${searchTerm}'`);
		log.info("Opening the landing page");
		await this.landingPage.openingLandingPage();
		await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), "opening the landing page");
		log.info(`Searching for '${searchTerm}'`);
		await this.landingPage.givingInputWithinSearchBar(searchTerm);
		await this.landingPage.clickingOnSubmitSearchButton();
		await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), `searching for '${searchTerm}'`);
		log.info(`The results are open (${this.genericUtility.shortUrl(this.page.url())})`);
	}


	// ---- Flow 1: apply each option of a filter and read the cards ----

	// filterName is the heading in the left navigation, for example "Brands". Returns the cards read under each option.
	// Optional: onlyOptions limits it to the options with these names.
	async applyFilterAndReadCards(filterOptionsBy: Locator, filterName: string, settings: { onlyOptions?: string[] } = {}): Promise<OptionCards[]> {
		this.listingUrl = this.page.url();

		// 1. The names of the options, read once from the expanded list. From here on an option is found by its name, not its position.
		if ((await this.genericUtility.waitForFilterOptions(filterOptionsBy, filterName)) === 0) {
			log.warn(`0 '${filterName}' options found after waiting; nothing to read (url: ${this.genericUtility.shortUrl(this.page.url())})`);
			return [];
		}
		await this.expandOptionList(filterOptionsBy, filterName);
		const listed: string[] = await this.readOptionNames(filterOptionsBy);
		log.info(`'${filterName}' options on the page: [${listed.join(" | ")}]`);

		const wanted: string[] = settings.onlyOptions ?? [];
		const chosen: string[] = wanted.length === 0 ? listed : listed.filter((name) => wanted.some((want) => want.toLowerCase() === name.toLowerCase()));
		const options: string[] = chosen.slice(0, RunConfig.filterOptionLimit(chosen.length));
		log.section(`FILTER '${filterName}': checking ${options.length} of ${listed.length} option(s)${wanted.length > 0 ? `, only [${wanted.join(" | ")}] was asked for` : ""}`);

		const results: OptionCards[] = [];

		for (let index = 0; index < options.length; index++) {
			const option: string = options[index];
			log.section(`OPTION '${option}' (${index + 1} of ${options.length})`);

			// 2. Apply it, and see that the page shows it as selected. If it did not, reload the listing, so the next option starts clean.
			if (!(await this.applyOption(filterOptionsBy, filterName, option))) {
				await this.reloadListing(`applying '${option}' failed`);
				continue;
			}

			// 3. Read the cards, once they have stopped changing.
			await this.waitForCardsToSettle();
			const cards: Card[] = await this.productPage.readCards();
			log.info(`'${option}': read ${this.cardSummary(cards)}`);
			results.push({ option, cards });

			// 4. Clear the option, so the next one starts from the unfiltered list.
			await this.clearOption(this.productPage.getClearLinkByHeading(filterName), option);
		}

		// An option asked for by name that was never in the list is reported, not left out quietly.
		for (const name of wanted) {
			if (!listed.some((seen) => seen.toLowerCase() === name.toLowerCase())) {
				this.notAppliedOptions.push(`${name} (not found in the list)`);
				log.error(`'${name}' was not found among the '${filterName}' options`);
			}
		}

		log.section(`FILTER '${filterName}' DONE: ${results.length} option(s) read, not applied: ${this.notAppliedOptions.join("; ") || "none"}`);
		return results;
	}


	// ---- Flow 2: apply each price range and read the cards ----

	// Price is not a group of options: Amazon offers ranges that change with the search and with every page load ("₹20,000 - ₹25,000"),
	// and shows the chosen range in the URL (p_36:min-max, in paise) and on two sliders. Each range is read live, applied, and its
	// cards read together with the URL and the sliders. The page's own "Clear" link in the price section clears it.
	async applyPriceRangesAndReadCards(): Promise<PriceRangeCards[]> {
		this.listingUrl = this.page.url();
		const presets: Locator = this.productPage.pricePresetLinksBy;

		if ((await this.genericUtility.waitForFilterOptions(presets, "Price")) === 0) {
			log.warn(`No price ranges found after waiting; nothing to read (url: ${this.genericUtility.shortUrl(this.page.url())})`);
			return [];
		}

		const rangeCount: number = RunConfig.filterOptionLimit(await presets.count());
		log.section(`FILTER 'Price': checking up to ${rangeCount} range(s)`);

		const results: PriceRangeCards[] = [];
		for (let position = 0; position < rangeCount; position++) {

			// 1. The range at this position, read live: its name, and its limits from the link (p_36:200000-2000000, either side can be empty).
			// The ranges are worked out by Amazon for each page load ("₹350 - ₹600" at one load, "₹350 - ₹700" at the next), so a range
			// read earlier may not be in the list any more. They are found by position, and each is checked against its own link.
			const option: string = await this.readOptionName(presets, position);
			const href: string = (await presets.nth(position).getAttribute("href").catch(() => null)) ?? "";
			const limits = decodeURIComponent(href).match(/p_36:(\d*)-(\d*)/);
			if (option === "" || !limits) {
				log.info(`Position ${position + 1}: '${option}' is not a price range; moving on`);
				continue;
			}
			const [, minPaise, maxPaise] = limits;
			log.section(`PRICE RANGE '${option}' (position ${position + 1} of ${rangeCount})`);
			log.info(`'${option}': its link says ${minPaise === "" ? "no minimum" : `from ${minPaise} paise`} to ${maxPaise === "" ? "no maximum" : `${maxPaise} paise`}; clicking it`);

			// 2. Apply it, and see that the page shows it as selected: the "Clear" link. If it did not, reload the listing.
			let problem: string = "";
			try {
				await this.genericUtility.clearBlockers();
				await presets.nth(position).click();
			} catch (error) {
				problem = `the click failed: ${this.firstLines(error)}`;
			}
			await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), `applying the price range '${option}'`);

			if (problem === "" && !(await this.waitUntil(() => this.clearLinkIsShown(this.productPage.priceClearLinkBy), 10_000))) {
				problem = "the option did not show as selected within 10s";
			}
			if (problem !== "") {
				this.genericUtility.markRetryableFailure(`Price range '${option}' was not applied: ${problem}`);
				this.notAppliedOptions.push(`${option} (${problem})`);
				log.error(`'${option}' was not applied: ${problem}`);
				await this.genericUtility.capture(this.testInfo, "Price", "not applied", this.fileSafe(option));
				await this.reloadListing(`applying '${option}' failed`);
				continue;
			}

			// 3. A screenshot for the report, then read what the page shows for the range (URL and sliders), and the cards.
			await this.genericUtility.capture(this.testInfo, "Price", this.fileSafe(option));
			await this.waitForCardsToSettle();
			const result: PriceRangeCards = {
				option,
				expectedUrlRange: `${minPaise}-${maxPaise}`,
				min: minPaise === "" ? null : Number(minPaise) / 100,
				max: maxPaise === "" ? null : Number(maxPaise) / 100,
				urlRange: decodeURIComponent(this.page.url()).match(/p_36:([\d-]*)/)?.[1] ?? "",
				sliderMin: (await this.productPage.priceMinSliderButton.first().getAttribute("aria-valuetext", { timeout: 3_000 }).catch(() => "")) ?? "",
				sliderMax: (await this.productPage.priceMaxSliderButton.first().getAttribute("aria-valuetext", { timeout: 3_000 }).catch(() => "")) ?? "",
				cards: await this.productPage.readCards(),
			};
			log.info(`'${option}': the URL shows '${result.urlRange}' (expected '${result.expectedUrlRange}'), the sliders read '${result.sliderMin}' to '${result.sliderMax}'; read ${this.cardSummary(result.cards)}`);
			results.push(result);

			// 4. Clear it with the page's own "Clear" link, so the next range starts from the default price.
			await this.clearOption(this.productPage.priceClearLinkBy, option);
		}

		log.section(`FILTER 'Price' DONE: ${results.length} range(s) read, not applied: ${this.notAppliedOptions.join("; ") || "none"}`);
		return results;
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

	// The names of all the options in the list, each once. "See more / See less" is not an option.
	private async readOptionNames(filterOptionsBy: Locator): Promise<string[]> {
		const names: string[] = (await filterOptionsBy.allTextContents()).map((name) => name.replace(/\s+/g, " ").trim());
		return [...new Set(names.filter((name) => name !== "" && !name.toLowerCase().startsWith("see ")))];
	}

	// The option with this name. The name is matched as a whole, so quotes, "..." and other symbols in it cannot break it.
	private optionByName(filterOptionsBy: Locator, option: string): Locator {
		const words: string = option.split(" ").map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("\\s+");
		return filterOptionsBy.filter({ hasText: new RegExp(`^\\s*${words}\\s*$`) }).first();
	}

	// The name of the option at this position, on one line. "" when there is none. Used for the price ranges. It is the text content,
	// as in readOptionNames, because optionByName matches the text content.
	private async readOptionName(filterOptionsBy: Locator, position: number): Promise<string> {
		try {
			return ((await filterOptionsBy.nth(position).textContent({ timeout: 5_000 })) ?? "").replace(/\s+/g, " ").trim();
		} catch {
			return "";
		}
	}

	// True when the filter's "Clear" link is showing, which means something is applied under it. Every option starts from a
	// cleared filter, so this means the option just clicked. It does not depend on the option's name, bold text or label.
	private async clearLinkIsShown(clearLink: Locator): Promise<boolean> {
		return clearLink.first().isVisible();
	}


	// ---- Steps: apply and clear ----

	// Clicks the option with this name and waits (10s) until it shows as selected. False, with the option recorded, when it does not.
	private async applyOption(filterOptionsBy: Locator, filterName: string, option: string): Promise<boolean> {
		let problem: string = "";
		const link: Locator = this.optionByName(filterOptionsBy, option);
		const startedAt: number = Date.now();
		log.info(`Clicking '${option}'`);

		// 1. The list can collapse after every Clear, so "See more" is clicked first whenever it shows (it does not when the list is open). Then click the option.
		try {
			await this.genericUtility.clearBlockers();
			await this.expandOptionList(filterOptionsBy, filterName);
			await link.click();
		} catch (error) {
			problem = `the click failed: ${this.firstLines(error)}`;
		}

		// 2. A blocked page skips the test. This is outside the try blocks, which would swallow the skip.
		await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), `applying '${option}'`);

		// 3. The option must show as selected: the group shows its "Clear" link.
		if (problem === "" && !(await this.waitUntil(() => this.clearLinkIsShown(this.productPage.getClearLinkByHeading(filterName)), 10_000))) {
			problem = "the option did not show as selected within 10s";
		}

		if (problem !== "") {
			this.genericUtility.markRetryableFailure(`Filter option '${option}' was not applied: ${problem}`);
			this.notAppliedOptions.push(`${option} (${problem})`);
			log.error(`'${option}' was not applied: ${problem} (url: ${this.genericUtility.shortUrl(this.page.url())})`);
			await this.genericUtility.capture(this.testInfo, this.fileSafe(filterName), "not applied", this.fileSafe(option));
			return false;
		}

		// The screenshot is only for the report, named after the filter and the option. If it cannot be taken, the option is still applied.
		await this.genericUtility.capture(this.testInfo, this.fileSafe(filterName), this.fileSafe(option));
		log.info(`'${option}' applied after ${Date.now() - startedAt} ms: the "Clear" link of the filter shows`);
		return true;
	}

	// One line about the cards read: how many, and how many show each fact the tests use.
	private cardSummary(cards: Card[]): string {
		const count = (has: (card: Card) => boolean): number => cards.filter(has).length;
		return `${cards.length} card(s): ${count((card) => card.price !== "")} with a price, ${count((card) => card.rating !== "")} with a rating, ${count((card) => card.discount !== "")} printing a discount, ${count((card) => card.delivery !== "")} with a delivery line, ${count((card) => card.availability !== "")} with no main offer`;
	}

	// The first lines of an error on one line. Playwright's message starts with the reason, then the "Call log" that says what it was
	// waiting for (a covered element, a hidden one...), which is what tells why a click timed out.
	private firstLines(error: unknown): string {
		return error instanceof Error ? error.message.split("\n").filter((line) => line.trim() !== "").slice(0, 4).join(" | ") : String(error);
	}

	// The text as a part of a file name: letters, digits, spaces and dashes only ("25% Off or more" becomes "25_ Off or more").
	private fileSafe(text: string): string {
		return text.replace(/[^\p{L}\p{N} -]+/gu, "_").trim();
	}

	// Clicks Clear when something is applied, then waits (10s) for the "Clear" link to go.
	// If that does not work, the page goes back to the unfiltered listing, so the next option starts clean.
	private async clearOption(clearLink: Locator, option: string): Promise<void> {
		try {
			if (await this.clearLinkIsShown(clearLink)) {
				log.info(`Clicking "Clear" to remove '${option}'`);
				await this.genericUtility.clearBlockers();
				await clearLink.first().click();
			} else {
				log.info(`'${option}': the "Clear" link is not showing, so there is nothing to remove`);
			}
			if (!(await this.waitUntil(async () => !(await this.clearLinkIsShown(clearLink)), 10_000))) {
				throw new Error("the filter still shows as applied");
			}
			log.info(`'${option}' cleared`);
		} catch (error) {
			log.warn(`'${option}': could not clear it (${error instanceof Error ? error.message.split("\n")[0] : error})`);
			await this.reloadListing(`clearing '${option}' failed`);
		}
	}

	// Goes back to the unfiltered listing, so the next option starts clean.
	private async reloadListing(reason: string): Promise<void> {
		log.warn(`Going back to the unfiltered listing: ${reason}`);
		await this.page.goto(this.listingUrl, { waitUntil: "domcontentloaded" });
		await this.genericUtility.skipIfBlocked(await this.genericUtility.clearBlockers(), `going back to the listing (${reason})`);
	}


	// ---- Steps: waiting ----

	// Waits (up to 10s) until the titles of the cards on screen are the same on two reads, one second apart, and there are some.
	// The cards of the new option can arrive after its "Clear" link shows. It is not compared with any earlier list; it only waits for this one to stop changing.
	private async waitForCardsToSettle(): Promise<void> {
		let titlesOneSecondAgo: string = "";
		for (let second = 0; second < 10; second++) {
			const titlesNow: string = (await this.productPage.listOrganicCardTitlesBy.allInnerTexts().catch(() => [])).join("|");
			if (titlesNow !== "" && titlesNow === titlesOneSecondAgo) {
				log.info(`The cards settled: ${await this.productPage.listOrganicProductCardsBy.count()} on screen, unchanged for 1s (after ${second + 1}s of waiting)`);
				return;
			}
			titlesOneSecondAgo = titlesNow;
			await this.page.waitForTimeout(1_000);
		}
		log.warn("The cards were still changing, or there were none, after 10s; reading them as they are");
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
