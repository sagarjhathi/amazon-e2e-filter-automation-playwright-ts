# Amazon Filter Automation

End-to-end tests for the product filters on Amazon India (amazon.in), written with Playwright and TypeScript. The tests search for each term in a list (currently Mobile, Laptop, Headphones, Tablet and Speaker), apply filter options from the left navigation, and check the result. They run against the live site, locally or on GitHub Actions, and publish their reports to GitHub Pages.

There are two suites, each with its own config, its own workflow and its own reports:

- **Main suite** (`tests/AmazonAll.spec.ts`): applies each filter option and checks that the products shown match it, mostly by opening the products and reading their details.
- **Card checks** (`tests/CardFilterChecks.spec.ts`): checks the filters that the page states exactly (numbers, labels, ASINs), against the product cards on the results page or against the product pages.

**Latest reports:** https://sagarjhathi.github.io/amazon-e2e-filter-automation-playwright-ts/ (one landing page with the Playwright and Allure reports of both suites)

> **Purpose and disclaimer.** This project exists only for education and learning, to practise end-to-end test design with Playwright and TypeScript. It is not a product or a service, it is not meant for commercial use, and it is not meant to build datasets from any website. It is unofficial and is not affiliated with, endorsed by or sponsored by Amazon; "Amazon" and "amazon.in" belong to their owners. The tests load pages from a live commercial website whose terms of use may restrict automated access, so read those terms and decide for yourself before running anything here. Nothing in this project gives any permission on Amazon's behalf. The code is provided as is, under the licence in [LICENSE](LICENSE), and you are responsible for how you use it. Use it sparingly.

## Contents

