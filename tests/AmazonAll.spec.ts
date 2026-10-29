import { Locator, test, expect, TestInfo } from "@playwright/test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import ProductListingPage from '../pages/ProductListingPage';
import AmazonLandingPage from "../pages/AmazonLandingPage";
import GenericUtility from "../utils/GenericUtility"
import { displayTypeMatch, rangeMatch } from "../utils/FilterMatcher";
import BrandFilterFlows from "../flows/BrandFilterFlows"
import SharedFilterFlows from "../flows/SharedFilterFlows";
import testData from '../testdata/searchTerms.json';
import filterCoverage from '../testdata/filterCoverage.json';
import filterHeadings from '../testdata/filterHeadings.json';
import Logger from "../utils/Logger";
import { stripVTControlCharacters } from "node:util";

const log = Logger.for("Test");

// Product-data assertion failures are not retried. Filter-application assertions can retry once when the flow marks them.
// A retry runs in a new worker, so the marker file carries assertion-only failures across workers.
const noRetryMarker = (testInfo: TestInfo): string => path.join(os.tmpdir(), "pw-no-retry", testInfo.testId);

// A failed expect(...) that is Amazon's answer, and not a timeout inside expect (such as a locator never appearing).
// (A failed expect with a message reads "Error: <message>", then a line "expect(received)..."; soft and hard look the same.)
const isAssertionError = (message: string): boolean =>
  /(^|\n)(Error: )?expect\(/.test(message) && !/[Tt]imeout:? \d+ms|Timed out/.test(message);

// For "at least one product was read / compared": it throws instead of using expect, so the failure is retried. Nothing read
// or compared can be a blocked page and not a filter defect, which an expect failure (never retried) would wrongly call one.
const requireSome = (count: number, message: string): void => {
  if (count <= 0) {
    throw new Error(message);
  }
};

// Every test gets its own log (see utils/Logger.ts): it starts empty here and is attached to the test
// afterwards, so it appears in the Playwright report and the Allure report, also when the test fails or times out.
// eslint-disable-next-line no-empty-pattern
test.beforeEach(({}, testInfo) => {
  if (testInfo.retry === 0) {
    fs.rmSync(noRetryMarker(testInfo), { force: true });
  } else {
    test.skip(fs.existsSync(noRetryMarker(testInfo)), "Not retried: the first attempt failed on assertions only");
  }
  Logger.startTest(testInfo.title);
  log.info(`Started '${testInfo.title}' (project: ${testInfo.project.name}, attempt ${testInfo.retry + 1} of ${testInfo.project.retries + 1}, worker ${testInfo.workerIndex})`);
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  log.info(`Finished '${testInfo.title}': ${testInfo.status} (expected ${testInfo.expectedStatus}) in ${testInfo.duration} ms`);
  for (const error of testInfo.errors) {
    log.error(`Failure: ${stripVTControlCharacters(error.message ?? "").split("\n").slice(0, 3).join(" | ")}`);
  }
  const messages: string[] = testInfo.errors.map((error) => stripVTControlCharacters(error.message ?? ""));
  const hasRetryableFailure: boolean = testInfo.annotations.some((annotation) => annotation.type === "retryable-filter-application");
  const onlyAssertionFailures: boolean = messages.length > 0 && messages.every(isAssertionError);

  // A flow-marked filter-application failure keeps its retry even when other assertions failed with it: "at least one
  // product was validated" and "compared" fail only because the filter was never applied, so they say nothing about the data.
  if (testInfo.status === "failed" && onlyAssertionFailures && !hasRetryableFailure) {
    log.info("Failed on assertions only: the retry will be skipped");
    fs.mkdirSync(path.dirname(noRetryMarker(testInfo)), { recursive: true });
    fs.writeFileSync(noRetryMarker(testInfo), "");
  }
  await Logger.attachTo(testInfo);
});

// A test only runs for the search terms listed for its filter in testdata/filterCoverage.json (see docs/filter-test-data-mapping.md).
const appliesTo = (filter: string, searchTerm: string): boolean =>
  (filterCoverage as Record<string, string[]>)[filter]?.includes(searchTerm) ?? false;

// The heading Amazon uses for a filter can differ per product (laptops show "HDD Size" where phones show "Storage Capacity").
// testdata/filterHeadings.json lists only those differences; any other filter uses its own name.
const headingFor = (filter: string, searchTerm: string): string =>
  (filterHeadings as Record<string, Record<string, string>>)[filter]?.[searchTerm] ?? filter;

// Every test below runs once for each search term in testdata/searchTerms.json (add or remove terms there).
for (const searchTerm of testData.searchTerms) {

if (appliesTo("brands", searchTerm)) test(`${searchTerm}: Verifying brands filter application`, async ({ page }, testInfo) => {


// 	 await allure.epic('Product Filtering');
//   await allure.feature('Brand filter');
//   await allure.severity('critical');

  await page.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => false });
});

  const landingPage = new AmazonLandingPage(page);
  const productPage = new ProductListingPage(page);
  const genericUtility = new GenericUtility(page,testInfo);
  const brandFilterFlows = new BrandFilterFlows(page,testInfo);

  const testName: string = testInfo.title;
  
  log.info("Opening the Amazon landing page");
  await landingPage.openingLandingPage();
  await genericUtility.clearBlockers();
  log.info(`Searching for '${searchTerm}'`);
  await landingPage.givingInputWithinSearchBar(searchTerm);
  await landingPage.clickingOnSubmitSearchButton();
  
 

  await genericUtility.clearBlockers();
  log.info("Search submitted; checking that the Brands filter is in the left navigation");
  await genericUtility.requireFilter("brands");

  const filterOptions: Locator[] = (await productPage.listBrandsOptionsByNew.all());
  console.log(`The filteroptions count is ${filterOptions.length}`);
  log.info(`Brands list: ${filterOptions.length} option(s) found with the new layout locator; ${filterOptions.length === 0 ? "using the old layout locator" : "using the new layout locator"}`);
  let allResults: Map<string, string | number | boolean | string[] | null>[];

  if (filterOptions.length == 0) {
    allResults = await brandFilterFlows.applyFilterAndValidateBrandsFilterWithResult(productPage.listBrandsOptionsByOld, "brandsold");
  } else {
    allResults = await brandFilterFlows.applyFilterAndValidateBrandsFilterWithResult(productPage.listBrandsOptionsByNew, "brands");
  }

  log.info(`Checking the results: ${allResults.length} brand(s) validated, ${brandFilterFlows.notAppliedOptions.length} not applied`);
  // Filter applied + list has data: every brand option needs a result, and at least one must exist.
  expect.soft(brandFilterFlows.notAppliedOptions.length, `Every brand option was applied (not applied: ${brandFilterFlows.notAppliedOptions.join('; ') || 'none'})`).toBe(0);
  requireSome(allResults.length, 'At least one brand was validated (the brand list was not empty)');

  for (const result of allResults) {
    const isValid: boolean = result.get('isValid') as boolean;
    const brand: string = result.get("brand") as string;
    const mismatches: string[] = result.get("mismatches") as string[];

    if (!isValid) {
      console.error(`[${testName}] Brand validation failed for '${brand}'. ${mismatches.length} mismatches found.`);
      // One failure per brand; the message shows how many titles are wrong and the first one.
      expect.soft(mismatches.length, `Brand '${brand}': ${mismatches.length} title(s) without the brand. First: ${mismatches[0].slice(0, 400)}`).toBe(0);
    } else {
      console.log(`[${testName}] All product titles matched for brand: '${brand}'`);
    }
  }
});



