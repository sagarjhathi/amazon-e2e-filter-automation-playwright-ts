import { errors, Locator, Page, TestInfo } from "@playwright/test";
import ProductListingPage from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import RunConfig from "../utils/RunConfig";
import Logger from "../utils/Logger";

const log = Logger.for("BrandFilterFlows");

// The console lines in this file are commented out: this flow is debugged through the logger (the test-log attachment).

class BrandFilterFlows{

    private page:Page;

    private  productPage:ProductListingPage;

	  private  genericUtility:GenericUtility;

	// Brand options that could not be clicked; the test reports them.
	notAppliedOptions: string[] = [];

	// The listing page before any brand is clicked. A reload keeps the applied brand (it is in the URL), so going back
	// here is how the page is reset to the unfiltered list.
	private listingUrl: string = "";

	private async goBackToUnfilteredListing(): Promise<void> {
		await this.page.goto(this.listingUrl);
		await this.genericUtility.clearBlockers();
	}



	// Words that titles use instead of the brand name (e.g. "Moto g06" for Motorola). Keys are lowercase brand names.
	// An alias is only looked for in that brand's own list, so it cannot let another brand's product pass.
	private static readonly BRAND_ALIASES: Record<string, string[]> = {
		motorola: ["moto"],
		apple: ["iphone"],
		panasonic: ["technics"],
		itel: ["zeno"],
		jio: ["jiobharat", "jiophone", "jiotag"],
		xiaomi: ["redmi", "poco"],
		mi: ["redmi"],
		tecno: ["spark"],
		creative: ["sound blaster"],
		"leaf studios": ["leaf"],
		"ant esports": ["ant"],
	};

	// The name found in the title as a whole word: the brand itself, or one of its aliases; "" when none is found.
	// Details: docs/code-walkthrough/brand-filter-flows.md
	private findBrandInTitle(title: string, brand: string): string {
		// Lowercase words joined by single spaces, punctuation dropped: "Mi Redmi (6GB)" becomes "mi redmi 6gb".
		const plainText = (value: string): string => value.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean).join(" ");

		// A space at both ends, so the first and last word have a space beside them like every other word.
		const titleText: string = ` ${plainText(title)} `;

		// The brand itself, plus its short forms if it has any (most brands have none).
		const aliases: string[] = BrandFilterFlows.BRAND_ALIASES[brand.toLowerCase()] ?? [];
		const namesToFind: string[] = [brand, ...aliases];

