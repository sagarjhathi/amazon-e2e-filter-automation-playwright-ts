import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestConfig, PlaywrightWorkerOptions, Project } from '@playwright/test';

// GitHub Actions sets CI=true. On your machine it is not set, so the local settings are used.
// To try the CI settings locally:  CI=true npx playwright test   (PowerShell: $env:CI = "true"; npx playwright test)
const isCI = !!process.env.CI;


// ---------------------------------------------------------------------------------------------
// SETTINGS THAT DIFFER: LOCAL RUN vs CI RUN
// Both objects have the same keys, so you can compare them line by line.
// Anything not listed here is the same for both and is set once in the config below.
// ---------------------------------------------------------------------------------------------

type RunSettings = {
  forbidOnly: boolean;                          // fail the run if a test.only was left in the code
  globalTimeout: number;                        // time limit for the whole run, in ms (0 = no limit)
  reporter: PlaywrightTestConfig['reporter'];   // what is written when the run finishes
  trace: PlaywrightWorkerOptions['trace'];      // Playwright trace of a test (large files)
  video: PlaywrightWorkerOptions['video'];      // video recording of a test
};

const ALLURE = ['allure-playwright', { outputFolder: 'allure-results' }] as const;

const local: RunSettings = {
  forbidOnly: false,
  globalTimeout: 0,
  // An HTML report that does not open by itself (open it with `npm run report`), and Allure results.
  reporter: [['html', { open: 'never' }], ALLURE],
  // Keep the full trace of failures and retries, and a video of every test, to debug on your machine.
  trace: 'retain-on-failure-and-retries',
  video: 'on',
};

const ci: RunSettings = {
  forbidOnly: true,
  // The job limit is 240 minutes (see the workflow). Stopping a little before it lets the run end normally and
  // still produce a report. A job killed by its time limit is cancelled and uploads nothing.
  globalTimeout: 225 * 60_000,
  // `list` shows progress in the log, `blob` is merged into one report after all shards finish, plus Allure results.
  reporter: [['list'], ['blob'], ALLURE],
  // Traces were the largest artifact (several GB per run), so CI records none.
  // It relies on the failure screenshot, the video of failed tests, and the logs.
  trace: 'off',
  video: 'retain-on-failure',
};

// The settings used by this run.
const run: RunSettings = isCI ? ci : local;


// ---------------------------------------------------------------------------------------------
// BROWSERS
// Every browser the suite can run in. The BROWSERS variable chooses which of them run:
//     BROWSERS=firefox            one browser
//     BROWSERS=chromium,webkit    several, separated by commas
//     BROWSERS=all                every browser below
// With nothing set, only chromium runs. Every browser runs all the tests, so each one added multiplies
// the number of test runs (and the traffic to Amazon).
// Playwright's own browsers (chromium, firefox, webkit) are installed with `npm run install:browsers`.
// `chrome` and `edge` use the Google Chrome / Microsoft Edge installed on the machine.
// ---------------------------------------------------------------------------------------------

// Milliseconds of delay before every action. The largest single contributor to run time.
const SLOW_MO = 700;

// The Chromium-based browsers also hide the "controlled by automation" flag. That flag only exists in Chromium,
// so Firefox and WebKit must not get it.
const CHROMIUM_LAUNCH = { slowMo: SLOW_MO, args: ['--disable-blink-features=AutomationControlled'] };
const OTHER_LAUNCH = { slowMo: SLOW_MO };

const BROWSERS: Record<string, Project['use']> = {
  chromium: { ...devices['Desktop Chrome'], launchOptions: CHROMIUM_LAUNCH },
  chrome: { ...devices['Desktop Chrome'], channel: 'chrome', launchOptions: CHROMIUM_LAUNCH },
  edge: { ...devices['Desktop Edge'], channel: 'msedge', launchOptions: CHROMIUM_LAUNCH },
  firefox: { ...devices['Desktop Firefox'], launchOptions: OTHER_LAUNCH },
  webkit: { ...devices['Desktop Safari'], launchOptions: OTHER_LAUNCH },
};

const requested = (process.env.BROWSERS || 'chromium').toLowerCase().split(',').map((name) => name.trim()).filter(Boolean);
const selected = requested.includes('all') ? Object.keys(BROWSERS) : [...new Set(requested)];

const unknown = selected.filter((name) => !(name in BROWSERS));
if (unknown.length > 0) {
  throw new Error(`Unknown browser in BROWSERS: ${unknown.join(', ')}. Choose from: ${Object.keys(BROWSERS).join(', ')}, or all.`);
}


// ---------------------------------------------------------------------------------------------
// THE CONFIG
// Same for local and CI, except for the values read from `run` above.
// ---------------------------------------------------------------------------------------------

export default defineConfig({
  testDir: './tests',

  // slowMo adds a delay to every action, so Playwright's default 30 s per test is far too short for the filter flows.
  timeout: 900_000,

  // Run tests in parallel even when they are in the same file, and let sharding split them one by one.
  // Keep this on: this suite is one file, which would otherwise land entirely in one shard.
  fullyParallel: true,

  // A failed test is retried once.
  retries: 1,

  // Parallel browsers per machine. Each one is a full Chromium process, so keep this low on a 2-CPU runner.
  workers: Number(process.env.PW_WORKERS ?? 2),

  forbidOnly: run.forbidOnly,
  globalTimeout: run.globalTimeout,
  reporter: run.reporter,

  use: {
    trace: run.trace,
    video: run.video,

    headless: true,

    // (Launch options such as slowMo are set per browser, in the BROWSERS list above.)

    // A small picture of the page when a test fails: the first thing to look at when there is no trace.
    screenshot: 'only-on-failure',

    // Longest wait for one action (click, fill, ...) and for one page load (goto, reload, ...).
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },

  // One project per selected browser (see BROWSERS above). Each project runs every test.
  projects: selected.map((name) => ({ name, use: BROWSERS[name] })),
});
