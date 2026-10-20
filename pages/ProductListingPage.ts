import { Locator, Page } from '@playwright/test';

class ProductListingPage {

    private page: Page;

    private productNameListingPage: Locator;
    private productPriceListingPage: Locator;
    private productDeliveryDayListingPage: Locator;

    public listOfFilterNameInLeftNav: Locator;

    public listProcessorSpeedOptionsBy: Locator;
    public listBrandsOptionsByNew: Locator;
    public listBrandsOptionsByOld: Locator;
    public listDisplaySizeOptionsBy: Locator;
    public listDisplayTypeOptionsBy: Locator;
    public listDiscountOptionsBy: Locator;
    public listBatteryLifeOptionsBy: Locator;
    public listStorageCapacityOptionsBy: Locator;
    public listDeliveryDayOptionsBy: Locator;
    public listMobilePhonePrimaryCameraResolutionOptionsBy: Locator;
    public listOperatingSystemVersionOptionsBy: Locator;

    public getItByTomorrowUnderDeliveryDayFilterBy: Locator;
    public getItInTwoDaysUnderDeliveryDayFilterBy: Locator;
    public eligibleForFreeDelivery: Locator;
    public getItTodayUnderDeliveryDayFilterBy: Locator;

    public seeMoreButtonUnderOperatingSystemFilter: Locator;
    public seeMoreButtonUnderBrandFilter: Locator;

    public listProductCardsBy: Locator;

    public priceMinSliderButton: Locator;
    public priceMaxSliderButton: Locator;
    public priceSliderSubmitButton: Locator;

    public maxPriceFilterApplied: Locator;
    public minPriceFilterApplied: Locator;

    public productPriceFromProductCards: Locator;
    public productNameListingPageBy: Locator;
    public productNameIndividualPage: Locator;

    public productKeyFeatureBlock: Locator;
    public aboutThisItemBulletPoint: Locator;
    public technicalDetailsBlockIndividualPage: Locator;

    public seeMoreProductDetailsButtonIndividualPageBy: Locator;

    public clearButtonBy: Locator;

    public seeMoreButtonIndividualPage: Locator;

    public reportAnIssue: Locator;

    public showMoreOnlyIndividualPage: Locator;

    public resetPriceRangeProductPage: Locator;

    public appliedProcessorSpeedOptions: Locator;
    public appliedStorageCapacityOptions: Locator;
    public appliedBrandsOptions: Locator;
    public appliedBatteryLifeOptions: Locator;
    public appliedDisplaySizeOptions: Locator;
    public appliedDisplayTypeOptions: Locator;
    public appliedOperatingSystemOptions: Locator;
    public appliedMobilePhonePrimaryCameraResolutionOptions: Locator;
    public appliedDiscountOptions: Locator;
    public appliedOperatingSystemVersionOptions: Locator;
    public appliedBrandsOldOptions: Locator;
    public appliedScreenSizeOptions: Locator;