if (appliesTo("Storage Capacity", searchTerm)) test(`${searchTerm}: verifyingStorageCapacityFilterFunctionality `, async ({ page }, testInfo) =>{
		
   await page.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => false });
});
		
		
  const landingPage = new AmazonLandingPage(page);
  const productPage = new ProductListingPage(page);
  const genericUtility = new GenericUtility(page,testInfo);
	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  const testName: string = testInfo.title;

	
		await landingPage.openingLandingPage();
		await genericUtility.clearBlockers();
		await landingPage.givingInputWithinSearchBar(searchTerm);
		// await genericUtility.moveMouseLikeHuman();
		await landingPage.clickingOnSubmitSearchButton();
		
		
		// await genericUtility.moveMouseLikeHuman();
		await genericUtility.clearBlockers();
		const heading: string = headingFor("Storage Capacity", searchTerm);
		await genericUtility.requireFilter(heading);


		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.getFilterOptionsByHeading(heading), heading);

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		requireSome(results.length, 'At least one product was validated (the filter returned products and a product page could be read)');

		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		let compared:number = 0;
		let skipped:number = 0;
		let mismatched:number = 0;
		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
			const title:string = genericUtility.safeLower(product.get("title"));
			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
			const about :string= genericUtility.safeLower(product.get("about"));
			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
			const match = rangeMatch(filter, ["memory storage capacity", "hard drive size", "hard disk size", "drivememory storage capacity"], { title, keyFeatures, about, techDetails });

			// 4. Comparable: without a Storage Capacity row in the spec table nothing can be said, so the product is skipped.
			if (match.status === "unknown") {
				console.warn(`[${testName}] No usable Storage Capacity row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
				skipped++;
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				mismatched++;
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Storage Capacity row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Storage Capacity row (${match.rowValue}) on '${title.slice(0, 60)}'`);
			}
		}
		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		requireSome(compared, 'At least one product could be compared with the Storage Capacity filter');


	});



