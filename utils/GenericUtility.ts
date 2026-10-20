import { Page ,Locator, TestInfo} from '@playwright/test';
import ProductListingPage from '../pages/ProductListingPage';
import CaptchaHandler from './CaptchaHandler';


class GenericUtility{


  private page:Page;
  private testInfo:TestInfo;
  private productListingPage: ProductListingPage;

 constructor(page: Page, testInfo: TestInfo) {
  this.page = page;
  this.testInfo = testInfo;
  this.productListingPage = new ProductListingPage(page);
}


    


  
/**
 * Gets the page ready for the next action. Waits for the page to settle, then clears whichever blocker is showing:
 * the "Continue shopping" page (via CaptchaHandler) or Amazon's "Service Unavailable" / "rush hour" (503) page.
 * A 503 often outlasts one reload, so it reloads up to MAX_503_RELOADS times with a growing pause, and each round
 * checks both blockers again because a reload can land on "Continue shopping".
 * Returns true when the page is clear, false when a blocker is still showing after all tries. Never throws.
 */
async clearBlockers(): Promise<boolean> {
  const MAX_503_RELOADS = 5;
  const captchaHandler = new CaptchaHandler(this.page);
  let pause = 2000; // starts short, doubles each reload, so a brief outage is not waited out for long

  for (let reload = 0; ; reload++) {
    // A click or goto just before this call may still be navigating; checking the old page would miss a blocker.
    await this.page.waitForLoadState('domcontentloaded').catch(() => {});

    // Only call handleCaptcha when the page really is the "Continue shopping" page; it retries and reloads, which a normal page must not get.
    const captchaCleared: boolean = !await captchaHandler.isCaptchaPage(this.page) || await captchaHandler.handleCaptcha(this.page);

    // Title and visible text only: the page source also holds script text that can mention these words on a healthy page.
    let is503 = false;
    try {
      const title: string = (await this.page.title()).toLowerCase();
      const bodyText: string = (await this.page.locator("body").innerText({ timeout: 2000 })).toLowerCase();
      // "oops" is the title of the rush-hour page; "503" is the title of the plain error page.
      is503 = title.includes("503") || title.includes("service unavailable") || title.includes("oops") ||
              bodyText.includes("service unavailable") || bodyText.includes("it's rush hour") ||
              bodyText.includes("something went wrong on our end");
    } catch (error) {
      // Page still navigating or closed: treat as not a 503 page rather than failing the test.
      console.warn(`[${this.testInfo.title}] Could not check for the service unavailable page — ${error}`);
    }

    // No 503 on this page, and the captcha check above already ran on it, so the page is ready.
    if (!is503) {
      return captchaCleared;
    }
    // Give up instead of looping forever; the caller then fails or skips with the page URL and title in the message.
    if (reload === MAX_503_RELOADS) {
      console.warn(`[${this.testInfo.title}] Service unavailable (503) page still showing after ${MAX_503_RELOADS} reloads at ${this.page.url()}`);
      return false;
    }

    console.warn(`[${this.testInfo.title}] Service unavailable (503) page detected at ${this.page.url()}; reloading in ${pause} ms (${reload + 1}/${MAX_503_RELOADS})`);
    // Pause before reloading: an immediate reload usually hits the same overloaded server and gets the same 503.
    await this.page.waitForTimeout(pause);
    pause = Math.min(pause * 2, 10_000);
    await this.page.reload().catch((error) => console.warn(`[${this.testInfo.title}] Reload after the 503 page failed — ${error}`));
  }
}

/**
 * Skips the test when the filter is not in the left navigation. The skip reason lists the filters the page did show,
 * plus its URL and title, so a skip can be told apart: a different heading, a page that did not load, or a blocked page.
 */
async skipIfFilterMissing(filterName: string): Promise<void> {
  await this.clearBlockers();
  const found: string[] = await this.productListingPage.getFilterNamesWaitingFor(filterName);

  // Case-insensitive so a heading like "Brands" still matches "brands"; a differently worded heading is a real mismatch and is skipped.
  const isPresent: boolean = found.some((name) => name.toLowerCase() === filterName.trim().toLowerCase());
  if (isPresent) {
    return;
  }

  // An empty list means the left navigation never rendered (slow load or a blocked page), not that Amazon has no filters.
  const shown: string = found.length > 0 ? found.join(', ') : 'no filters (the left navigation did not appear in time)';
  const title: string = await this.page.title().catch(() => '');

  const reason = `Filter '${filterName}' not found in the left navigation; nothing was verified. Page showed: ${shown}. URL: ${this.page.url()}. Title: '${title}'.`;
  console.warn(`[${this.testInfo.title}] ${reason}`);
  // Skip rather than fail: the filter does not exist for this category, so there is nothing to verify.
  this.testInfo.skip(true, reason);
}