		// Search each name with a space on both sides: " mi " is found as a word, but not inside " premium ".
		for (const name of namesToFind) {
			if (titleText.includes(` ${plainText(name)} `)) {
				return name;
			}
		}
		return "";
	}

	constructor(page:Page,testInfo:TestInfo) {
        this.page=page;
        this.productPage = new ProductListingPage(page);
        this.genericUtility = new GenericUtility(page,testInfo);
    }



	// Seconds since a start time, with one decimal, for the log ("12.3").
	private secondsSince(startedAt: number): string {
		return ((Date.now() - startedAt) / 1000).toFixed(1);
	}

	// Text on one line: a product title that contains line breaks would break the one-line-per-event layout of the log.
	private oneLine(text: string): string {
		return text.replace(/\s+/g, " ").trim();
	}

	// Waits (at most 10s) until the number of product titles is the same twice, 1s apart. Returns the problem as text
	// when no title showed at all, and "" otherwise. Never throws.
	private async waitForTitlesToSettle(str: string): Promise<string> {
		const deadline: number = Date.now() + 10_000;
		let lastCount: number = -1;
		while (Date.now() < deadline) {
			const count: number = await this.productPage.productNameListingPageBy.count();
			if (count > 0 && count === lastCount) {
				log.info(`Brand '${str}': the results settled at ${count} title(s)`);
				return "";
			}
			lastCount = count;
			await this.page.waitForTimeout(1000);
		}
		if (lastCount <= 0) {
			const problem: string = "no product title appeared within 10s";
			log.warn(`Brand '${str}': results did not refresh, ${problem}`);
			return problem;
		}
		log.warn(`Brand '${str}': the number of titles was still changing after 10s (last count ${lastCount})`);
		return "";
	}

	// Clicks the brand in the Brands list. Throws when the click fails.
	private async clickBrand(filterName: string, str: string): Promise<void> {
		await this.genericUtility.clearBlockers();
		await this.productPage.getFilterByTypeAndName(filterName, str).click();
		await this.genericUtility.clearBlockers();
	}

	// Waits up to 10s for the brand to show as selected (its name in bold in the Brands list). True when it does.
	private async brandShowsAsSelected(filterName: string, str: string): Promise<boolean> {
		try {
			await this.productPage.getAppliedFilterByTypeAndName(filterName, str).first().waitFor({ state: 'visible', timeout: 10_000 });
			return true;
		} catch {
			return false;
		}
	}

	// Removes the brand filter (when one is applied), so the next brand starts from the unfiltered list.
	private async clearAppliedFilter(filterName: string, str: string): Promise<void> {
		// Let a page load that is still in flight finish, so the checks below see the page as it ends up.
		await this.page.waitForLoadState('domcontentloaded').catch(() => {});

		// Applied means: the brand shows as selected, or Amazon's "Clear" control is showing (a click that only partly
		// worked). Nothing applied means nothing to clear.
		const brandSelected: boolean = await this.productPage.getAppliedFilterByTypeAndName(filterName, str).first().isVisible();
		const clearShown: boolean = await this.productPage.clearButtonBy.first().isVisible();
		if (!brandSelected && !clearShown) {
			log.info(`Brand '${str}' is not applied; nothing to clear`);
			return;
		}
		log.info(`Brand '${str}': clearing it (brand shows as selected: ${brandSelected}, Clear control showing: ${clearShown})`);

		try {
			if (await this.productPage.clearButtonBy.first().isVisible()) {
				await this.genericUtility.clearBlockers();
				await this.productPage.clearButtonBy.first().click();
				await this.genericUtility.clearBlockers();
				// console.log(`Clicked clear button for the filter -> ${str}`);
				log.info(`Cleared the brand filter '${str}'`);
			}
		} catch (error) {
			await this.goBackToUnfilteredListing();
			// console.log(`Cannot click clear button hence navigating back to fresh page for filter -> ${str}`);
			log.warn(`Could not click the clear button after '${str}'; went back to the unfiltered listing instead`);
		}
	}

	async applyFilterAndValidateBrandsFilterWithResult(filterOptionsBy: Locator, filterName: string): Promise<Map<string, string | number | boolean | null | string[]>[]> {
  // console.log(`Within applyFilterAndValidateBrandsFilterWithResult method`);
  this.listingUrl = this.page.url();
  const flowStartedAt: number = Date.now();

  // count() does not wait, so give the brand list time to show and settle before counting it.
  const filterOptionCount: number = await this.genericUtility.waitForFilterOptions(filterOptionsBy, filterName);

  if (filterOptionCount === 0) {
    // console.warn(`No filter options found for locator -> ${filterOptionsBy}`);
    log.warn(`0 brand options found under the Brands filter after waiting 10s; nothing to validate (url: ${this.genericUtility.shortUrl(this.page.url())}, title: '${await this.page.title().catch(() => "unknown")}')`);
    return [];
  }

  const filterOptionSize: number = RunConfig.filterOptionLimit(filterOptionCount);
  log.section(`BRANDS FILTER (${filterName}): ${filterOptionCount} brand option(s) on the page, checking ${filterOptionSize}`);
  log.info(`Unfiltered listing address: ${this.listingUrl}`);

  const allResults: Map<string, string | number | boolean | null | string[]>[] = [];

  for (let i = 0; i < filterOptionSize; i++) {
    const brandStartedAt: number = Date.now();
    // Every brand gets its own banner, so the log reads as one part per brand.
    log.section(`BRAND ${i + 1} of ${filterOptionSize}`);
    // console.log(`Within the filterOptions loop — iteration ${i} of ${filterOptionSize}`);

    // A "Continue shopping" page hides the brand list, so handle it before looking for the options
    await this.genericUtility.clearBlockers();

    // After a clear/reload the brand list can take a moment to come back, so wait for it before counting
    try {
      await filterOptionsBy.first().waitFor({ state: 'visible', timeout: 10_000 });
    } catch (error) {
      // console.warn(`Brand options did not reappear within 10s before iteration ${i}`);
      log.warn(`Brand options did not reappear within 10s before brand ${i + 1} (url: ${this.genericUtility.shortUrl(this.page.url())}, title: '${await this.page.title().catch(() => "unknown")}')`);
    }

    // The list can come back collapsed, so expand it (no-op if already expanded) before counting
    await this.genericUtility.clickMoreButtonIfPresent(this.productPage.seeMoreButtonUnderBrandFilter);

    // Expanding the list takes a moment, so wait for this brand's own option to show before counting.
    await filterOptionsBy.nth(i).waitFor({ state: 'visible', timeout: 10_000 }).catch(() => {
      log.warn(`Brand option ${i + 1} did not show within 10s (url: ${this.genericUtility.shortUrl(this.page.url())})`);
    });

    const liveCount: number = await filterOptionsBy.count();

    if (i >= liveCount) {
      // console.log(`Avoiding out of bounds — index ${i} exceeds live list size ${liveCount}`);
      log.warn(`Brand ${i + 1} is beyond the live list (${liveCount} brand(s) now); stopping with ${allResults.length} brand result(s)`);
      break;
    }

    const str: string = (await filterOptionsBy.nth(i).innerText()).trim();
    log.info(`Brand ${i + 1} is '${str}'; clicking it`);

    try {
      await this.clickBrand(filterName, str);
    } catch (error) {
      // Name the kind of failure, because a timeout and a locator problem need different fixes.
      const message: string = error instanceof Error ? error.message : String(error);
      const reason: string =
        error instanceof errors.TimeoutError ? "the brand option was not clickable within 15s"
        : message.includes("strict mode violation") ? "the brand locator matches more than one element"
        : message.split("\n")[0];
      // console.warn(`Brand click failed for: ${str} — ${reason}`);
      this.notAppliedOptions.push(`${str} (option click: ${reason})`);
      log.error(`Brand '${str}' not applied after ${this.secondsSince(brandStartedAt)}s, the click failed: ${reason} (url: ${this.genericUtility.shortUrl(this.page.url())}, title: '${await this.page.title().catch(() => "unknown")}')`);
      // The click may have partly applied the brand; clear it so the next brand is not applied on top of it.
      await this.clearAppliedFilter(filterName, str);
      continue;
    }

    // console.log(`Clicked on ${str} within the filterOptions loop`);
    log.info(`Clicked '${str}'; waiting for the brand to show as selected`);

    // The brand showing as selected (bold in the Brands list) is the sign that the filter took effect. Without it the
    // list on the page may still be the unfiltered one, so do not read titles unless it shows.
    let brandSelected: boolean = await this.brandShowsAsSelected(filterName, str);

    if (!brandSelected) {
      // Find out what the page looks like, because the causes need different handling.
      let stillBlocked: boolean = !(await this.genericUtility.clearBlockers());
      // Amazon shows its "Clear" control once any filter is applied.
      const clearShown: boolean = await this.productPage.clearButtonBy.first().isVisible();
      log.warn(`Brand '${str}' did not show as selected within 10s (blocked: ${stillBlocked}, Clear control showing: ${clearShown}, url: ${this.genericUtility.shortUrl(this.page.url())})`);

      // Block resolved and the Clear control is showing, yet the brand does not show as selected: something else is
      // off. A reload keeps the applied filter (it is in the address), so reload once and look again.
      if (!stillBlocked && clearShown) {
        log.warn(`Brand '${str}': the Clear control is showing but the brand does not show as selected; reloading the page once`);
        await this.page.reload();
        // The reload can land on a captcha or 503 page too, so check again.
        stillBlocked = !(await this.genericUtility.clearBlockers());
        brandSelected = await this.brandShowsAsSelected(filterName, str);
        log.info(`Brand '${str}': ${brandSelected ? "shows as selected after the reload" : "still does not show as selected after the reload"}`);
      }

      // One more try, except on a blocked page where a click cannot work. Clear first: clicking a brand that is already
      // selected would switch it off. Then click the brand again and look once more.
      if (!brandSelected && !stillBlocked) {
        log.warn(`Brand '${str}': trying once more, clearing the filter first and then clicking the brand again`);
        await this.clearAppliedFilter(filterName, str);
        try {
          // The list can come back collapsed, so expand it before clicking the brand.
          await this.genericUtility.clickMoreButtonIfPresent(this.productPage.seeMoreButtonUnderBrandFilter);
          await this.clickBrand(filterName, str);
          brandSelected = await this.brandShowsAsSelected(filterName, str);
        } catch (retryError) {
          log.warn(`Brand '${str}': the second click failed: ${retryError instanceof Error ? retryError.message.split("\n")[0] : String(retryError)}`);
        }
        log.info(`Brand '${str}': ${brandSelected ? "shows as selected after the second try" : "still does not show as selected after the second try"}`);
      }

      if (!brandSelected) {
        const reason: string = stillBlocked
          ? "the brand did not show as selected within 10s: Amazon is showing a captcha or 503 page"
          : clearShown
            ? "the brand did not show as selected within 10s, also not after a reload and a second try, although the Clear control was showing"
            : "the brand did not show as selected within 10s: the click had no effect, also not on a second try (the Clear control was not showing)";
        // console.warn(`Brand not applied for '${str}': ${reason}`);
        this.notAppliedOptions.push(`${str} (${reason})`);
        log.error(`Brand '${str}' not applied after ${this.secondsSince(brandStartedAt)}s: ${reason} (url: ${this.genericUtility.shortUrl(this.page.url())}, title: '${await this.page.title().catch(() => "unknown")}')`);
        await this.clearAppliedFilter(filterName, str);
        continue;
      }
    }

    log.info(`Brand '${str}' shows as selected; reading its products`);

    // The results load in gradually, so wait until the number of titles stops changing before reading them.
    // refreshProblem is the reason when no title showed at all, so an empty list is reported with its cause.
    const refreshProblem: string = await this.waitForTitlesToSettle(str);

    // All titles in one call (reading them one by one costs a slowMo delay each), then check the list below.
    const productTitles: string[] = await this.productPage.productNameListingPageBy.allInnerTexts();

    let isValid: boolean = true;
    const mismatchDetails: string[] = [];

    if (productTitles.length === 0) {
      isValid = false;
      // Page title and URL show whether this is a bot check / error page or a genuinely empty result list.
      const pageTitle: string = await this.page.title().catch(() => "unknown");
      const noProductsMessage: string = `No products found for brand '${str}' — ${refreshProblem || "the listing was empty"} (page title: '${pageTitle}', url: ${this.genericUtility.shortUrl(this.page.url())})`;
      mismatchDetails.push(noProductsMessage);
      log.error(noProductsMessage);
    } else {
      log.info(`Brand '${str}': ${productTitles.length} product title(s) listed${refreshProblem ? `, but ${refreshProblem}` : ""}`);
      // The alias that each alias-only title matched through, so the log shows when and which alias made a brand pass.
      const viaAlias: string[] = [];
      for (let k = 0; k < productTitles.length; k++) {

        const title: string = this.oneLine(productTitles[k]);

        const foundAs: string = this.findBrandInTitle(title, str);
        const titleMatches: boolean = foundAs !== "";
        if (titleMatches && foundAs !== str) {
          viaAlias.push(foundAs);
        }
        // console.log(`Product index ${k} for brand '${str}' — title: '${title}', matches: ${titleMatches}`);

        if (!titleMatches) {
          isValid = false;
          mismatchDetails.push(`Index: ${k}, Brand: ${str}, Title: '${title}'`);
          // console.warn(`Brand mismatch — index ${k}, brand '${str}', title: '${title}'`);
          log.warn(`Brand '${str}': title ${k + 1} does not contain the brand: '${title}'`);
        }
      }
      if (viaAlias.length > 0) {
        log.info(`Brand '${str}': ${viaAlias.length} of ${productTitles.length} title(s) matched through an alias, not the brand name (alias: ${[...new Set(viaAlias)].join(", ")})`);
      }
    }

    const result: Map<string, string | number | boolean | null | string[]> = new Map<string, string | number | boolean | null | string[]>();
    result.set("brand", str);
    result.set("isValid", isValid);
    result.set("mismatches", mismatchDetails);
    // console.log(`Result for brand '${str}': isValid=${isValid}, mismatches=${mismatchDetails.length}`);
    log.info(`Brand '${str}': ${isValid ? "PASS" : "FAIL"} (${mismatchDetails.length} mismatch(es)) in ${this.secondsSince(brandStartedAt)}s`);

    allResults.push(result);
    // console.log(`allResults now has ${allResults.length} brand(s) recorded`);
    log.debug(`${allResults.length} brand result(s) recorded so far`);

    await this.clearAppliedFilter(filterName, str);
  }
  // console.log(`Returning the allResults List of Maps containing the data`);
  log.info(`Brands checked: ${allResults.map((result) => `${result.get("brand")} ${result.get("isValid") ? "PASS" : "FAIL"}`).join(", ") || "none"}`);
  log.info(`Brands not applied: ${this.notAppliedOptions.join("; ") || "none"}`);
  log.section(`BRANDS FILTER DONE: ${allResults.length} brand result(s), ${this.notAppliedOptions.length} brand(s) not applied, in ${this.secondsSince(flowStartedAt)}s`);

  return allResults;
}

}export default BrandFilterFlows;