    constructor(page: Page) {

        this.page = page;

        this.productNameListingPage =
            page.locator("//div[@data-cy='title-recipe']");

        this.productPriceListingPage =
            page.locator("//span[@class='a-price-whole']");

        this.productDeliveryDayListingPage =
            page.locator("//div[@data-cy='delivery-recipe']");

        this.listOfFilterNameInLeftNav =
            page.locator("//div[@id='s-refinements']//span[@class='a-size-base a-color-base puis-bold-weight-text']");


        this.listProcessorSpeedOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Processor Speed']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        // this.listBrandsOptionsByNew =
        //     page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Brands']/parent::div/following-sibling::div[@class='a-section a-spacing-medium sf-navigation-searchable-content']//span[@class='a-size-base a-color-base']");

            this.listBrandsOptionsByNew =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Brands']/parent::div/following-sibling ::ul//span[@class='a-size-base a-color-base']");


        this.listBrandsOptionsByOld =
            page.locator("//ul[@id='filter-p_123']//span[@class='a-size-base a-color-base']");


        this.listDisplaySizeOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Screen Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listDisplayTypeOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Type']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listDiscountOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Discount']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listBatteryLifeOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Life']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listStorageCapacityOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Storage Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listDeliveryDayOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Delivery Day']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listMobilePhonePrimaryCameraResolutionOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Mobile Phone Primary Camera Resolution']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listOperatingSystemVersionOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.getItByTomorrowUnderDeliveryDayFilterBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Delivery Day']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='Get It by Tomorrow']");


        this.getItInTwoDaysUnderDeliveryDayFilterBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Delivery Day']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='Get It in 2 Days']");


        this.eligibleForFreeDelivery =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Eligible for Free Delivery']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='Free Shipping']");


        this.getItTodayUnderDeliveryDayFilterBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Delivery Day']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='Get It Today']");


        this.seeMoreButtonUnderOperatingSystemFilter =
            page.locator("//a[@aria-label='See more, Operating System']");


        this.seeMoreButtonUnderBrandFilter =
            page.locator("//a[@aria-label='See more, Brands']");


        this.listProductCardsBy =
            page.locator("//div[@class='a-section a-spacing-small a-spacing-top-small']");


        this.priceMinSliderButton =
            page.locator("#p_36/range-slider_slider-item_lower-bound-slider");


        this.priceMaxSliderButton =
            page.locator("#p_36/range-slider_slider-item_upper-bound-slider");


        this.priceSliderSubmitButton =
            page.locator("//div[@class='a-section sf-submit-range-button']");


        this.maxPriceFilterApplied =
            page.locator("//label[@for='p_36/range-slider_slider-item_upper-bound-slider']");


        this.minPriceFilterApplied =
            page.locator("//label[@for='p_36/range-slider_slider-item_lower-bound-slider']");


        this.productPriceFromProductCards =
            page.locator("//span[@class='a-price-whole']");


        this.productNameListingPageBy =
            page.locator("//div[@data-cy='title-recipe']");


        this.productNameIndividualPage =
            page.locator("//span[@id='productTitle']");


        // this.productKeyFeatureBlock =
        //     page.locator("//div[@class='a-section a-spacing-small a-spacing-top-small']");

        this.productKeyFeatureBlock =
            page.locator("//div[@id='productOverview_feature_div']");

           

        this.aboutThisItemBulletPoint =
            page.locator("//div[@id='feature-bullets']");


        this.technicalDetailsBlockIndividualPage =
            page.locator("//div[@id='prodDetails']");


        this.seeMoreProductDetailsButtonIndividualPageBy =
            page.locator("//a[@id='seeMoreDetailsLink']");


        this.clearButtonBy =
            page.locator("//span[@class='a-size-base a-color-base' and text()='Clear']");


        this.seeMoreButtonIndividualPage =
            page.locator("//span[@class='a-expander-prompt' and text()='Show More']");


        // this.reportAnIssue =
        //     page.locator("//div[@id='CardInstanceCnrYlcUauBaBV5oi0X1UVw']");

            this.reportAnIssue =
            page.locator("//a[@class='a-link-normal _tell-amazon-desktop_style_tell_amazon_link__1KW5z']");

            

        this.showMoreOnlyIndividualPage =
            page.locator("//span[@class='a-expander-prompt' and text()='Show More']");


        this.resetPriceRangeProductPage =
            page.locator("//span[@class='a-size-base a-color-link' and text()='Reset price range']");

        this.appliedProcessorSpeedOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Processor Speed']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedStorageCapacityOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Storage Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedBrandsOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Brands']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedBatteryLifeOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Life']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedDisplaySizeOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedDisplayTypeOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Type']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedOperatingSystemOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedMobilePhonePrimaryCameraResolutionOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Mobile Phone Primary Camera Resolution']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedDiscountOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Discount']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedOperatingSystemVersionOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System Version']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );

        this.appliedBrandsOldOptions = page.locator(
            "//ul[@id='filter-p_123']//span[@class='a-size-base a-color-base']"
        );

        this.appliedScreenSizeOptions = page.locator(
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Screen Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
        );
    }



    public getFilterByTypeAndName(filterName: string, filterOption: string): Locator {
  console.log(`Within getFilterByTypeAndName method`);

  switch (filterName.toLowerCase()) {
    case "processorspeed":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Processor Speed']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "storagecapacity":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Storage Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "brands":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Brands']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "batterylife":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Life']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "displaysize":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "displaytype":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Type']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "operatingsystem":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "mobilephoneprimarycameraresolution":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Mobile Phone Primary Camera Resolution']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "discount":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Discount']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "operating system version":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System Version']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "brandsold":
      return this.page.locator(`//ul[@id='filter-p_123']//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "screensize":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Screen Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    default:
      throw new Error(`Unknown filter type: ${filterName}`);
  }
}


    public getAppliedFilterByTypeAndName(filterName: string, filterOption: string): Locator {
  console.log(`Within getAppliedFilterByTypeAndName method`);

  switch (filterName.toLowerCase()) {
    case "processorspeed":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Processor Speed']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "storagecapacity":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Storage Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "brands":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Brands']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "batterylife":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Life']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "displaysize":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "displaytype":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Type']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "operatingsystem":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "mobilephoneprimarycameraresolution":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Mobile Phone Primary Camera Resolution']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "discount":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Discount']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "operating system version":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System Version']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "brandsold":
      return this.page.locator(`//ul[@id='filter-p_123']//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "screensize":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Screen Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    default:
      throw new Error(`Unknown filter type: ${filterName}`);
  }
}


    public getMoreButtonByFilterTypeAndName(
        filterName: string
    ): Locator {

        switch (filterName.toLowerCase()) {

            case "brands":
                return this.seeMoreButtonUnderBrandFilter;

            case "operatingsystem":
                return this.seeMoreButtonUnderOperatingSystemFilter;

            default:
                throw new Error(`Unknown filter type: ${filterName}`);
        }
    }



    public getDeliveryDayFilterByName(
        filterName: string
    ): string {

        switch (filterName) {

            case "verifyingGetItByTomorrowFilterFunctionality":
                return "Get It by Tomorrow";

            case "verifyingGetItIn2DaysFilterFunctionality":
                return "Get It in 2 Days";

            case "verifyingGetItByTodayFilterFunctionality":
                return "Get It By Today";

            case "verifyingFreeDeliveryFilterFunctionality":
                return "Eligible for Free Delivery";

            default:
                throw new Error(`Unknown filter type: ${filterName}`);
        }
    }



    public getProductByIndex(index: number): Locator {
        return this.productNameListingPageBy.nth(index);
    }