     async scrollByPixel(x:number,  y:number) {
    	
		await this.page.mouse.wheel(x,y);
        
    }



    
async smoothScrollToElement(locator :Locator) {

await locator.evaluate((element) => {
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
});        
    
    }    



async openAndGetNewTab(triggerAction: () => Promise<void>, timeoutMs?: number): Promise<Page> {
  const context = this.page.context();
  const [newPage] = await Promise.all([
    context.waitForEvent('page', { timeout: timeoutMs }),
    triggerAction(),
  ]);
  return newPage;
}   


// Visible text of whatever the locator matches, or "" if nothing matches.
// Unlike innerText(), allInnerTexts() does not wait for the element and does not fail on several matches.
async readText(locator: Locator): Promise<string> {
  return (await locator.allInnerTexts()).join("\n").trim();
}

// Every table row inside the container as one line, e.g. "Battery Capacity 5000 milliamp_hours".
// Amazon hides most spec rows behind "See more product details". Visible text skips hidden rows,
// textContent does not, so this still reads them. Returns "" if the container is not on the page.
async readRows(container: Locator): Promise<string> {
  const rows = await container.locator("tr").allTextContents();
  return rows
    .map((row) => row.replace(/\s+/g, " ").trim())
    .filter((row) => row.length > 0)
    .join("\n");
}

// Scrolls the element into view if it is on the page. Waits at most 2 s and never throws.
async scrollToIfPresent(locator: Locator): Promise<void> {
  try {
    await locator.first().scrollIntoViewIfNeeded({ timeout: 2000 });
  } catch (error) {
    // not on the page, so there is nothing to scroll to
  }
}


async setSliderValue(locator: Locator, value: number): Promise<void> {
  await locator.evaluate((element, val) => {
    (element as HTMLInputElement).value = val.toString();
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }, value);
}
	


 static extractPriceOrFail(input: string | null): string {
    if (input === null) {
      throw new Error("Cannot extract price: input is null");
    }

    let cleaned = input.replace(/[^0-9.]/g, "");

    // Keep only the first decimal point in case stray "." characters slipped through.
    const firstDot = cleaned.indexOf(".");
    if (firstDot !== -1) {
      cleaned =
        cleaned.substring(0, firstDot + 1) +
        cleaned.substring(firstDot + 1).replace(/\./g, "");
    }

    if (cleaned.length === 0 || cleaned === ".") {
      throw new Error(`Cannot extract price: no digits found in input '${input}'`);
    }

    return cleaned;
  }



 async clickMoreButtonIfPresent(moreButton: Locator): Promise<void> {
  try {
    if (await moreButton.isVisible()) {
      await this.smoothScrollToElement(moreButton);
      await moreButton.click();
    }
    // else: button isn't present — nothing to do, this is a normal, expected outcome
  } catch (error) {
    console.warn(`Unexpected error while clicking the 'more' button: ${error}`);
  }
}

