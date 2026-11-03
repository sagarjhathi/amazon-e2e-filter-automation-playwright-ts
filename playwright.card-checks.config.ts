import { defineConfig } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';
import main from './playwright.config';

// The config of tests/CardFilterChecks.spec.ts. It starts from the main config (playwright.config.ts), so what must stay the same for both
// specs is not repeated here and cannot drift apart: the browsers (BROWSERS), the slow motion (SLOWMO), the headless setting, the screenshot
// on failure, the trace and video settings, the time limits of one action and one page load, and forbidOnly.
// Only what the card checks need differently is set below. The main config does not run this spec (see its testIgnore).
//
// Run:  npx playwright test -c playwright.card-checks.config.ts -g "Mobile: Discount" --headed      (or: npm run test:card-checks)

// GitHub Actions sets CI=true, as in the main config.
const isCI = !!process.env.CI;

// The same reporters as the main config, writing to folders of their own, so a run of this spec never overwrites a report of the main suite.
const reporter: PlaywrightTestConfig['reporter'] = isCI
  ? [['list'], ['blob', { outputDir: 'blob-report-card-checks' }], ['allure-playwright', { outputFolder: 'allure-results-card-checks' }]]
  : [['html', { open: 'never', outputFolder: 'playwright-report-card-checks' }], ['allure-playwright', { outputFolder: 'allure-results-card-checks' }]];

export default defineConfig({
  ...main,

  // Only this spec.
  testMatch: 'CardFilterChecks.spec.ts',
  testIgnore: [],

  // A test applies every option of a filter and opens up to 16 product pages, and slowMo adds to every action, so the 15 minutes of the
  // main suite are not enough. This is the limit for one test.
  timeout: 60 * 60_000,

  // A failed check says something about the data, and a retry would read the same pages again (more traffic to Amazon).
  retries: 0,

  // One browser at a time by default, so Amazon sees one slow visitor. PW_WORKERS=2 runs two (the workflow sets it).
  workers: Number(process.env.PW_WORKERS ?? 1),

  // The shard job limit is 240 minutes (see card-filter-checks.yml). Stopping a little before it lets the run end normally and still make a report,
  // as in the main config.
  globalTimeout: isCI ? 225 * 60_000 : 0,

  reporter,
  outputDir: 'test-results-card-checks',
});
