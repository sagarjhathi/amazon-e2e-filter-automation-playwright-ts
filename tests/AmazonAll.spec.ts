import { Locator, test, expect } from "@playwright/test";
import ProductListingPage from '../pages/ProductListingPage';
import AmazonLandingPage from "../pages/AmazonLandingPage";
import GenericUtility from "../utils/GenericUtility"
import BrandFilterFlows from "../flows/BrandFilterFlows"
import SharedFilterFlows from "../flows/SharedFilterFlows";
import testData from '../testdata/searchTerms.json';
import filterCoverage from '../testdata/filterCoverage.json';
import Logger from "../utils/Logger";
import { stripVTControlCharacters } from "node:util";

const log = Logger.for("Test");

// Every test gets its own log (see utils/Logger.ts): it starts empty here and is attached to the test
// afterwards, so it appears in the Playwright report and the Allure report, also when the test fails or times out.
// eslint-disable-next-line no-empty-pattern
test.beforeEach(({}, testInfo) => {
  Logger.startTest(testInfo.title);
  log.info(`Started '${testInfo.title}' (project: ${testInfo.project.name}, attempt ${testInfo.retry + 1} of ${testInfo.project.retries + 1}, worker ${testInfo.workerIndex})`);
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  log.info(`Finished '${testInfo.title}': ${testInfo.status} (expected ${testInfo.expectedStatus}) in ${testInfo.duration} ms`);
  for (const error of testInfo.errors) {
    log.error(`Failure: ${stripVTControlCharacters(error.message ?? "").split("\n").slice(0, 3).join(" | ")}`);
  }
  await Logger.attachTo(testInfo);
});

// A test only runs for the search terms listed for its filter in testdata/filterCoverage.json (see docs/filter-test-data-mapping.md).
const appliesTo = (filter: string, searchTerm: string): boolean =>
  (filterCoverage as Record<string, string[]>)[filter]?.includes(searchTerm) ?? false;

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
  
  await landingPage.openingLandingPage();
  await genericUtility.clearBlockers();
  await landingPage.givingInputWithinSearchBar(searchTerm);
  await landingPage.clickingOnSubmitSearchButton();
  
 

  await genericUtility.clearBlockers();
  await genericUtility.requireFilter("brands");

  const filterOptions: Locator[] = (await productPage.listBrandsOptionsByNew.all());
  console.log(`The filteroptions count is ${filterOptions.length}`);
  let allResults: Map<string, string | number | boolean | string[] | null>[];

  if (filterOptions.length == 0) {
    allResults = await brandFilterFlows.applyFilterAndValidateBrandsFilterWithResult(productPage.listBrandsOptionsByOld, "brandsold");
  } else {
    allResults = await brandFilterFlows.applyFilterAndValidateBrandsFilterWithResult(productPage.listBrandsOptionsByNew, "brands");
  }

  // Filter applied + list has data: every brand option needs a result, and at least one must exist.
  expect.soft(brandFilterFlows.notAppliedOptions.length, `Brand not applied for: ${brandFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
  expect(allResults.length, 'No brands were validated: the brand list was empty').toBeGreaterThan(0);

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
		await genericUtility.requireFilter("Storage Capacity");


		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listStorageCapacityOptionsBy,"storagecapacity");

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing, or no product page could be read').toBeGreaterThan(0);

		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	    const isMatch:boolean = title.includes(filter)
    	                   || keyFeatures.includes(filter)
    	                   || about.includes(filter)
    	                   || techDetails.includes(filter);

			if (!isMatch) {

				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);


				expect.soft(isMatch, `Filter '${filter}' not found in product: ${title.slice(0, 80)}`).toBe(true);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}


	});



if (appliesTo("Battery Life", searchTerm)) test(`${searchTerm}: verifyingBatteryLifeFilterFunctionality `, async ({ page }, testInfo) =>{

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
		await genericUtility.requireFilter("Battery Life");

		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listBatteryLifeOptionsBy,"batterylife");

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing, or no product page could be read').toBeGreaterThan(0);





    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	    const isMatch:boolean = title.includes(filter)
    	                   || keyFeatures.includes(filter)
    	                   || about.includes(filter)
    	                   || techDetails.includes(filter);

			if (!isMatch) {

				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);


				expect.soft(isMatch, `Filter '${filter}' not found in product: ${title.slice(0, 80)}`).toBe(true);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
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



		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listDiscountOptionsBy,"discount");

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing, or no product page could be read').toBeGreaterThan(0);


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	    const isMatch:boolean = title.includes(filter)
    	                   || keyFeatures.includes(filter)
    	                   || about.includes(filter)
    	                   || techDetails.includes(filter);

			if (!isMatch) {

				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);


				expect.soft(isMatch, `Filter '${filter}' not found in product: ${title.slice(0, 80)}`).toBe(true);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

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
		await genericUtility.requireFilter("Screen Size");



		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listDisplaySizeOptionsBy,"screensize");

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing, or no product page could be read').toBeGreaterThan(0);


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	    const isMatch:boolean = title.includes(filter)
    	                   || keyFeatures.includes(filter)
    	                   || about.includes(filter)
    	                   || techDetails.includes(filter);

			if (!isMatch) {

				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);


				expect.soft(isMatch, `Filter '${filter}' not found in product: ${title.slice(0, 80)}`).toBe(true);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

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
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing, or no product page could be read').toBeGreaterThan(0);


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	    const isMatch:boolean = title.includes(filter)
    	                   || keyFeatures.includes(filter)
    	                   || about.includes(filter)
    	                   || techDetails.includes(filter);

			if (!isMatch) {

				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);


				expect.soft(isMatch, `Filter '${filter}' not found in product: ${title.slice(0, 80)}`).toBe(true);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

	});



if (appliesTo("Mobile Phone Primary Camera Resolution", searchTerm)) test(`${searchTerm}: verifyingMobilePhonePrimaryCameraResolutionFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
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
		await genericUtility.requireFilter("Mobile Phone Primary Camera Resolution");



		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listMobilePhonePrimaryCameraResolutionOptionsBy,"mobilephoneprimarycameraresolution");

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing, or no product page could be read').toBeGreaterThan(0);


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	    const isMatch:boolean = title.includes(filter)
    	                   || keyFeatures.includes(filter)
    	                   || about.includes(filter)
    	                   || techDetails.includes(filter);

			if (!isMatch) {

				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);


				expect.soft(isMatch, `Filter '${filter}' not found in product: ${title.slice(0, 80)}`).toBe(true);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

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
		await genericUtility.requireFilter("Processor Speed");



		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listProcessorSpeedOptionsBy,"processorspeed");

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing, or no product page could be read').toBeGreaterThan(0);


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	    const isMatch:boolean = title.includes(filter)
    	                   || keyFeatures.includes(filter)
    	                   || about.includes(filter)
    	                   || techDetails.includes(filter);

			if (!isMatch) {

				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);


				expect.soft(isMatch, `Filter '${filter}' not found in product: ${title.slice(0, 80)}`).toBe(true);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

	});

}