- [What is tested](#what-is-tested)
  - [Main suite](#main-suite)
  - [Card checks](#card-checks)
- [How it works](#how-it-works)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [How much is tested](#how-much-is-tested)
- [Continuous integration](#continuous-integration)
- [Reports](#reports)
- [Code quality](#code-quality)
- [Known limitations](#known-limitations)
- [License](#license)

## What is tested

### Main suite

There are 8 kinds of test in `tests/AmazonAll.spec.ts`. Each one runs for the search terms listed for its filter in `testdata/filterCoverage.json` (a subset of `testdata/searchTerms.json`), so with the 5 terms there are 29 test runs (`npx playwright test --list`). Any of the 8 kinds can be switched off in `testdata/enabledTests.json` (see "Switching tests on and off" below); the 29 is the count with everything on. The term is part of each test title, for example `Laptop: verifyingStorageCapacityFilterFunctionality`.

To add or remove a search term, edit `testdata/searchTerms.json` (no code change needed), then add the term to the filters it applies to in `testdata/filterCoverage.json`:

```json
{
  "searchTerms": ["Laptop", "Mobile", "Headphones", "Tablet", "Speaker"]
}
```

The filters were written for mobile phones. Laptops and headphones list different filters, so `testdata/filterCoverage.json` lists, for each filter, the search terms it is expected on, and a test is only registered for those terms (for example Screen Size runs for Mobile and Laptop only). To cover a new category, check which filters its results page shows and add the term to the matching lines.

| Test | Filter | What is checked |
|---|---|---|
| Verifying brands filter application | Brand | Every product title on the results page contains the brand name or a known alias (for example "Moto" for Motorola). |
| verifyingStorageCapacityFilterFunctionality | Storage Capacity | The filter value appears in the product's details. |
| verifyingBatteryFiltersFunctionality | Battery Life, Battery Capacity, Battery Power, Battery Charge Time | Amazon shows different battery filters per product type, so the test looks at which of these four the page offers and checks each one it finds. The filter's range (hours or mAh) is compared with the value in the product's spec table. Skipped if the page shows none of them. |
| verifyingDiscountFilterFunctionality | Discount | Same check. |
| verifyingDisplaySizeFilterFunctionality | Screen Size | Same check. |
| verifyingDisplayTypeFilterFunctionality | Display Type | Same check. |
| verifyingRearCameraPhotoSensorResolutionFilterFunctionality | Rear Camera Photo Sensor Resolution | Same check. |
| verifyingProcessorSpeedFilterFunctionality | Processor Speed | Same check. |

For the specification filters, the test applies each filter option, opens the first products in separate tabs, reads the title, key features, "about this item" text and technical details, and looks for the filter value in that text.

The test first waits up to 10 seconds for the left navigation to appear, so a slow page is not mistaken for a missing filter. If the filter is still not there, the test is reported as **skipped** (never failed), so a run that verified nothing never shows as a pass. The skip reason says which of two things happened:

- **Blocked by Amazon.** The page showed a 503 ("Service Unavailable") page that stayed after the reloads, or the left navigation never appeared. Example: `Blocked by Amazon: the page did not load properly after retries, so filter 'Discount' could not be checked. URL: ... Title: '503 - Service Unavailable Error'.` The 503 check runs before the wait and again after it, because the page can turn into a 503 page while waiting.
- **Filter not offered in this session.** The left navigation loaded but the filter is not in it. Amazon shows different filters per session and region, so CI can get a different set than a manual run. Example: `Filter 'Storage Capacity' is not in the left navigation for this session. The page showed: Brands, Screen Size, HDD Size, ...`.

### Switching tests on and off

`testdata/enabledTests.json` has one `true` / `false` per kind of test: the `main` block for the main suite (named by filter, the same names as in `filterCoverage.json`) and the `cards` block for the card checks. Set a kind to `false` and its tests are not registered for any search term, so only the rest run. Nothing else changes: sharding, reports and publishing work as before, and a switched-off test does not show up as skipped. A name that is missing from the file counts as on. Use `npx playwright test --list` (and `-c playwright.card-checks.config.ts --list` for the card checks) to see what will run. To limit a main-suite test to some search terms instead, edit `filterCoverage.json`.

**Currently switched off (main suite):** `brands`, `Battery`, `Discount`, `Screen Size` and `Rear Camera Photo Sensor Resolution`. Reason: the Java sister project switched these off after reading 20 runs of its own history, and they are switched off here on that evidence until further changes. This project's own Allure history (run #21, 20 runs per test) could not confirm it per search term, so the reason is Java's, not confirmed here. To switch one back on, set it to `true`. With them off the main suite has 9 tests (Storage Capacity, Display Type, Processor Speed); the card checks are unchanged at 50.

### Card checks

`tests/CardFilterChecks.spec.ts` has 10 kinds of check, each for every search term, so 50 tests (with everything on; any kind can be switched off in `testdata/enabledTests.json`). They only judge what the page states exactly. A filter the search does not show is skipped. What was read is saved to `collected/` (JSON, git-ignored) before any check, so the data is kept even when a check fails.

| Check | Where it is judged | Rule | Share that must fit |
|---|---|---|---|
| Brands | cards | the brand, or a known alias of it, is a whole word of the card's title | 90% |
| Customer Reviews | cards | the card's rating is at least the option's stars | 95% |
| Eligible for Free Delivery | cards | the card prints a "FREE delivery" line | 90% |
| Discount | cards | the printed discount is within 5 points of the option's level, or higher (a card that prints none is not judged) | 40% |
| Price range | cards, URL, sliders | the URL and both sliders show the range, and the card prices are inside it | 90% of the prices |
| Card self-check | cards | (M.R.P. - price) / M.R.P. rounds to the printed discount | 95% |
| Pay On Delivery | product pages | every page read shows the Pay on Delivery card (a product that cannot be shipped to the location is not judged) | 100% |
| Top Brands | product pages | every page read shows the Top Brand card | 100% |
| Seller | product pages | the product is sold by the option's seller, in the buy box or in another offer | reported, not failed |
| Rating | cards and product pages | the rating on the card equals the one on the product page (within 0.1) | 90% |

Each item is judged `fits`, `does not fit` or `no value` (the page does not show what the rule needs). Items with no value are listed, not judged. When nothing could be judged, the check is marked "inconclusive" instead of failing. The rules and thresholds are in `utils/CardChecks.ts`; the steps on the pages are in `flows/CardFilterFlows.ts` and `flows/ProductPageFlows.ts`. A filter counts as applied when the "Clear" link appears in its group, and as cleared when it is gone.

Specification filters read from free text (RAM, storage, CPU, battery) are not part of the card checks: titles and free text were not reliable enough to judge them.

## How it works

```
tests    what is verified, in a few readable lines
flows    multi-step journeys across pages and tabs; they return plain results
pages    locators and single-page actions
utils    shared helpers: run sizing, matching, card rules, logging, 503 recovery, "Continue shopping" page
```

Each layer calls only the layer below it. A test calls a flow, loops over the results it returns, and asserts with `expect.soft`, so one run reports every mismatch instead of stopping at the first.

A test, in short:

1. Open amazon.in, search for the term, and check that the filter exists in the left navigation.
2. For each filter option (up to a limit), apply it, check the products, then clear it.
3. For the specification filters, open each product in a new tab, read its details, and close the tab.

Because the site is live, the code expects some unreliability. Before and after each page-changing action it checks for Amazon's "Continue shopping" page and clicks its button (it does not solve any challenge), and for a "Service Unavailable" (503) page, which it reloads up to 5 times with a growing pause. It also slows actions with `slowMo`, skips products that return no data, and logs the tab's URL and title when a page does not load.

## Project structure

```
.github/workflows/main-suite.yml        CI of the main suite: lint, type check, 4 shards, report merge, publish
.github/workflows/card-checks.yml       CI of the card checks: same jobs, publishes to card-checks/
.github/pages/index.html                landing page template, shared by both workflows
flows/                                  BrandFilterFlows.ts, SharedFilterFlows.ts (main suite)
                                        CardFilterFlows.ts, ProductPageFlows.ts (card checks)
pages/                                  AmazonLandingPage.ts, ProductListingPage.ts
tests/AmazonAll.spec.ts                 the main suite (run once per search term)
tests/CardFilterChecks.spec.ts          the card checks (10 kinds x the search terms)
testdata/searchTerms.json               the search terms the tests run for
testdata/filterCoverage.json            which search terms each main-suite filter test runs for
testdata/filterHeadings.json            filter headings that differ per search term
testdata/enabledTests.json              on/off switch for each kind of test, both suites
utils/                                  CardChecks.ts (rules, verdicts, aliases), FilterMatcher.ts, GenericUtility.ts,
                                        CaptchaHandler.ts, RunConfig.ts, Logger.ts, TestHooks.ts
playwright.config.ts                    runner settings and reporters of the main suite
playwright.card-checks.config.ts        config of the card checks, built on the main one
eslint.config.mjs                       lint rules
tsconfig.json                           type-check settings
```

## Getting started

Requires a current Node.js LTS release (CI uses Node 22).

```bash
npm ci
npx playwright install chromium

npm test                  # run all tests
npm run test:headed       # watch the browser
npm run install:browsers  # download Firefox and WebKit too (once)
BROWSERS=firefox npm test # run in another browser (see "Browsers" below)
npx playwright test -g "brands"   # one test, by name (runs for every search term)
npx playwright test -g "Laptop"   # every test for one search term
npm run test:card-checks  # run all the card checks (50 tests, a long run)
npx playwright test -c playwright.card-checks.config.ts -g "Mobile: Discount"   # one card check, by name
npm run report            # open the last Playwright report
npm run allure:generate   # build the Allure report from allure-results/
npm run allure:open       # open the generated Allure report
npm run typecheck         # type check only
npm run lint              # lint
npm run lint:fix          # lint and fix what can be fixed automatically
```

To run with the scheduled-run sample locally: `IS_CRON=true npm test` (PowerShell: `$env:IS_CRON = "true"; npm test`).

Locally, the runner writes the Playwright HTML report to `playwright-report/` (it does not open by itself; run `npm run report`) and the Allure results to `allure-results/`, and keeps a full trace of failed tests and retries. The card checks write to `playwright-report-card-checks/` and `allure-results-card-checks/`, so a card run never overwrites a main-suite report.

Settings for one run, as environment variables (all optional):

| Variable | Used by | Effect |
|---|---|---|
| `SLOWMO` | both | pause in milliseconds at every action (default 700; the card workflow uses 1500) |
| `PW_WORKERS` | both | browsers at a time (main default 2, card checks default 1) |
| `PRODUCTS` | card checks | product pages opened per Seller option (default 5) |
| `BADGE_PRODUCTS` | card checks | product pages per Pay On Delivery / Top Brands option (`all` or a number) |
| `RATING_PRODUCTS` | card checks | product pages for the rating check (default 8) |
| `COLLECT_DIR` | card checks | folder for the collected JSON (default `collected`) |

### Browsers

Tests run in Chromium by default. Set `BROWSERS` to choose others:

| Value | Browser |
|---|---|
| `chromium` | Playwright's Chromium (the default) |
| `firefox`, `webkit` | Playwright's Firefox and WebKit (download them once with `npm run install:browsers`) |
| `chrome`, `edge` | the Google Chrome or Microsoft Edge installed on your machine |
| `all` | every browser above |

Use a comma for several, for example `BROWSERS=chromium,firefox npm test` (PowerShell: `$env:BROWSERS = "chromium,firefox"; npm test`). A name that is not in the list stops the run with a message listing the valid ones.

Every selected browser runs every test, so two browsers means twice as many test runs, and more traffic to Amazon. CI runs Chromium only. The tests have not been compared across browsers: Amazon may treat each one differently, and the same filter test can pass in one and skip or fail in another.

## How much is tested

For the main suite, `utils/RunConfig.ts` decides how many filter options and products each run covers, based on what triggered the run. (The card checks apply every option of a filter and have their own limits, see the variables above.)

| Mode | When | Filter options | Products each |
|---|---|---|---|
| standard | push, pull request, manual run, any local run | all that the page shows | first 3 |
| cron | the daily scheduled run, a manual run with "full run" ticked, or `IS_CRON=true` | all that the page shows | all that the page lists |

"All" means however many the page lists in that run (filter options, or products under a filter option), so the number can differ between runs. Opening every product under every filter option takes a long time, so a cron run takes much longer than a standard run. Use `FILTER_OPTIONS` or `PRODUCTS` (below) to shrink a run.

To change either setting for one run, set an environment variable to a number or to `all`:

| Variable | Example | Effect |
|---|---|---|
| `FILTER_OPTIONS` | `FILTER_OPTIONS=all` or `FILTER_OPTIONS=2` | How many filter options to try. |
| `PRODUCTS` | `PRODUCTS=all` or `PRODUCTS=1` | How many products to open under each filter option. |
| `DISCOUNT_CARDS` | `DISCOUNT_CARDS=10` | How many product cards to read under each Discount option. Cards are read from the results page without opening them, so the default is higher (30) than for products. |

Anything that is not `all` or a number is ignored, and the default for the mode is used. A number larger than what the page shows just means "all of them". Each time a limit is applied, the log says which kind of run it is, what the limit is, how many are on the page and how many will be used, for example `Filter options (cron run): limit all, 12 on the page, using 12`.

## Continuous integration

There are two workflows. They run their own jobs, and they publish to the same GitHub Pages site.

| Workflow | File | Runs |
|---|---|---|
| Main suite | `.github/workflows/main-suite.yml` | `tests/AmazonAll.spec.ts` |
| Card checks | `.github/workflows/card-checks.yml` | `tests/CardFilterChecks.spec.ts` |

| Trigger | Main suite | Card checks |
|---|---|---|
| Push to `master` | standard | yes |
| Pull request into `master` | standard | yes |
| Daily at 20:23 UTC (01:53 IST) | cron | no |
| Daily at 23:47 UTC (05:17 IST) | no | yes |
| Manual run from the Actions tab | standard, or cron if "full run" is ticked | yes (optional: only the tests whose name matches a text) |

A newer push or pull-request run cancels the older one on the same branch. The scheduled run and manual runs are never cancelled.

**Jobs (the same in both workflows)**

1. **typecheck** runs the linter and the type check once, so a mistake fails fast instead of failing in every shard.
2. **test** runs the tests as 4 parallel shards, each on its own runner, with 2 workers, in Chromium. Each shard uploads a Playwright blob report and its Allure results as short-lived artifacts. The main suite retries a failed test once (not when it failed on assertions only). The card checks do not retry, because a retry would read the same pages again, and they pause 1.5 seconds on every action.
3. **merge reports** combines the 4 shards into one Playwright HTML report and one Allure report, publishes them to GitHub Pages, and sends the Discord result message.

**How tests are split across shards.** Playwright decides this. Each shard lists the tests in the order they appear in the spec, cuts the list into equal chunks, and runs its chunk (`--shard=N/4`). This works because `fullyParallel: true` is set in `playwright.config.ts`, which makes each test, not each file, a unit that can be assigned. The split is by test count, not duration, so a shard that holds the long Seller tests can take much longer than the others, and adding or reordering tests changes which shard runs what. Check any shard with `npx playwright test --shard=2/4 --list`.

**Workers and shards.** Workers are parallel test processes inside one machine. Shards are separate machines. Sharding cuts the total time, at the cost of repeating checkout, install and browser setup in every shard.

**What CI records.** Traces were the largest artifact (several GB per run), so CI keeps a trace only for a test that fails on its first attempt; the retry is not traced, and a passing test has none. CI records no video (videos were 515 MB of the 548 MB published reports, because every product tab is its own video). A failed test also keeps a failure screenshot, and every test attaches its own log to the report. CI also stops the whole run at 225 minutes, just before the 240-minute job limit, so a very long run still produces its reports (a job killed by its own limit is cancelled and uploads nothing).

**Local and CI settings.** `playwright.config.ts` keeps the settings that differ between a local run and a CI run in two objects, `local` and `ci`, with the same keys. GitHub sets `CI=true`, which selects the `ci` one. To try it on your machine run `CI=true npx playwright test` (PowerShell: `$env:CI = "true"; npx playwright test`). Everything else is the same for both.

| Setting | Local | CI |
|---|---|---|
| Trace | full trace of failures and retries | first attempt of a failed test only |
| Video | every test, full size | none |
| Reporters | HTML (does not open by itself) and Allure | list, blob and Allure |
| Time limit for the whole run | none | 225 minutes |
| A `test.only` left in the code | allowed | fails the run |

**Publishing.** Pushes to `master`, the scheduled run and manual runs publish to the `gh-pages` branch as one fresh commit each time, so the branch holds only the latest reports and never grows. Pull requests build the reports (downloadable from the workflow run) but do not publish. GitHub Pages serves the branch from its root.

Both workflows write to the same branch, so each one replaces only its own folders and leaves the other's alone, and each publish pushes only if `gh-pages` is still the commit it started from (`--force-with-lease`); if the other workflow pushed in between, it starts again from the new state, up to 6 attempts. Each workflow also has its own lock (`pages-publish-main`, `pages-publish-card`), so the two never queue behind or cancel each other. Both also copy the same landing page, `.github/pages/index.html`, so keep it identical on every branch that publishes: whichever workflow publishes last leaves its copy.

```
index.html          landing page with both suites (reads the two run-info.txt lines and lists the switched-off kinds)
playwright/         main suite: merged Playwright report (latest run)
allure/             main suite: merged Allure report (latest run, with its history)
run-info.txt        main suite: "Run #N - commit - time"
enabledTests.json   copy of testdata/enabledTests.json (the landing page lists the main kinds set to false)
card-checks/
  playwright/       card checks: merged Playwright report
  allure/           card checks: merged Allure report (own history)
  run-info.txt      card checks: "Run #N - commit - time"
  enabledTests.json copy of testdata/enabledTests.json (the landing page lists the card kinds set to false)
```

**Discord messages (optional).** Each workflow sends three messages: a start message per shard, a result message when the reports are published (with a link to the run and, except on pull requests, to the report site), and a message when the lint and type check job fails. They need the repository secret `AMAZON_PLAYWRIGHT` (a Discord webhook URL). Without the secret the messages are skipped, and a message that fails to send never fails a job.

## Reports

Open the [landing page](https://sagarjhathi.github.io/amazon-e2e-filter-automation-playwright-ts/) and pick a suite ("Main suite" or "Card checks"), then a report. Under each suite the page names the kinds that are switched off on purpose, because they are in no report and would otherwise look like tests that were never written.

- **Playwright report.** Every test with its steps, screenshots and, for tests that failed on their first attempt, a trace. Use the tabs at the top to filter by state. **The default "All" tab does not include skipped tests; open the "Skipped" tab to see them.**
- **Allure report.** An overview, a list of suites and results, and trend graphs. Allure keeps the history of previous runs: each publish carries the previous report's history forward, so the trend graphs grow over time. Runs of different sizes (standard and cron) appear on the same graph.
- **Workflow artifacts.** The merged Playwright report and the merged Allure report of each workflow (`playwright-report` and `allure-report`; `card-checks-playwright-report` and `card-checks-allure-report`) are also attached to the run for 3 days, so pull-request runs, which do not publish, still have them. Open the Allure one with `npx allure open <folder>`; browsers block its data loading from a plain file.
- **What the card checks collected.** Each card-check shard uploads the JSON it read (`card-checks-data-N`, 30 days) and the run log.
- **Read the counts, not only the colour.** A run can be green while most tests were skipped (see "Known limitations"). Check the passed and skipped numbers in the report.

## Code quality

- **ESLint** (`typescript-eslint`) and **TypeScript** run in the first job of both workflows and locally with `npm run lint` and `npm run typecheck`. Folders that are not part of the project (`spike/`, `docs/`, the report folders) are ignored by the linter.
- `.gitattributes` keeps line endings consistent across Windows and Linux.
- **TypeScript 7 note.** typescript-eslint cannot use TypeScript 7 yet, so `package.json` follows Microsoft's side-by-side setup: `typescript` is an alias for the TypeScript 6 compatibility package (used by ESLint), and `@typescript/native` provides TypeScript 7, which is what `tsc` runs.

## Known limitations

- **The target is not always available to automation.** Amazon sometimes returns a "rush hour" page or a "Continue shopping" page, especially after many quick requests or from datacenter addresses such as CI runners. When that happens the filters are not on the page, so the tests are skipped with the reason "Blocked by Amazon". A CI report can therefore show many tests as skipped; that reflects what the site served, not a defect in a filter. The brand, specification and card checks can still fail for real, or because Amazon served different results to CI. Running the suite locally from a normal connection gives real results.
- **Green is not the same as tested.** A skipped test is neither a pass nor a failure, so a run in which Amazon blocked most pages can still end green (for example a card-checks run with 47 of 50 tests skipped). Always read the skipped count and the skip reasons. There is no automatic flag for this yet.
- **Some filters are judged loosely on purpose.** The card prints a discount that is not always the one the Discount filter uses, so that rule allows a 5 point buffer and a 40% threshold. Some Amazon data is simply wrong (one card prints a price of 2374 with an M.R.P. of 237400), which fails the card self-check.
- **Seller results are reported, not failed,** until there is enough data to say how reliable that filter is.
- **Locators depend on Amazon's markup,** which can change at any time.
- **Results depend on live data,** so the filter options and products seen differ from run to run. A standard run opens only the first 3 products under each filter option.
- **Terms of use.** The tests access a live commercial site automatically. Amazon's terms, including the Conditions of Use linked in the amazon.in footer, may restrict automated access and data collection. Read them before running this, run it sparingly, and do not run it in a loop or to collect data.

## License

Released under the [ISC License](LICENSE).
