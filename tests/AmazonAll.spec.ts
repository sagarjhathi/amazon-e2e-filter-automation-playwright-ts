import { Locator, test, expect } from "@playwright/test";
import ProductListingPage from '../pages/ProductListingPage';
import AmazonLandingPage from "../pages/AmazonLandingPage";
import GenericUtility from "../utils/GenericUtility"
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
  expect.soft(brandFilterFlows.notAppliedOptions, `[${testName}] Brand option(s) could not be applied`).toEqual([]);
  expect(allResults.length, `[${testName}] No brands were validated for the brands filter`).toBeGreaterThan(0);

  for (const result of allResults) {
    const isValid: boolean = result.get('isValid') as boolean;
    const brand: string = result.get("brand") as string;
    const mismatches: string[] = result.get("mismatches") as string[];

    if (!isValid) {
      console.error(`[${testName}] Brand validation failed for '${brand}'. ${mismatches.length} mismatches found.`);
      for (const detail of mismatches) {
        console.error(`[${testName}] Mismatch for '${brand}': ${detail}`);
        expect.soft(isValid, detail).toBe(true);
      }
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
		expect.soft(sharedFilterFlows.notAppliedOptions, `[${testName}] Filter option(s) could not be applied`).toEqual([]);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, `[${testName}] No products were validated for the filter`).toBeGreaterThan(0);

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


				const failureMessage: string =
					` filter '${filter}' not found in product details.\n` +
					`-------------------------------------------------------------\n` +
					` Title: ${title}\n` +
					` Key Features: ${keyFeatures}\n` +
					` About: ${about}\n` +
					` Tech Details: ${techDetails}\n` +
					`-------------------------------------------------------------`;

				 expect.soft(isMatch, failureMessage).toBe(true);
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
		expect.soft(sharedFilterFlows.notAppliedOptions, `[${testName}] Filter option(s) could not be applied`).toEqual([]);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, `[${testName}] No products were validated for the filter`).toBeGreaterThan(0);





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


				const failureMessage: string =
					` filter '${filter}' not found in product details.\n` +
					`-------------------------------------------------------------\n` +
					` Title: ${title}\n` +
					` Key Features: ${keyFeatures}\n` +
					` About: ${about}\n` +
					` Tech Details: ${techDetails}\n` +
					`-------------------------------------------------------------`;

				 expect.soft(isMatch, failureMessage).toBe(true);
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
		expect.soft(sharedFilterFlows.notAppliedOptions, `[${testName}] Filter option(s) could not be applied`).toEqual([]);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, `[${testName}] No products were validated for the filter`).toBeGreaterThan(0);


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


				const failureMessage: string =
					` filter '${filter}' not found in product details.\n` +
					`-------------------------------------------------------------\n` +
					` Title: ${title}\n` +
					` Key Features: ${keyFeatures}\n` +
					` About: ${about}\n` +
					` Tech Details: ${techDetails}\n` +
					`-------------------------------------------------------------`;

				 expect.soft(isMatch, failureMessage).toBe(true);
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
		expect.soft(sharedFilterFlows.notAppliedOptions, `[${testName}] Filter option(s) could not be applied`).toEqual([]);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, `[${testName}] No products were validated for the filter`).toBeGreaterThan(0);


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


				const failureMessage: string =
					` filter '${filter}' not found in product details.\n` +
					`-------------------------------------------------------------\n` +
					` Title: ${title}\n` +
					` Key Features: ${keyFeatures}\n` +
					` About: ${about}\n` +
					` Tech Details: ${techDetails}\n` +
					`-------------------------------------------------------------`;

				 expect.soft(isMatch, failureMessage).toBe(true);
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
		expect.soft(sharedFilterFlows.notAppliedOptions, `[${testName}] Filter option(s) could not be applied`).toEqual([]);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, `[${testName}] No products were validated for the filter`).toBeGreaterThan(0);


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


				const failureMessage: string =
					` filter '${filter}' not found in product details.\n` +
					`-------------------------------------------------------------\n` +
					` Title: ${title}\n` +
					` Key Features: ${keyFeatures}\n` +
					` About: ${about}\n` +
					` Tech Details: ${techDetails}\n` +
					`-------------------------------------------------------------`;

				 expect.soft(isMatch, failureMessage).toBe(true);
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
		expect.soft(sharedFilterFlows.notAppliedOptions, `[${testName}] Filter option(s) could not be applied`).toEqual([]);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, `[${testName}] No products were validated for the filter`).toBeGreaterThan(0);


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


				const failureMessage: string =
					` filter '${filter}' not found in product details.\n` +
					`-------------------------------------------------------------\n` +
					` Title: ${title}\n` +
					` Key Features: ${keyFeatures}\n` +
					` About: ${about}\n` +
					` Tech Details: ${techDetails}\n` +
					`-------------------------------------------------------------`;

				 expect.soft(isMatch, failureMessage).toBe(true);
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
		expect.soft(sharedFilterFlows.notAppliedOptions, `[${testName}] Filter option(s) could not be applied`).toEqual([]);
		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
		results = genericUtility.onlyCapturedProducts(results, testName);
		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
		expect(results.length, `[${testName}] No products were validated for the filter`).toBeGreaterThan(0);


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


				const failureMessage: string =
					` filter '${filter}' not found in product details.\n` +
					`-------------------------------------------------------------\n` +
					` Title: ${title}\n` +
					` Key Features: ${keyFeatures}\n` +
					` About: ${about}\n` +
					` Tech Details: ${techDetails}\n` +
					`-------------------------------------------------------------`;

				 expect.soft(isMatch, failureMessage).toBe(true);
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

	});

}