// The names of the filters in the left navigation (Brands, Storage Capacity, ...).
// Waits up to timeoutMs for the first one to appear, so a page that is still loading is not mistaken for
// a page that has no filters. Returns an empty list if none appears in time.
public async getFilterNames(timeoutMs: number = 10_000): Promise<string[]> {
  try {
    await this.listOfFilterNameInLeftNav.first().waitFor({ state: 'visible', timeout: timeoutMs });
  } catch {
    return [];
  }

  const names: string[] = await this.listOfFilterNameInLeftNav.allInnerTexts();
  return names.map((name) => name.trim()).filter((name) => name.length > 0);
}

// Same as getFilterNames, but keeps re-reading the list until wantedName appears or timeoutMs is over.
// The left navigation fills in gradually, so a single read can catch a half-loaded list and make an
// existing filter look missing. Returns the last list read.
public async getFilterNamesWaitingFor(wantedName: string, timeoutMs: number = 10_000): Promise<string[]> {
  const deadline: number = Date.now() + timeoutMs;
  const wanted: string = wantedName.trim().toLowerCase();

  let names: string[];
  do {
    names = await this.getFilterNames(timeoutMs);
    if (names.some((name) => name.toLowerCase() === wanted)) {
      break;
    }
    await this.page.waitForTimeout(500);
  } while (Date.now() < deadline);

  return names;
}




}

export default ProductListingPage;