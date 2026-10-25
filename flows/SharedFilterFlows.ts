import { Locator, Page, TestInfo } from "@playwright/test";
import ProductListingPage from "../pages/ProductListingPage";
import GenericUtility from "../utils/GenericUtility";
import RunConfig from "../utils/RunConfig";
import Logger from "../utils/Logger";

const log = Logger.for("SharedFilterFlows");

class SharedFilterFlows {

	private page:Page;
	private genericUtility:GenericUtility;
	private productPage :ProductListingPage;
    private testInfo:TestInfo;

	// Filter options that could not be clicked or did not show as applied; the test reports them.
	notAppliedOptions :string[] = [];


	 constructor(page:Page,testInfo:TestInfo) {
		this.page=page;
        this.testInfo=testInfo;
		this.productPage= new ProductListingPage(page);
		this.genericUtility = new GenericUtility(page,testInfo);
	}


	async applyFilterAndValidateProductsWithResult(filterOptionsBy :Locator, filterName :string) :Promise<Map<string, string | number | boolean | null | string[]>[]> {

		const testName: string = this.testInfo.title;

		console.log(`[${testName}] Within applyFilterAndValidateProductsWithResult method`);



		const filterOptions : Locator[] = await(filterOptionsBy.all());
		const results:Map<string, string | number | boolean | null | string[]>[] =[];

		if (filterOptions.length==0) {
			console.warn(`[${testName}] No filter options found for locator -> ${filterOptionsBy}`);
			log.warn(`No '${filterName}' filter options found on the page (url: ${this.page.url()}, title: '${await this.page.title()}'); nothing to validate`);
			return results;
		}

		console.log(`[${testName}] Within applyFilterAndValidateProductsWithResult filterOptions size is -> ${filterOptions.length}`);
		log.info(`Starting '${filterName}' filter: ${filterOptions.length} option(s) on the page at ${this.page.url()}`);




		const filterOptionSize :number = RunConfig.filterOptionLimit(filterOptions.length);



		for (let filterOption = 0; filterOption <filterOptionSize; filterOption++) {

			console.log(`[${testName}] Within filterOptions loop in applyFilterAndValidateProductsWithResult`);

			await this.genericUtility.clearBlockers();

			const inloopParent :Locator[] = await(filterOptionsBy.all());
			if ( filterOption > inloopParent.length - 1) {
				console.log(`[${testName}] Avoiding out of bounds issue by traversing only up to the in-loop size in applyFilterAndValidateProductsWithResult`);
				log.warn(`Option ${filterOption + 1} is beyond the live list (${inloopParent.length} option(s) now); stopping the '${filterName}' loop with ${results.length} result(s)`);
				return results;
			}

			const filterValue :string =  (await filterOptionsBy.nth(filterOption).innerText()).trim();
			log.info(`Option ${filterOption + 1}/${filterOptionSize}: applying '${filterValue}'`);


            // Which step failed, so the report says why a filter was "not applied".
            let step :string = "option click";
            try {
  // await this.genericUtility.moveMouseLikeHuman(this.productPage.getFilterByTypeAndName(filterName, filterValue).first());
  await this.genericUtility.clearBlockers();
  await this.productPage.getFilterByTypeAndName(filterName, filterValue).click();
  await this.genericUtility.clearBlockers();
  // Scrolling to the applied chip waits for it, so a timeout here means the chip never appeared after the click.
  step = "applied chip not shown after the click";
  await this.genericUtility.smoothScrollToElement(this.productPage.getAppliedFilterByTypeAndName(filterName,filterValue));
  await this.genericUtility.capture(this.testInfo);
} catch (error) {
  const reason :string = error instanceof Error ? error.message.split("\n")[0] : String(error);
  console.warn(`[${testName}] Filter not applied for: ${filterValue} (${step}) — ${reason}`);
  this.notAppliedOptions.push(`${filterValue} (${step}: ${reason})`);
  log.error(`'${filterValue}' not applied at step "${step}": ${reason} (url: ${this.page.url()}, title: '${await this.page.title().catch(() => "unknown")}')`);
  continue;
}
log.info(`'${filterValue}' applied; applied chip is showing`);




			let productNameListingPage :Locator[] = await (this.productPage.productNameListingPageBy.all());
			const productNameListingPageSize = RunConfig.productLimit(productNameListingPage.length);
			log.info(`'${filterValue}': ${productNameListingPage.length} product(s) listed, checking ${productNameListingPageSize}`);
			if (productNameListingPage.length === 0) {
				log.warn(`'${filterValue}': the listing is empty after applying the filter (url: ${this.page.url()}, title: '${await this.page.title()}')`);
			}







			for (let productIndex = 0; productIndex <productNameListingPageSize; productIndex++) {



				productNameListingPage=await(this.productPage.productNameListingPageBy.all());

				if (productIndex >= productNameListingPage.length) {
				    break;
				}
				console.log(`[${testName}] Within productNameListingPage loop in applyFilterAndValidateProductsWithResult`);
				console.log(`[${testName}] Inside the loop and product name is ${await productNameListingPage[productIndex].innerText()}`);

				const productResult :Map<string,string | number |boolean |null |string[]> = await this.applyFilterOptionsAndFetchProductDetailsGlobal(productIndex, filterValue);
				console.log(`[${testName}] Added 'filter','title','keyFeatures', 'about', 'techDetails' into the Map -> productResult`);

				results.push(productResult);
				log.info(`'${filterValue}' product ${productIndex + 1}/${productNameListingPageSize}: details ${productResult.get("loaded") ? "captured" : "NOT captured"}`);
				console.log(`[${testName}] Added 'productResult' Map into the 'results' i.e list of maps`);
				console.log(`[${testName}] ==========================================================================================================`);

			}

			// await this.genericUtility.moveMouseLikeHuman();
			await this.genericUtility.clearBlockers();
			await (this.productPage.clearButtonBy.click());
			await this.genericUtility.clearBlockers();
			console.log(`[${testName}] Clearing the filter value -> ${filterValue} within productNameListingPage loop`);
			log.info(`Cleared the filter '${filterValue}'`);

			console.log(`[${testName}] ==========================================================================================================`);
			console.log(`[${testName}] ==========================================================================================================`);

		}
		console.log(`[${testName}] Returning the 'results' i.e list of Maps`);
		log.info(`Finished '${filterName}' filter: ${results.length} product result(s), ${this.notAppliedOptions.length} option(s) not applied`);
		return results;
}