// Battery: Amazon offers different battery filters per product type (phones: Battery Capacity and Battery Life, tablets: Battery Power
// and Battery Life, laptops and speakers: Battery Life, headphones: Battery Charge Time). So one test per search term looks at which of
// them the left navigation shows and checks each one it finds.
// `rows` are the spec-table rows read for that filter (Amazon calls the same thing "Battery Life" or "Battery Average Life").
const batteryFilters = [
  { heading: "Battery Life", key: "batterylife", rows: ["battery life", "battery average life"], options: (p: ProductListingPage): Locator => p.listBatteryLifeOptionsBy },
  { heading: "Battery Capacity", key: "batterycapacity", rows: ["battery capacity"], options: (p: ProductListingPage): Locator => p.listBatteryCapacityOptionsBy },
  { heading: "Battery Power", key: "batterypower", rows: ["battery power"], options: (p: ProductListingPage): Locator => p.listBatteryPowerOptionsBy },
  { heading: "Battery Charge Time", key: "batterychargetime", rows: ["battery charge time"], options: (p: ProductListingPage): Locator => p.listBatteryChargeTimeOptionsBy },
];

if (appliesTo("Battery", searchTerm)) test(`${searchTerm}: verifyingBatteryFiltersFunctionality `, async ({ page }, testInfo) => {

	await page.addInitScript(() => {
		Object.defineProperty(navigator, 'webdriver', { get: () => false });
	});

	const landingPage = new AmazonLandingPage(page);
	const productPage = new ProductListingPage(page);
	const genericUtility = new GenericUtility(page,testInfo);
	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
	const testName: string = testInfo.title;

	await landingPage.openingLandingPage();
	await genericUtility.clearBlockers();
	await landingPage.givingInputWithinSearchBar(searchTerm);
	await landingPage.clickingOnSubmitSearchButton();

	// Which of the battery filters does this page show? The test is skipped if it shows none of them.
	await genericUtility.clearBlockers();
	const offered: string[] = await genericUtility.requireAnyFilter(batteryFilters.map((battery) => battery.heading));
	console.log(`[${testName}] Battery filters shown for '${searchTerm}': ${offered.join(', ')}`);

	for (const battery of batteryFilters.filter((b) => offered.some((name) => name.toLowerCase() === b.heading.toLowerCase()))) {
		console.log(`[${testName}] ===== ${battery.heading} =====`);
		sharedFilterFlows.notAppliedOptions = [];

		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(battery.options(productPage),battery.key);

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `${battery.heading}: every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so this filter fails (the other filters still run).
		expect.soft(results.length, `${battery.heading}: at least one product was validated (the filter returned products and a product page could be read)`).toBeGreaterThan(0);

		console.log(`[${testName}] ${battery.heading}: retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);

		let compared:number = 0;
		let skipped:number = 0;
		let mismatched:number = 0;
		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
			const title:string = genericUtility.safeLower(product.get("title"));
			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
			const about :string= genericUtility.safeLower(product.get("about"));
			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
			const match = rangeMatch(filter, battery.rows, { title, keyFeatures, about, techDetails });

			// 4. Comparable: without a matching row in the spec table nothing can be said, so the product is skipped.
			if (match.status === "unknown") {
				console.warn(`[${testName}] No usable ${battery.heading} row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
				skipped++;
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				mismatched++;
				console.error(`[${testName}] Mismatch found for ${battery.heading} filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `${battery.heading}: filter '${filter}' does not fit the product (row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] ${battery.heading} filter '${filter}' fits the row (${match.rowValue}) on '${title.slice(0, 60)}'`);
			}
		}
		console.log(`[${testName}] ${battery.heading} summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
		// 5. Something compared: if no product could be compared, nothing was checked for this filter.
		expect.soft(compared, `${battery.heading}: at least one product could be compared with the filter`).toBeGreaterThan(0);
	}

});



if (appliesTo("Discount", searchTerm)) test(`${searchTerm}: verifyingDiscountFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
	  const landingPage = new AmazonLandingPage(page);
  const productPage = new ProductListingPage(page);
  const genericUtility = new GenericUtility(page,testInfo);
	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  const testName: string = testInfo.title;

	
		await landingPage.openingLandingPage();
		await genericUtility.clearBlockers();
		await landingPage.givingInputWithinSearchBar(searchTerm);
		// await genericUtility.moveMouseLikeHuman();
		await landingPage.clickingOnSubmitSearchButton();

		await genericUtility.clearBlockers();
		await genericUtility.requireFilter("Discount");



		// Only the cards in the listing are read (no product pages are opened): each one shows its discount, for example "(44% off)".
		const results = await sharedFilterFlows.applyDiscountFilterAndReadCards(productPage.listDiscountOptionsBy);

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
		// 2. List has data: nothing validated means nothing was checked, so fail instead of passing.
		requireSome(results.length, 'At least one product card was read (the filter returned products)');

		console.log(`[${testName}] Retrieved ${results.length} cards from applyDiscountFilterAndReadCards.`);

		let compared:number = 0;
		let skipped:number = 0;
		let mismatched:number = 0;
		for (const card of results) {
			const filter:string = genericUtility.safeLower(card.filter);
			const title:string = genericUtility.safeLower(card.title);
			const shown:number | null = card.discount;
			const needed:number = Number(filter.match(/\d+/)?.[0]);   // "25% off or more" -> 25

			// An option without a number (for example "All Discounts") has nothing to compare with, so skip it instead of failing.
			if (Number.isNaN(needed)) {
				console.warn(`[${testName}] Filter '${filter}' has no percentage to compare with; skipping the card of '${title}'`);
				skipped++;
				continue;
			}

			// 3. Comparable: a card with no discount shown cannot be compared, so it is skipped, not failed.
			if (shown === null) {
				console.warn(`[${testName}] No discount shown on the card of '${title}' for filter '${filter}'; not counting it as a mismatch`);
				skipped++;
				continue;
			}
			compared++;

			if (shown >= needed) {
				console.log(`[${testName}] Filter '${filter}' fits: the card shows ${shown}% off (needs ${needed} or more) on '${title.slice(0, 60)}'`);
			} else {
				mismatched++;
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}': the card shows ${shown}% off, needs ${needed} or more. Card text: ${card.cardText}`);
			}
			expect.soft(shown, `Card discount fits filter '${filter}' (the card shows ${shown}% off): ${title.slice(0, 80)}`).toBeGreaterThanOrEqual(needed);
		}
		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
		// 4. Something compared: if no card showed a discount, nothing was checked, so fail instead of passing.
		requireSome(compared, 'At least one product card showed a discount to compare with the filter');

	});