  async openClickOnNewPage(element: Locator): Promise<boolean> {
  const context = this.page.context();
  const beforeCount = context.pages().length;

  try {
    await this.page.keyboard.down('Control');
    await element.click();
    await this.page.keyboard.up('Control');

    if (context.pages().length > beforeCount) {
      return true;
    }
    return false;

  } catch (error) {
    try {
      await element.click();
      if (context.pages().length > beforeCount) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}




  addFieldIfPresent(key :string,value :string, filterValue :string, productIndex :number, result: Map<string, string | number | boolean | null | string[]> ):void {


	 if (value.trim().length>0) {
		 result.set(key, value);
	 } else {
		 result.set(key, null);  
    console.warn(
  `Failed to fetch '${key}' for filter value -> ${filterValue} and index -> ${productIndex}`
);
	 }  

}





/*
 * Uses the built-in String() function, which already handles 
 * converting every type to a string correctly, so narrowing each type
 * by hand would only re-implement what String() already does.
 */
  safeLower(value: unknown): string {
  if (value == null) return "";
  return String(value).toLowerCase();
}





	containsCheck(toBeChecked: string, toBeCheckedIn: string): boolean {

  const list: string[] = toBeChecked.split(/\s+/);

  let bool: boolean = true;
  for (let i = 0; i < list.length; i++) {
    const str: string = list[i];

    if (toBeCheckedIn.includes(str)) {
      console.warn(`Text present in containsCheck method, text checked is "${str}"`);
    } else {
      bool = false;
      console.warn(`Text NOT present in containsCheck method, text checked is "${str}"`);
    }
  }

  return bool;
}



async safeClickBooleanWithScreenShot(locatorr: Locator, filterName: string, filterOption: string): Promise<boolean> {
  console.log(`Within safeClickBooleanWithScreenShot method`);

  let attempts: number = 0;
  while (attempts < 3) {
    try {
      await this.smoothScrollToElement(this.productListingPage.getFilterByTypeAndName(filterName, filterOption));

      try {
      //  await this.clickMoreButtonIfPresent(this.productListingPage.getMoreButtonByFilterTypeAndName(filterName));
      } catch (error) {
        console.log(`Could not find more button`);
      }

      await locatorr.click();

      console.log(`Clicked the element using safe click, element is ${locatorr}`);
      await this.capture(this.testInfo, filterOption);

      return true; // success
    } catch (error) {
      console.error(`Actual error: ${error}`);
      console.log(`Retrying click for: ${locatorr} - Attempt ${attempts + 1}`);
      attempts++;

      try {
        await this.page.reload();
        await this.clearBlockers();

        await this.smoothScrollToElement(this.productListingPage.getFilterByTypeAndName(filterName, filterOption));

        try {
          await this.clickMoreButtonIfPresent(this.productListingPage.getMoreButtonByFilterTypeAndName(filterName));
        } catch (error) {
          console.log(`Could not find more button`);
        }

        await this.capture(this.testInfo, filterOption, "failed filter apply screenshot-");

        console.log(`Refreshing the page, while trying to click -> ${locatorr}`);
      } catch (error) {
        console.error(`Actual error: ${error}`);
      }
    }
  }

  console.log(`Skipping click action: Element not clickable after ${attempts} attempts - ${locatorr}`);
  return false;
}



/**
 * Moves the mouse along a few random points and pauses briefly, so activity between actions
 * looks less mechanical. Pass a locator to end the movement over that element.
 */
async moveMouseLikeHuman(target?: Locator): Promise<void> {
  try {
    const viewport = this.page.viewportSize() ?? { width: 1280, height: 720 };
    const randomBetween = (min: number, max: number): number => min + Math.random() * (max - min);

    const waypoints: number = Math.floor(randomBetween(2, 5));
    for (let i = 0; i < waypoints; i++) {
      await this.page.mouse.move(
        randomBetween(0, viewport.width),
        randomBetween(0, viewport.height),
        { steps: Math.floor(randomBetween(8, 25)) }
      );
    }

    if (target) {
      const box = await target.boundingBox();
      if (box) {
        await this.page.mouse.move(
          box.x + box.width * randomBetween(0.3, 0.7),
          box.y + box.height * randomBetween(0.3, 0.7),
          { steps: Math.floor(randomBetween(10, 30)) }
        );
      }
    }

    await this.page.waitForTimeout(randomBetween(200, 800));
  } catch (error) {
    // Cosmetic only — never let it fail a test
    console.warn(`Mouse movement skipped: ${error}`);
  }
}



        async capture(testInfo: TestInfo, ...names: string[]): Promise<string> {
  try {
    const inputNames = names.join("_");
    const fileName = `${inputNames || "screenshot"}_${Date.now()}.png`;
    const filePath = testInfo.outputPath(fileName);

    await this.page.screenshot({ path: filePath });

    await testInfo.attach(inputNames || "screenshot", {
      path: filePath,
      contentType: "image/png",
    });
    
    return filePath;
  } catch (error) {
    console.error(`Screenshot capture failed: ${error}`);
    return "";
  }
}

}
 export default GenericUtility;