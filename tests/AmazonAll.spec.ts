import { Locator, test, expect } from "@playwright/test";
import ProductListingPage from '../pages/ProductListingPage';
import AmazonLandingPage from "../pages/AmazonLandingPage";
import GenericUtility from "../utils/GenericUtility"
import { displayTypeMatch, rangeMatch } from "../utils/FilterMatcher";
import BrandFilterFlows from "../flows/BrandFilterFlows"
import SharedFilterFlows from "../flows/SharedFilterFlows";
import testData from '../testdata/searchTerms.json';
import filterCoverage from '../testdata/filterCoverage.json';

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
      expect.soft(mismatches.length, `Brand '${brand}': ${mismatches.length} title(s) without the brand. First: ${mismatches[0].slice(0, 150)}`).toBe(0);
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
		

		let compared:number = 0;
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
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Storage Capacity row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Storage Capacity row: ${match.rowValue}`);
			}
		}
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		expect(compared, 'No product could be compared with the Storage Capacity filter').toBeGreaterThan(0);


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
		

		let compared:number = 0;
		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
			const title:string = genericUtility.safeLower(product.get("title"));
			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
			const about :string= genericUtility.safeLower(product.get("about"));
			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
			const match = rangeMatch(filter, ["battery life"], { title, keyFeatures, about, techDetails });

			// 4. Comparable: without a Battery Life row in the spec table nothing can be said, so the product is skipped.
			if (match.status === "unknown") {
				console.warn(`[${testName}] No usable Battery Life row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Battery Life row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Battery Life row: ${match.rowValue}`);
			}
		}
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		expect(compared, 'No product could be compared with the Battery Life filter').toBeGreaterThan(0);

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
		const results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listDiscountOptionsBy,"discount",(productIndex, filterValue) => sharedFilterFlows.readListingDiscount(productIndex, filterValue));

		// 1. Filter applied: every option should have been clicked and shown as applied.
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing').toBeGreaterThan(0);

		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);

		let compared:number = 0;
		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
			const title:string = genericUtility.safeLower(product.get("title"));
			const shown = product.get("discount") as number | null;
			const needed:number = Number(filter.match(/\d+/)?.[0]);   // "25% off or more" -> 25

			// 3. Comparable: a card with no discount shown cannot be compared, so it is skipped, not failed.
			if (shown === null) {
				console.warn(`[${testName}] No discount shown on the card of '${title}' for filter '${filter}'; not counting it as a mismatch`);
				continue;
			}
			compared++;

			expect.soft(shown, `Filter '${filter}' does not fit the product (its card shows ${shown}% off): ${title.slice(0, 80)}`).toBeGreaterThanOrEqual(needed);
		}
		// 4. Something compared: if no card showed a discount, nothing was checked, so fail instead of passing.
		expect(compared, 'No product card showed a discount to compare with the filter').toBeGreaterThan(0);

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
		

		let compared:number = 0;
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
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Screen Size row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Screen Size row: ${match.rowValue}`);
			}
		}
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		expect(compared, 'No product could be compared with the Screen Size filter').toBeGreaterThan(0);

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
		

		let compared:number = 0;
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
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Display Type row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else if (match.source === "row") {
				console.log(`[${testName}] Filter '${filter}' found in the Display Type row.`);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched from the product text only (weak: there is no Display Type row).`);
			}
		}
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		expect(compared, 'No product could be compared with the Display Type filter').toBeGreaterThan(0);

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
		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Filter not applied for: ${sharedFilterFlows.notAppliedOptions.join(', ')}`).toBe(0);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, 'No products were validated: the filter returned nothing, or no product page could be read').toBeGreaterThan(0);


    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		let compared:number = 0;
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
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Camera Resolution row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Camera Resolution row: ${match.rowValue}`);
			}
		}
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		expect(compared, 'No product could be compared with the Camera Resolution filter').toBeGreaterThan(0);

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
		

		let compared:number = 0;
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
				continue;
			}
			compared++;

			if (match.status === "mismatch") {
				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}'`);
				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
				console.debug(`[${testName}] About: ${about}`);
				console.debug(`[${testName}] Tech Details: ${techDetails}`);

				expect.soft(match.status, `Filter '${filter}' does not fit the product (Processor Speed row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
			} else {
				console.log(`[${testName}] Filter '${filter}' fits the Processor Speed row: ${match.rowValue}`);
			}
		}
		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
		expect(compared, 'No product could be compared with the Processor Speed filter').toBeGreaterThan(0);

	});

}
