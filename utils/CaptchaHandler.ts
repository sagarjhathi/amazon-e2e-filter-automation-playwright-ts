import { Page ,Locator} from '@playwright/test';
import AmazonLandingPage from '../pages/AmazonLandingPage';
import Logger from './Logger';

const log = Logger.for('CaptchaHandler');

class CaptchaHandler {

    private page: Page;
    
    
    constructor(page: Page) {
        this.page = page;
    }

    public async isCaptchaPage(page:Page): Promise<boolean> {
        const landingPage= new AmazonLandingPage(page);
        try {
            const bodyText = (await this.page.locator('body').innerText())
                .toLowerCase();

            if (
                bodyText.includes(
                    'click the button below to continue shopping'
                ) ||
                this.page.url().includes('/errors/validatecaptcha')
            ) {
                return true;
            }

            
            const buttons :Locator[]=await landingPage.continueShoppingButtonCaptcha.all();
            return buttons.length>0;
        } catch (e) {
            return false;
        }
    }







  public async handleCaptcha(page:Page): Promise<boolean> {

        const retries = 3;
        let backoff = 1000;

        for (let i = 1; i <= retries; i++) {

            // If captcha is already gone, we're done
            if (!await this.isCaptchaPage(page)) {
                return true;
            }

            console.log(`Captcha detected. Attempt ${i}`);
            log.warn(`"Continue shopping" / captcha page detected at ${this.page.url()}; attempt ${i} of ${retries}`);

            try {

                const buttons: Locator = this.page.getByText(
                    'Continue shopping',
                    { exact: true }
                );

                const buttonCount = await buttons.count();

                if (buttonCount > 0) {

                    const button = buttons.first();

                    await button.scrollIntoViewIfNeeded();

                    await button.click();

                } else {

                    // Button not found - refresh as fallback
                    await this.page.reload();
                }

                // Wait for navigation/page activity to settle
                await this.page.waitForLoadState('domcontentloaded');

                // Intentional retry backoff
                await this.page.waitForTimeout(backoff);

                backoff = Math.min(backoff * 2, 5000);

            } catch (e) {

                console.log(
                    `Captcha handling attempt failed: ${e}`
                );
                log.error(`Captcha handling attempt ${i} failed: ${e instanceof Error ? e.message.split('\n')[0] : String(e)}`);
            }
        }

        // Check one final time after the last attempt
        if (!await this.isCaptchaPage(page)) {
            log.info(`Captcha page cleared after ${retries} attempt(s)`);
            return true;
        }

        log.error(`Captcha page still showing after ${retries} attempts at ${this.page.url()}`);
        return false;
    }













}

export default CaptchaHandler;