	async applyFilterOptionsAndFetchProductDetailsGlobal(

		    productIndex :number,
		    filterValue :string,


		 ) :Promise<Map<string,string |number |boolean |null |string[]>>{


	const testName: string = this.testInfo.title;



 const productResult: Map<string,string |number |boolean |null |string[]> = new Map<string,string |number |boolean |null |string[]>();
 productResult.set("filter", filterValue);
 // Always return the same keys, so a product that did not load has empty values, never missing keys.
 for (const key of ["title", "keyFeatures", "about", "techDetails"]) { productResult.set(key, null); }
 productResult.set("loaded", false);
 let page2 :Page | undefined;
 const listingUrl :string = this.page.url();
try {

	await this.genericUtility.clearBlockers();
	const productElement :Locator = this.productPage.getProductByIndex(productIndex);
	await this.genericUtility.smoothScrollToElement(productElement);
	console.log(`[${testName}] Getting product by index in productNameListingPage loop`);

    page2 = await this.genericUtility.openAndGetNewTab(() => productElement.click(), 10_000);

	// await this.genericUtility.moveMouseLikeHuman(productElement);


} catch (error) {
	console.warn(`[${testName}] Failed to open product index ${productIndex} for filter value -> ${filterValue} — ${error}`);
	log.warn(`Could not open product ${productIndex + 1} for '${filterValue}': ${error instanceof Error ? error.message.split("\n")[0] : String(error)}`);

	// A click that opened no tab may have navigated the listing tab itself to the product page.
	// Put it back, otherwise the next product index would be read from the wrong page.
	if (this.page.url() !== listingUrl) {
		try {
			console.warn(`[${testName}] Listing tab navigated away to ${this.page.url()}; going back to the listing`);
			await this.page.goBack();
			await this.genericUtility.clearBlockers();
			await this.productPage.productNameListingPageBy.first().waitFor({ state: 'visible', timeout: 10_000 });
		} catch (recoveryError) {
			console.warn(`[${testName}] Could not return to the product listing — ${recoveryError}`);
		}
	}
}

console.log(`[${testName}] Clicked on the product name, new tab should open`);

// No new tab means the click failed above, so there is nothing to scrape or close.
if (!page2) {
	console.warn(`[${testName}] No product tab opened for index ${productIndex} filter '${filterValue}'; skipping detail scrape`);
	log.warn(`No product tab opened for product ${productIndex + 1} ('${filterValue}'); skipping its details`);
	return productResult;
}

// Locators are bound to the page they were created with, so the product tab needs its own page objects.
const detailPage = new ProductListingPage(page2);
const detailUtility = new GenericUtility(page2, this.testInfo);

// The product tab can also open on the "Continue shopping" page, so handle it before reading the product.
await page2.waitForLoadState('domcontentloaded').catch(() => {});
await detailUtility.clearBlockers();

let productPageLoaded :boolean = false;
try {
	await detailPage.productNameIndividualPage.first().waitFor({ state: 'visible', timeout: 10_000 });
	productPageLoaded = true;
	productResult.set("loaded", true);
	// await detailUtility.moveMouseLikeHuman();
} catch (error) {
	console.warn(`[${testName}] Product detail page did not load for index ${productIndex} filter '${filterValue}' (tab url: ${page2.url()}, title: '${await page2.title()}'); skipping detail scrape to avoid redundant retries/timeouts`);
	log.warn(`Product ${productIndex + 1} ('${filterValue}') did not load within 10s (tab url: ${page2.url()}, title: '${await page2.title()}')`);
	await detailUtility.capture(this.testInfo, "detail-page-not-loaded", filterValue, String(productIndex));
}

try {
if (productPageLoaded) {
const title :string = await detailUtility.readText(detailPage.productNameIndividualPage.first());
	await detailUtility.scrollToIfPresent(detailPage.productKeyFeatureBlock);
const keyFeatures :string = await detailUtility.readRows(detailPage.productKeyFeatureBlock);
const about :string = await detailUtility.readText(detailPage.aboutThisItemBulletPoint);
	await detailUtility.scrollToIfPresent(detailPage.technicalDetailsBlockIndividualPage);
const techDetails :string = await detailUtility.readRows(detailPage.technicalDetailsBlockIndividualPage);

await this.genericUtility.addFieldIfPresent("title",title ,filterValue,productIndex,productResult);
await this.genericUtility.addFieldIfPresent("keyFeatures",keyFeatures ,filterValue,productIndex,productResult);
await this.genericUtility.addFieldIfPresent("about",about ,filterValue,productIndex,productResult);
await this.genericUtility.addFieldIfPresent("techDetails",techDetails ,filterValue,productIndex,productResult);
	console.log(`[${testName}] Extracted product ${productIndex} for '${filterValue}': title ${title.length}, key features ${keyFeatures.length}, about ${about.length}, tech details ${techDetails.length} characters`);
}

}catch(error) {
	console.warn(`[${testName}] Something went wrong while switching or extracting the details — ${error}`);
	log.error(`Extracting details of product ${productIndex + 1} ('${filterValue}') failed: ${error instanceof Error ? error.message.split("\n")[0] : String(error)}`);

}


try {
	if (productPageLoaded) {
	
		if (await detailPage.seeMoreProductDetailsButtonIndividualPageBy.isVisible()) {
			await detailUtility.smoothScrollToElement(detailPage.seeMoreProductDetailsButtonIndividualPageBy);
			await detailPage.seeMoreProductDetailsButtonIndividualPageBy.click();
		} else if (await detailPage.showMoreOnlyIndividualPage.isVisible()) {
			await detailUtility.smoothScrollToElement(detailPage.reportAnIssue);
		}
	}

} catch (error) {

	    if(await detailPage.showMoreOnlyIndividualPage.isVisible()) {
         await	detailUtility.smoothScrollToElement(detailPage.reportAnIssue);
	    }

	await detailUtility.capture(this.testInfo);
	console.warn(`[${testName}] Within catch block, cannot click 'see more details' hence taking a screenshot of the available button on the UI — ${error}`);
	console.log(`[${testName}] Within catch block for clicking 'see more details' within productNameListingPage loop`);

}finally {

    await page2.close();
	console.log(`[${testName}] Closed the product tab and going back to the product listing`);

}


 return  productResult;


 }


}export default SharedFilterFlows;
