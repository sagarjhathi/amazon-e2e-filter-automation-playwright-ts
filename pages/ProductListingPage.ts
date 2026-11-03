import { Locator, Page } from '@playwright/test';

// What one product card on the listing prints. A value the card does not show is "".
export type Card = { asin: string; title: string; price: string; rating: string; discount: string; availability: string; delivery: string; mrp: string; cardText: string };

// "Currently unavailable" means no offer at all, so there is no seller to read. "No featured offers available" is not this: offers exist.
export const isUnavailable = (card: Card): boolean => /currently unavailable/i.test(card.availability);

// No main offer at all: "Currently unavailable", or "No featured offers available" (other offers exist, but none is the main one).
// Such a product has no buy box, so its page may lack the cards that sit next to it (Pay on Delivery, Top Brand).
export const hasNoMainOffer = (card: Card): boolean => card.availability !== "";

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
    public listBatteryCapacityOptionsBy: Locator;
    public listBatteryPowerOptionsBy: Locator;
    public listBatteryChargeTimeOptionsBy: Locator;
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
    public listOrganicProductCardsBy: Locator;
    public listOrganicCardTitlesBy: Locator;

    public priceMinSliderButton: Locator;
    public priceMaxSliderButton: Locator;
    public pricePresetLinksBy: Locator;
    public priceClearLinkBy: Locator;
    public ratingIndividualPage: Locator;
    public productTitleIndividualPage: Locator;
    public priceSliderSubmitButton: Locator;

    public maxPriceFilterApplied: Locator;
    public minPriceFilterApplied: Locator;

    public productPriceFromProductCards: Locator;
    public productNameListingPageBy: Locator;
    public productNameIndividualPage: Locator;
    public sellerNameIndividualPage: Locator;
    public seeAllBuyingOptionsIndividualPage: Locator;
    public otherOffersLinkIndividualPage: Locator;
    public offerSellersIndividualPage: Locator;
    public topBrandBadgeIndividualPage: Locator;
    public payOnDeliveryBadgeIndividualPage: Locator;

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


        this.listBatteryCapacityOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");

        this.listBatteryPowerOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Power']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");

        this.listBatteryChargeTimeOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Charge Time']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");

        this.listDiscountOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Discount']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listBatteryLifeOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Life']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listStorageCapacityOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Storage Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listDeliveryDayOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Delivery Day']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


        this.listMobilePhonePrimaryCameraResolutionOptionsBy =
            page.locator("//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Rear Camera Photo Sensor Resolution']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']");


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

        // Every product card of the results, without the sponsored ones (sponsored cards ignore filters).
        this.listOrganicProductCardsBy =
            page.locator('div[data-component-type="s-search-result"]:not(:has(a[href*="sspa"]))');

        // The title inside each of those cards.
        this.listOrganicCardTitlesBy =
            this.getTitleInCard(this.listOrganicProductCardsBy);


        // The two price sliders. Their ids hold a "/", so they are matched as an attribute. aria-valuetext holds the price, "₹26,000".
        this.priceMinSliderButton =
            page.locator("[id='p_36/range-slider_slider-item_lower-bound-slider']");


        this.priceMaxSliderButton =
            page.locator("[id='p_36/range-slider_slider-item_upper-bound-slider']");


        // The price ranges Amazon offers for this search ("₹20,000 - ₹25,000"). The link inside the list item applies the range.
        this.pricePresetLinksBy =
            page.locator("li[id^='p_36/dynamic-picker'] a");

        // The "Clear" link that shows above the price ranges once one is applied. Only the one inside the price section counts.
        this.priceClearLinkBy =
            page.locator("#priceRefinements").getByRole("link", { name: "Clear", exact: true });

        // On a product page: the product's title. A block page or a page that has not loaded has none.
        this.productTitleIndividualPage =
            page.locator("#productTitle");

        // On a product page: the star rating, its title reads "4.2 out of 5 stars".
        this.ratingIndividualPage =
            page.locator("#acrPopover");


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

        // The seller of the main offer, in the buy box ("Sold by" or "Shipper / Seller").
        this.sellerNameIndividualPage =
            page.locator("#sellerProfileTriggerId");

        // Some products show no seller in the buy box. The sellers are then in the "all offers" panel (found with codegen).
        this.seeAllBuyingOptionsIndividualPage =
            page.getByRole("link", { name: "See All Buying Options" });

        // On a page that has a buy box seller, the link to the other offers reads "New (19) from ₹13,355...".
        this.otherOffersLinkIndividualPage =
            page.locator("#aod-ingress-link");

        // The seller name of each offer in that panel.
        this.offerSellersIndividualPage =
            page.locator("#aod-offer-soldBy a");

        // The icon cards under the price on a product page. Each is a div with its own id; its text is the label.
        this.topBrandBadgeIndividualPage =
            page.locator("#TOP_BRAND");
        this.payOnDeliveryBadgeIndividualPage =
            page.locator("#PAY_ON_DELIVERY");


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
            "//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Rear Camera Photo Sensor Resolution']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold']"
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



    // All the options listed under a filter heading in the left navigation, for example "HDD Size".
    public getFilterOptionsByHeading(heading: string): Locator {
        return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='${heading}']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base']`);
    }


    // A filter in the left navigation is a group named by its heading ("Brands", "Discount", "Customer Reviews", ...).
    // Its options are the links in the group. Once an option is applied the group also holds a "Clear" link, which is not an option.
    public getFilterGroupByHeading(heading: string): Locator {
        return this.page.getByRole("group", { name: heading, exact: true });
    }

    public getFilterLinksByHeading(heading: string): Locator {
        return this.getFilterGroupByHeading(heading).getByRole("link").filter({ hasNotText: /^Clear$/ });
    }

    public getClearLinkByHeading(heading: string): Locator {
        return this.getFilterGroupByHeading(heading).getByRole("link", { name: "Clear", exact: true });
    }


    public getFilterByTypeAndName(filterName: string, filterOption: string): Locator {
  // console.log(`Within getFilterByTypeAndName method`);  (no information, and it printed on every locator build)

  switch (filterName.toLowerCase()) {
    case "processorspeed":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Processor Speed']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "storagecapacity":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Storage Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "brands":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Brands']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "batterycapacity":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);
    case "batterypower":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Power']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);
    case "batterychargetime":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Charge Time']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);
    case "batterylife":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Life']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "displaysize":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "displaytype":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Type']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "operatingsystem":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "mobilephoneprimarycameraresolution":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Rear Camera Photo Sensor Resolution']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "discount":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Discount']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "operating system version":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System Version']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "brandsold":
      return this.page.locator(`//ul[@id='filter-p_123']//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "screensize":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Screen Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    default:
      // Any other name is taken as the filter heading itself, as shown in the left navigation (for example "HDD Size").
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='${filterName}']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);
  }
}


    public getAppliedFilterByTypeAndName(filterName: string, filterOption: string): Locator {
  // console.log(`Within getAppliedFilterByTypeAndName method`);  (no information, and it printed on every locator build)

  switch (filterName.toLowerCase()) {
    case "processorspeed":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Processor Speed']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "storagecapacity":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Storage Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "brands":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Brands']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "batterycapacity":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Capacity']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);
    case "batterypower":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Power']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);
    case "batterychargetime":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Charge Time']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);
    case "batterylife":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Battery Life']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "displaysize":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "displaytype":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Display Type']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "operatingsystem":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "mobilephoneprimarycameraresolution":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Rear Camera Photo Sensor Resolution']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "discount":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Discount']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "operating system version":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Operating System Version']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    case "brandsold":
      return this.page.locator(`//ul[@id='filter-p_123']//span[@class='a-size-base a-color-base' and text()='${filterOption}']`);

    case "screensize":
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='Screen Size']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);

    default:
      // Same as above: the name is the heading itself.
      return this.page.locator(`//span[@class='a-size-base a-color-base puis-bold-weight-text' and text()='${filterName}']/parent::div/following-sibling::ul//span[@class='a-size-base a-color-base a-text-bold' and text()='${filterOption}']`);
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

    // The heading of the filter group that has this option. For options whose heading changes with the search,
    // such as "Top Brands", which sits under "Cell Phone Brands" for a mobile search.
    public getHeadingOfOption(option: string): Locator {
        return this.page.locator(`//div[@id='s-refinements']//span[contains(@class,'puis-bold-weight-text')][parent::div/following-sibling::ul[1]//*[normalize-space(text())='${option}']]`).first();
    }

    // The "See more" button under a filter heading, for example "See more, Seller" (found by codegen as a button, not a link).
    // Only there while the list is collapsed.
    public getSeeMoreButtonByHeading(heading: string): Locator {
        return this.page.getByRole("button", { name: `See more, ${heading}` });
    }


    // ---- Inside one product card (pass a card from listOrganicProductCardsBy) ----

    public getTitleInCard(card: Locator): Locator {
        return card.locator("h2");
    }

    public getPriceInCard(card: Locator): Locator {
        return card.locator(".a-price .a-offscreen");
    }

    public getRatingInCard(card: Locator): Locator {
        return card.locator(".a-icon-alt");
    }

    // The printed discount, for example "(44% off)". Other "% off" texts on a card (bank offers, coupons) have no brackets.
    public getDiscountInCard(card: Locator): Locator {
        return card.getByText(/\(\d+% off\)/);
    }

    // Amazon's own words when a product cannot be bought from the listing: "Currently unavailable" (no offer at all)
    // or "No featured offers available" (offers exist, none is the main one).
    public getAvailabilityInCard(card: Locator): Locator {
        return card.getByText(/currently unavailable|no featured offers available/i);
    }

    // The struck-through M.R.P. of a card.
    public getMrpInCard(card: Locator): Locator {
        return card.locator(".a-price.a-text-price .a-offscreen");
    }

    // The delivery line of a card, for example "FREE delivery Thu, 12 Nov".
    public getDeliveryInCard(card: Locator): Locator {
        return card.locator('[data-cy="delivery-recipe"]');
    }

    // Reads every organic card on the listing as title, price, rating, discount, availability, delivery and the full card text.
    public async readCards(): Promise<Card[]> {
        const cards: Locator = this.listOrganicProductCardsBy;
        const cardCount: number = await cards.count();
        const result: Card[] = [];
        for (let position = 0; position < cardCount; position++) {
            const card: Locator = cards.nth(position);
            result.push({
                asin: (await card.getAttribute("data-asin")) ?? "",
                title: await this.textOf(this.getTitleInCard(card)),
                price: await this.textOf(this.getPriceInCard(card)),
                rating: await this.textOf(this.getRatingInCard(card)),
                discount: await this.textOf(this.getDiscountInCard(card)),
                availability: await this.textOf(this.getAvailabilityInCard(card)),
                delivery: await this.textOf(this.getDeliveryInCard(card)),
                mrp: await this.textOf(this.getMrpInCard(card)),
                cardText: await this.textOf(card),
            });
        }
        return result;
    }

    // The text of the first element the locator finds, on one line, or "" when it finds none. Does not wait.
    public async textOf(locator: Locator): Promise<string> {
        const [text = ""] = await locator.allTextContents();
        return text.replace(/\s+/g, " ").trim();
    }

    // The selected (bold) options under one filter heading of the left navigation.
    public getSelectedOptionsUnderHeading(heading: Locator): Locator {
        return heading.locator("xpath=parent::div/following-sibling::ul//span[contains(@class,'a-text-bold')]");
    }

    // The filters applied right now, read from the left navigation: each heading with its selected option(s).
    public async readAppliedFilters(): Promise<{ heading: string; options: string[] }[]> {
        const headings: Locator = this.listOfFilterNameInLeftNav;
        const headingCount: number = await headings.count();
        const applied: { heading: string; options: string[] }[] = [];
        for (let position = 0; position < headingCount; position++) {
            const heading: Locator = headings.nth(position);
            const options: string[] = (await this.getSelectedOptionsUnderHeading(heading).allInnerTexts()).map((option) => option.replace(/\s+/g, " ").trim());
            if (options.length > 0) {
                applied.push({ heading: await this.textOf(heading), options });
            }
        }
        return applied;
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