if (appliesTo("Screen Size", searchTerm)) test(`${searchTerm}: verifyingDisplaySizeFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
	  const landingPage = new AmazonLandingPage(page);
  const productPage = new ProductListingPage(page);
  const genericUtility = new GenericUtility(page,testInfo);
	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  const testName: string = testInfo.title;

	
		await landingPage.openingLandingPage();
		await genericUtility.clearBlockers();
		await landingPage.givingInputWithinSearchBar(searchTerm);
		// await genericUtility.moveMouseLikeHuman();
		await landingPage.clickingOnSubmitSearchButton();

		await genericUtility.clearBlockers();
		const heading: string = headingFor("Screen Size", searchTerm);
		await genericUtility.requireFilter(heading);



		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.getFilterOptionsByHeading(heading), heading);

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		requireSome(results.length, 'At least one product was validated (the filter returned products and a product page could be read)');


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		let compared:number = 0;
		let skipped:number = 0;
		let mismatched:number = 0;
		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
			const title:string = genericUtility.safeLower(product.get("title"));
			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
			const about :string= genericUtility.safeLower(product.get("about"));
			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
			const match = rangeMatch(filter, ["screen size"], { title, keyFeatures, about, techDetails });

			// 4. Comparable: without a Screen Size row in the spec table nothing can be said, so the product is skipped.
			if (match.status === "unknown") {
				console.warn(`[${testName}] No usable Screen Size row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
				skipped++;
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				mismatched++;
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Screen Size row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Screen Size row (${match.rowValue}) on '${title.slice(0, 60)}'`);
			}
		}
		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		requireSome(compared, 'At least one product could be compared with the Screen Size filter');

	});



if (appliesTo("Display Type", searchTerm)) test(`${searchTerm}: verifyingDisplayTypeFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
	  const landingPage = new AmazonLandingPage(page);
  const productPage = new ProductListingPage(page);
  const genericUtility = new GenericUtility(page,testInfo);
	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  const testName: string = testInfo.title;

	
		await landingPage.openingLandingPage();
		await genericUtility.clearBlockers();
		await landingPage.givingInputWithinSearchBar(searchTerm);
		// await genericUtility.moveMouseLikeHuman();
		await landingPage.clickingOnSubmitSearchButton();

		await genericUtility.clearBlockers();
		await genericUtility.requireFilter("Display Type");



		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listDisplayTypeOptionsBy,"displaytype");

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		requireSome(results.length, 'At least one product was validated (the filter returned products and a product page could be read)');


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		let compared:number = 0;
		let skipped:number = 0;
		let mismatched:number = 0;
		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
			const title:string = genericUtility.safeLower(product.get("title"));
			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
			const about :string= genericUtility.safeLower(product.get("about"));
			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
			const match = displayTypeMatch(filter, { title, keyFeatures, about, techDetails });

			// 4. Comparable: no Display Type row and no mention of the filter in the text means nothing can be said.
			if (match.status === "unknown") {
				console.warn(`[${testName}] No Display Type row and no mention of '${filter}' on product '${title}'; not counting it as a mismatch`);
				skipped++;
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				mismatched++;
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Display Type row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else if (match.source === "row") {
				console.log(`[${testName}] Filter '${filter}' found in the Display Type row (${match.rowValue}) on '${title.slice(0, 60)}'`);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched from the product text only (weak: there is no Display Type row) on '${title.slice(0, 60)}'`);
			}
		}
		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		requireSome(compared, 'At least one product could be compared with the Display Type filter');

	});



if (appliesTo("Rear Camera Photo Sensor Resolution", searchTerm)) test(`${searchTerm}: verifyingRearCameraPhotoSensorResolutionFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
	  const landingPage = new AmazonLandingPage(page);
  const productPage = new ProductListingPage(page);
  const genericUtility = new GenericUtility(page,testInfo);
	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  const testName: string = testInfo.title;

	
		await landingPage.openingLandingPage();
		await genericUtility.clearBlockers();
		await landingPage.givingInputWithinSearchBar(searchTerm);
		// await genericUtility.moveMouseLikeHuman();
		await landingPage.clickingOnSubmitSearchButton();

		await genericUtility.clearBlockers();
		await genericUtility.requireFilter("Rear Camera Photo Sensor Resolution");



		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listMobilePhonePrimaryCameraResolutionOptionsBy,"mobilephoneprimarycameraresolution");

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		requireSome(results.length, 'At least one product was validated (the filter returned products and a product page could be read)');


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		let compared:number = 0;
		let skipped:number = 0;
		let mismatched:number = 0;
		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
			const title:string = genericUtility.safeLower(product.get("title"));
			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
			const about :string= genericUtility.safeLower(product.get("about"));
			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
			const match = rangeMatch(filter, ["rear facing camera photo sensor resolution"], { title, keyFeatures, about, techDetails });

			// 4. Comparable: without a Camera Resolution row in the spec table nothing can be said, so the product is skipped.
			if (match.status === "unknown") {
				console.warn(`[${testName}] No usable Camera Resolution row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
				skipped++;
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				mismatched++;
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Camera Resolution row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Camera Resolution row (${match.rowValue}) on '${title.slice(0, 60)}'`);
			}
		}
		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		requireSome(compared, 'At least one product could be compared with the Camera Resolution filter');

	});


