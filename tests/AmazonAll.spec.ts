import { Locator, test, expect } from "@playwright/test";
import ProductListingPage from '../pages/ProductListingPage';
import AmazonLandingPage from "../pages/AmazonLandingPage";
import GenericUtility from "../utils/GenericUtility"
import BrandFilterFlows from "../flows/BrandFilterFlows"
import SharedFilterFlows from "../flows/SharedFilterFlows";
import testData from '../testdata/searchTerms.json';

// Every test below runs once for each search term in testdata/searchTerms.json (add or remove terms there).
for (const searchTerm of testData.searchTerms) {

test(`${searchTerm}: Verifying brands filter application`, async ({ page }, testInfo) => {


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
  await genericUtility.skipIfFilterMissing("brands");

  const filterOptions: Locator[] = (await productPage.listBrandsOptionsByNew.all());
  console.log(`The filteroptions count is ${filterOptions.length}`);
  let allResults: Map<string, string | number | boolean | string[] | null>[];

  if (filterOptions.length == 0) {
    allResults = await brandFilterFlows.applyFilterAndValidateBrandsFilterWithResult(productPage.listBrandsOptionsByOld, "brandsold");
  } else {
    allResults = await brandFilterFlows.applyFilterAndValidateBrandsFilterWithResult(productPage.listBrandsOptionsByNew, "brands");
  }

  for (const result of allResults) {
    const isValid: boolean = result.get('isValid') as boolean;
    const brand: string = result.get("brand") as string;
    const mismatches: string[] = result.get("mismatches") as string[];

    if (!isValid) {
      console.error(`[${testName}] Brand validation failed for '${brand}'. ${mismatches.length} mismatches found.`);
      for (const detail of mismatches) {
        console.error(`[${testName}] Mismatch for '${brand}': ${detail}`);
        expect.soft(false, detail).toBeTruthy();
      }
    } else {
      console.log(`[${testName}] All product titles matched for brand: '${brand}'`);
    }
  }
});



test(`${searchTerm}: verifyingStorageCapacityFilterFunctionality `, async ({ page }, testInfo) =>{
		
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
		await genericUtility.skipIfFilterMissing("Storage Capacity");


		const results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listStorageCapacityOptionsBy,"storagecapacity");
		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	// Nothing was read for this product (page not loaded, or no sections found): that is not a filter defect.
    	if (!title && !keyFeatures && !about && !techDetails) {
    		console.warn(`[${testName}] No product data was read for filter '${filter}'; skipping this product`);
    		continue;
    	}

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

				 expect.soft(false, failureMessage).toBeTruthy();
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}


	});



test(`${searchTerm}: verifyingBatteryLifeFilterFunctionality `, async ({ page }, testInfo) =>{

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
		await genericUtility.skipIfFilterMissing("Battery Life");

		const results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listBatteryLifeOptionsBy,"batterylife");




		if(results.length==0) {
			 expect(results.length>0);
		}
		

    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	// Nothing was read for this product (page not loaded, or no sections found): that is not a filter defect.
    	if (!title && !keyFeatures && !about && !techDetails) {
    		console.warn(`[${testName}] No product data was read for filter '${filter}'; skipping this product`);
    		continue;
    	}

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

				 expect.soft(false, failureMessage).toBeTruthy();
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

});



test(`${searchTerm}: verifyingDiscountFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
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
		await genericUtility.skipIfFilterMissing("Discount");



		const results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listDiscountOptionsBy,"discount");

			if(results.length==0) {
			 expect(results.length>0);
		}
		

    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	// Nothing was read for this product (page not loaded, or no sections found): that is not a filter defect.
    	if (!title && !keyFeatures && !about && !techDetails) {
    		console.warn(`[${testName}] No product data was read for filter '${filter}'; skipping this product`);
    		continue;
    	}

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

				 expect.soft(false, failureMessage).toBeTruthy();
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

	});



test(`${searchTerm}: verifyingDisplaySizeFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
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
		await genericUtility.skipIfFilterMissing("Screen Size");



		const results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listDisplaySizeOptionsBy,"screensize");

			if(results.length==0) {
			 expect(results.length>0);
		}
		

    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	// Nothing was read for this product (page not loaded, or no sections found): that is not a filter defect.
    	if (!title && !keyFeatures && !about && !techDetails) {
    		console.warn(`[${testName}] No product data was read for filter '${filter}'; skipping this product`);
    		continue;
    	}

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

				 expect.soft(false, failureMessage).toBeTruthy();
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

	});



test(`${searchTerm}: verifyingDisplayTypeFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
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
		await genericUtility.skipIfFilterMissing("Display Type");



		const results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listDisplayTypeOptionsBy,"displaytype");

			if(results.length==0) {
			 expect(results.length>0);
		}
		

    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	// Nothing was read for this product (page not loaded, or no sections found): that is not a filter defect.
    	if (!title && !keyFeatures && !about && !techDetails) {
    		console.warn(`[${testName}] No product data was read for filter '${filter}'; skipping this product`);
    		continue;
    	}

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

				 expect.soft(false, failureMessage).toBeTruthy();
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

	});



test(`${searchTerm}: verifyingMobilePhonePrimaryCameraResolutionFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
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
		await genericUtility.skipIfFilterMissing("Mobile Phone Primary Camera Resolution");



		const results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listMobilePhonePrimaryCameraResolutionOptionsBy,"mobilephoneprimarycameraresolution");

			if(results.length==0) {
			 expect(results.length>0);
		}
		

    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	// Nothing was read for this product (page not loaded, or no sections found): that is not a filter defect.
    	if (!title && !keyFeatures && !about && !techDetails) {
    		console.warn(`[${testName}] No product data was read for filter '${filter}'; skipping this product`);
    		continue;
    	}

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

				 expect.soft(false, failureMessage).toBeTruthy();
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

	});


test(`${searchTerm}: verifyingProcessorSpeedFilterFunctionality `,async ({page},testInfo)=> {
		
				
		
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
		await genericUtility.skipIfFilterMissing("Processor Speed");



		const results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listProcessorSpeedOptionsBy,"processorspeed");

			if(results.length==0) {
			 expect(results.length>0);
		}
		

    		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
		

		for (const product of results) {
			const filter:string = genericUtility.safeLower(product.get("filter"));
    	const title:string = genericUtility.safeLower(product.get("title"));
      const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
      const about :string= genericUtility.safeLower(product.get("about"));
    	const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
    	// Nothing was read for this product (page not loaded, or no sections found): that is not a filter defect.
    	if (!title && !keyFeatures && !about && !techDetails) {
    		console.warn(`[${testName}] No product data was read for filter '${filter}'; skipping this product`);
    		continue;
    	}

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

				 expect.soft(false, failureMessage).toBeTruthy();
			} else {
				console.log(`[${testName}] Filter '${filter}' matched in at least one section of product details.`);
			}
		}

	});

}