if (appliesTo("Processor Speed", searchTerm)) test(`${searchTerm}: verifyingProcessorSpeedFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
	  const landingPage = new AmazonLandingPage(page);
  const productPage = new ProductListingPage(page);
  const genericUtility = new GenericUtility(page,testInfo);
	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  const testName: string = testInfo.title;

	
		await landingPage.openingLandingPage();
		await genericUtility.clearBlockers();
		await landingPage.givingInputWithinSearchBar(searchTerm);
		// await genericUtility.moveMouseLikeHuman();
		await landingPage.clickingOnSubmitSearchButton();

		await genericUtility.clearBlockers();
		const heading: string = headingFor("Processor Speed", searchTerm);
		await genericUtility.requireFilter(heading);



		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.getFilterOptionsByHeading(heading), heading);

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		requireSome(results.length, 'At least one product was validated (the filter returned products and a product page could be read)');


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		let compared:number = 0;
		let skipped:number = 0;
		let mismatched:number = 0;
		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
			const title:string = genericUtility.safeLower(product.get("title"));
			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
			const about :string= genericUtility.safeLower(product.get("about"));
			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
			const match = rangeMatch(filter, ["processor speed"], { title, keyFeatures, about, techDetails });

			// 4. Comparable: without a Processor Speed row in the spec table nothing can be said, so the product is skipped.
			if (match.status === "unknown") {
				console.warn(`[${testName}] No usable Processor Speed row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
				skipped++;
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				mismatched++;
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Processor Speed row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Processor Speed row (${match.rowValue}) on '${title.slice(0, 60)}'`);
			}
		}
		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		requireSome(compared, 'At least one product could be compared with the Processor Speed filter');

	});

}
