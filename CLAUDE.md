# CLAUDE.md: read this first in every session

This file is loaded into every Claude Code session for this repo. It tells you what the project is, how to run it, the rules you must follow, and where the history lives. Facts here were checked on 2026-11-22 unless marked UNVERIFIED.

## 0. Start-of-session habit (do this before anything else)

1. Read this file.
2. Read `docs/STATUS.md` (current state, next step, backlog, known issues) and `docs/LESSONS.md` (mistakes not to repeat). Read `docs/DECISIONS.md` when you are about to change how something works.
3. **`docs/` is git-ignored on purpose (owner decision, 2026-11-22). It exists on the owner's machine, not in a fresh clone.** If `docs/STATUS.md` is missing, say so and ask the owner. Do not invent project history. (`.claude/` is git-ignored too, added to `.gitignore` on 2026-11-22 at the owner's request, so the skills, agents and settings are local as well.)
4. Run `git status -sb` and `git log --oneline -5` to see where the repo is now. The branch is usually `master` or `improve`. Do not trust a status snapshot given at the start of a conversation: it can be stale (LESSONS L22). Trust only what you ran in this session.

## 1. Project purpose

End-to-end tests for the product filters on Amazon India (amazon.in), written with Playwright and TypeScript. The tests search for a term (Mobile, Laptop, Headphones, Tablet, Speaker), apply filter options from the left navigation, and check that the products shown match the filter. They run against the live site, locally or on GitHub Actions, and publish their reports to GitHub Pages.

- **Who it is for:** the owner (GitHub user `sagarjhathi`), as a learning project in end-to-end test design. It is **educational only**: not a product, not for commercial use, not for building datasets. It is unofficial and not affiliated with Amazon. The README carries the full disclaimer.
- **End goal:** a small, readable, trustworthy suite that validates a filter **only where the page gives exact, machine-readable truth** (numbers, labels, ASINs, the applied-state link), in a page-object / flow style the owner can explain line by line.
- **Sister project:** the same work in Java (Selenium + TestNG) at `C:\Sagar\amazon-filter-e2e-automation` (GitHub `sagarjhathi/amazon-filter-e2e-automation-selenium-java`; the repo was renamed and the local folder kept the old name; its reports are at https://sagarjhathi.github.io/amazon-filter-e2e-automation-selenium-java/, HTTP 200 on 2026-11-22). It is a separate repo. This repo's session never edits it; see section 6 and the skill `port-to-java-prompt`.

Live reports: https://sagarjhathi.github.io/amazon-e2e-filter-automation-playwright-ts/ (HTTP 200 on 2026-11-22; the README was corrected to this URL in commit `5f90439`).

## 2. Tech stack (versions read from the machine and `package.json`, 2026-11-22)

| Part | Version / note |
|---|---|
| Node.js | v24.15.0 locally; CI uses Node 22 |
| npm | 11.12.1 |
| Playwright Test | 1.63.0 (`@playwright/test` ^1.63.0) |
| TypeScript | `tsc` 7.0.2 (`@typescript/native`). `typescript` itself is an alias of `@typescript/typescript6` so that typescript-eslint works. README, "Code quality". |
| ESLint | ^10.12.0 with `typescript-eslint` ^8.71.1 and `@eslint/js` ^10.0.1 |
| Reporters | Playwright HTML and blob; `allure-playwright` ^3.13.0 and `allure-commandline` ^2.46.1 (the Allure CLI needs a Java runtime locally, UNVERIFIED) |
| Logging | `winston` ^3.19.0 (via `utils/Logger.ts`) |
| Module system | CommonJS (`"type": "commonjs"`), target ES2020, `strict` |
| Browser | Chromium by default (`BROWSERS` env var picks others) |
| CI | GitHub Actions, `ubuntu-latest`; Playwright runs in 4 shards |
| Hosting of reports | GitHub Pages from the `gh-pages` branch (root) |

## 3. Folder map

```
.github/workflows/main-suite.yml     CI for the main suite: typecheck, 4 shards, merge reports + publish, Discord messages
.github/workflows/card-checks.yml    CI for the card suite: same shape, publishes to card-checks/ only
.github/pages/index.html             landing page template, shared by both workflows (see "Do not" list)
flows/                               multi-step journeys across pages and tabs; return plain results
  BrandFilterFlows.ts, SharedFilterFlows.ts     main suite
  CardFilterFlows.ts, ProductPageFlows.ts       card suite
pages/                               locators and single-page actions
  AmazonLandingPage.ts, ProductListingPage.ts
tests/
  AmazonAll.spec.ts                  main suite: 8 test kinds, one run per search term listed for the filter (29 tests)
  CardFilterChecks.spec.ts           card suite: 10 kinds of checks x the search terms (50 tests)
testdata/
  searchTerms.json                   the search terms (Laptop, Mobile, Headphones, Tablet, Speaker)
  filterCoverage.json                which search terms each main-suite filter test runs for
  filterHeadings.json                filter heading differences per search term (HDD Size, Display Size, CPU Speed)
utils/
  CardChecks.ts                      card rules, thresholds, verdicts, brand aliases, saveCollected, logging of checks
  FilterMatcher.ts, GenericUtility.ts, CaptchaHandler.ts   matching, shared helpers, "Continue shopping" and 503 handling
  RunConfig.ts                       how many options and products a main-suite run covers
  Logger.ts, TestHooks.ts            per-test log attached to the report; useTestLog() hook for a spec
playwright.config.ts                 main config (local vs CI settings, browsers, SLOWMO); ignores the card spec
playwright.card-checks.config.ts     card config, built on the main one (retries 0, 60 min test timeout, own report folders)
eslint.config.mjs, tsconfig.json     lint and type-check settings
package.json, package-lock.json      scripts and dependencies
README.md                            public description (brought up to date on 2026-11-22; keep it in step with the code)
CLAUDE.md                            this file (committed by the owner)
.claude/skills, .claude/agents, .claude/settings.json   agent skills, subagents and permissions (git-ignored, see section 9)
```

Local-only and git-ignored (do not expect them in a clone): `docs/` (notes: STATUS, DECISIONS, LESSONS, plans, 15 older notes), `.claude/` (skills, agents, settings), `spike/` (old probe scripts, they do not lint), `collected/` (JSON of what the card tests read), `node_modules/`, and the report folders: `playwright-report/`, `allure-results/`, `allure-report/`, `blob-report/`, `test-results/`, and the `-card-checks` twin of each.
## 4. Commands

Run from the repo root. "Verified" means it was run in this session on 2026-11-22.

| Purpose | Command | Status |
|---|---|---|
| Install (CI does this) | `npm ci` | UNVERIFIED here, used by CI |
| Install the browser | `npx playwright install chromium` | UNVERIFIED here, used by CI (`--with-deps` on Linux) |
| Type check | `npm run typecheck` | **verified, passes** |
| Lint (what CI runs) | `npm run lint` | **verified, passes** (since 2026-11-22 `spike/` is in the ESLint ignores) |
| Lint the tracked files only | `npx eslint $(git ls-files '*.ts' '*.mjs')` | **verified, passes** |
| List the main suite | `npx playwright test --list` | **verified, 29 tests** |
| List the card suite | `npx playwright test -c playwright.card-checks.config.ts --list` | **verified, 50 tests** |
| Run the whole main suite | `npm test` | UNVERIFIED here (CI runs it nightly) |
| Run the whole card suite | `npm run test:card-checks` | UNVERIFIED here as a full run (CI runs it) |
| **One card test (live)** | `npx playwright test -c playwright.card-checks.config.ts -g "Mobile: Discount"` | **verified, 1 passed in 1.5 min (loads amazon.in)** |
| One main-suite test | `npx playwright test -g "Mobile: verifyingBatteryFiltersFunctionality"` | UNVERIFIED (same mechanism) |
| Headed (watch the browser) | add `--headed` to a command, or `npm run test:headed` | UNVERIFIED |
| Playwright report | `npm run report` | UNVERIFIED |
| Allure report | `npm run allure:generate` then `npm run allure:open` | UNVERIFIED |
| Auto-fix lint | `npm run lint:fix` | UNVERIFIED |

**There is no build step** (tests are TypeScript run directly by Playwright; `tsc` only checks types, `noEmit: true`).

Test titles. Main suite: `<Term>: <name>`, for example `Laptop: verifyingStorageCapacityFilterFunctionality`. Card suite: `<Term>: <Filter> filter, checked on the cards` (or `... on the product pages`), `<Term>: Price range filter, checked on the cards`, `<Term>: price, M.R.P. and printed discount of each card agree`, `<Term>: rating on the card equals the rating on the product page`. `-g` takes part of a title (a regular expression).

Environment variables (all optional):

| Variable | Used by | Effect |
|---|---|---|
| `SLOWMO` | both | pause in ms at every action (default 700; the card workflow sets 1500) |
| `PW_WORKERS` | both | browsers at a time (main default 2, card default 1; workflows set 2) |
| `BROWSERS` | main config | `chromium` (default), `firefox`, `webkit`, `chrome`, `edge`, `all`, or a comma list |
| `IS_CRON=true` | main suite | scheduled-run sample: all filter options, all products (`utils/RunConfig.ts`) |
| `FILTER_OPTIONS`, `PRODUCTS`, `DISCOUNT_CARDS` | main suite | `all` or a number: limits per run |
| `PRODUCTS`, `BADGE_PRODUCTS`, `RATING_PRODUCTS` | card suite | product pages opened per Seller option (default 5), per Top Brands / Pay On Delivery (`all` or N), for the rating check (default 8) |
| `COLLECT_DIR` | card suite | where `saveCollected` writes (default `collected`) |
| `LOG_TO_CONSOLE` | logger | `true` / `false`; default on locally, off on CI |
| `CI=true` | configs | selects the CI settings locally (no video, trace off, blob reporter) |

PowerShell sets one with `$env:NAME = "value"; npx playwright test ...`; bash with `NAME=value npx ...`.

Reports and where they are: local runs write `playwright-report/` (does not open by itself) and `allure-results/`; the card config writes `playwright-report-card-checks/` and `allure-results-card-checks/`. On CI, blob reports and Allure results are merged by the `merge-reports` job and published to `gh-pages`.

## 5. Conventions

**Layers.** `tests` say what is verified in a few readable lines; `flows` run multi-step journeys and return plain results; `pages` hold locators and single-page actions; `utils` hold shared helpers and judgement. Each layer calls only the layer below. A test asserts with `expect.soft` so one run reports every mismatch.

**Naming.** Files are PascalCase classes (`CardFilterFlows.ts`); specs end in `.spec.ts`; flows end in `Flows`; JSON test data is camelCase file names (`searchTerms.json`). Brand aliases and rules live in `utils/CardChecks.ts`, not in specs.

**Code style.** No formatter is configured. Match the file you edit: older files use 2-space indentation and single quotes, newer files (the card suite) use tabs and double quotes. Comments are plain sentences explaining why. Keep it simple and clear: the owner reads every line.

**Test patterns.**
- A filter that is not offered, or a page blocked by Amazon, is a **skip with a reason**, never a pass.
- The card suite judges each item as `fits`, `does not fit` or `no value`; a share threshold per rule is in `cardRules` (`utils/CardChecks.ts`). If nothing can be judged, the check is marked "inconclusive", not failed.
- Every test has its own log (`useTestLog()` in `utils/TestHooks.ts`, or the hooks in `AmazonAll.spec.ts`) attached to the report as `test-log`.
- Main suite: retry once on infrastructure failures, not on assertion failures (marker file in the `afterEach` hook). Card suite: no retries.

**Git.** Branches seen: `master` (default), `improve` (work branch, merged by pull requests #2, #3, #4), `phase-2-data-compare` (old, merged), `clean` (UNVERIFIED purpose), `gh-pages` (published reports only, rewritten as one orphan commit each time: never work on it). Commit messages in the history are short, informal and lower case ("adding more aliases , reducing the slomo"); there is no enforced format. **The owner makes every commit and push.**

**CI.** Two workflows, both: `typecheck` job (lint + type check), `test` job in 4 shards (`fail-fast: false`), `merge-reports` job (merges blob and Allure results, publishes to `gh-pages` unless the event is a pull request, then the Discord message). Main suite triggers: push and pull request to `master`, daily 20:23 UTC (01:53 IST), manual. Card checks triggers: push and pull request to `master`, daily 23:47 UTC (05:17 IST), manual. Publishing is serialised by `concurrency: group: pages-publish`.

## 6. Rules for agents

1. **Read `docs/STATUS.md` and `docs/LESSONS.md` at the start of every session** (section 0).
2. **Never guess.** If unsure, search the code, run it, or ask. A selector, a number, a version or a date must come from something you read or ran.
3. **Run code and tests before claiming something works, and report the real output.** `npm run typecheck`, the lint of tracked files and `--list` are cheap and do not touch Amazon. A live run loads amazon.in: run one test at a time, headless, only when it is needed or asked for (the README asks for sparing use).
4. **Verify version-sensitive facts against official docs and cite them.** Playwright, Allure, GitHub Actions syntax and TypeScript 7 change. If you did not look it up in this session, mark it UNVERIFIED.
5. **Make focused changes.** Do not touch unrelated files, do not reformat, do not refactor on the side.
6. **Ask before deleting files, changing configs, changing workflows, or anything hard to reverse or outward-facing** (publishing, force-pushing, secrets, notifications). Approval for one thing does not extend to the next.
7. **Never run `git commit` or `git push`** (settings deny them). Make the edit, show the diff or `git status`, and let the owner commit. Read-only git is fine.
8. **Report what a CI run really did.** A green run with skipped tests checked nothing. Always give passed / failed / skipped / broken counts and the skip reasons (skill `assess-ci-run`).
9. **Do not name a cause you did not see.** Say "UNVERIFIED" or "likely", and say what you could not read (GitHub job logs need a login).
10. **Deferred work goes in `docs/STATUS.md`, Backlog section, with the date** (this replaces the old `docs/backlog.md`).
11. **Porting to Java:** the Java project is a separate repo and stack. Do not edit it from here. Write a prompt for the Java session in Java terms (skill `port-to-java-prompt`); never call Java files by TS names, never assume a Java file exists.
12. **At the end of a session:** update `docs/STATUS.md` (done, next step, known issues), add decisions to `docs/DECISIONS.md` and new lessons to `docs/LESSONS.md`, then tell the owner the changes are ready to review and commit.

## 7. Do-not list

- **Never build or tune anything to evade Amazon's bot detection.** The code clicks the "Continue shopping" button and reloads a 503 page, and otherwise skips with "Blocked by Amazon". No stealth settings, no user-agent or fingerprint changes, no proxies, no challenge solving, no human-like input tricks. The launch argument `--disable-blink-features=AutomationControlled` is already in `playwright.config.ts`; it is an undecided item (STATUS.md). Do not add to it and do not copy it anywhere.
- **Do not run tests in a loop, in big parallel batches, or to collect data.** One test at a time unless asked. Keep slow motion on.
- **Do not count a skip as a pass, and do not report a green workflow as a good result without the skipped count.**
- **Do not compare the card list before and after a click** to decide a filter was applied. The "Clear" link in the filter's group is the signal (DECISIONS D6).
- **Do not use `outputFolder` for `allure-playwright`;** it is ignored. Use `resultsDir`.
- **Do not publish to `gh-pages` by hand,** and do not let a branch with an old `.github/pages/index.html` publish: both workflows copy that one file and the last publisher wins (this removed the card section once).
- **Do not leave "TEMPORARY" branch triggers or temp config files in a workflow or on `master`.**
- **Do not make the Mobile Discount threshold depend on the option level;** the fallback is 0.3 (DECISIONS D8).
- **Do not put secrets or the webhook URL in any file or log.** The Discord webhook is the GitHub secret `AMAZON_PLAYWRIGHT` (the Java repo uses `DISCORD_WEBHOOK`).
- **Do not write `${{ github.* }}` inside a workflow `run:` script;** pass it through `env:` (branch names can contain `$(...)`).
- **Do not let the README drift.** When you change test counts (29 main, 50 card), workflows, triggers, the Pages layout or the URL, update the README in the same session. It was last brought up to date on 2026-11-22.
- **Do not rely on `.gitignore` to untrack a file:** a tracked file stays tracked. Check with `git ls-files <path>` and `git check-ignore -v <real file>` (LESSONS L24).
- **Do not run `git push --force`, `git reset --hard` or delete branches** without being asked.

## 8. Glossary

| Term | Meaning |
|---|---|
| Main suite | `tests/AmazonAll.spec.ts`: filter application plus product-detail checks, workflow `main-suite.yml` |
| Card checks | `tests/CardFilterChecks.spec.ts`: filters judged on the product cards and product pages, workflow `card-checks.yml` |
| Card | one product tile on the results page (`Card` type in `pages/ProductListingPage.ts`: title, price, mrp, discount, rating, delivery, availability, asin) |
| Option | one value of a filter ("4 Stars & Up", "Samsung", "60% Off or more") |
| Filter group | one block of the left navigation, with an Apply/Remove link per option and a "Clear" link once one is applied |
| "Clear" signal | the group's "Clear" link: shown means applied, gone means cleared |
| Verdict | `fits`, `does not fit` or `no value` for one item; `no value` is listed, not judged |
| Threshold | the share of judged items that must fit for a check to pass (`cardRules`) |
| Alias | another name a brand's products carry in titles (iPhone for Apple), in `brandAliases` |
| Shard | one of 4 parallel CI jobs, each running a slice of the tests (`--shard=N/4`) |
| Blocked by Amazon | the skip reason when a 503 or "Continue shopping" page stays after the reloads |
| 503 / "Continue shopping" | Amazon pages that replace results under load or suspicion; handled by `GenericUtility` and `CaptchaHandler` |
| Collected | JSON written by `saveCollected` to `collected/` before any check, so a failed check keeps its data |
| CHECK line | a log line from `checkShare` / `logSellerResult` that states a result in numbers |
| Landing page | `.github/pages/index.html`, the root `index.html` on `gh-pages`, with both suites' links |
| run-info | `run-info.txt` (main) and `card-checks/run-info.txt`: the "Run #N - commit - time" line the landing page shows |
| `pages-publish` | the concurrency group that serialises the two workflows' publish steps |
| Hub | the Pages site root (the "Report hub" link in the Discord message) |
| Sister project | the Java repo, ported by hand through prompts |
| Cron run | the scheduled main-suite run, which covers all products |

## 9. Pointers

- `docs/STATUS.md`: current goal, done, in progress, backlog, known issues. **Read first.**
- `docs/LESSONS.md`: mistakes not to repeat. **Read first.**
- `docs/DECISIONS.md`: why things are the way they are (index into the longer notes).
- Older notes in `docs/`: `problems-and-solutions.md` (decision log of the main suite), `live-site-lessons.md`, `ci-and-sharding.md`, `blocker-handling.md`, `run-config.md`, `filter-test-data-mapping.md`, `brand-filter-options.md`, `reports-and-pages.md` (outdated), `plan-card-filter-checks.md` (outdated), `code-walkthrough/`. `docs/backlog.md` is superseded by STATUS.md.
- Skills (`.claude/skills/`): `assess-ci-run` (read a published run honestly), `port-to-java-prompt` (write the Java-session prompt), `merge-readiness` (check a branch before merging to `master`).
- Subagents (`.claude/agents/`): `code-reviewer` (reads and reports, never edits), `test-runner` (typecheck, lint, list, and one live test on request; summarises failures).
- Settings: `.claude/settings.json` (allow safe commands, deny `git commit` and `git push`).
- External: the Playwright docs (https://playwright.dev/docs/intro), GitHub Actions docs (https://docs.github.com/actions), Allure Playwright (https://allurereport.org/docs/playwright/).

## 10. Ongoing habit

- **Start of each session:** read CLAUDE.md, `docs/STATUS.md`, `docs/LESSONS.md`; run `git status -sb`.
- **End of each session:** update STATUS.md (done, next exact step, known issues), add decisions to DECISIONS.md and lessons to LESSONS.md, then tell the owner the changes are ready so they can review and commit. Never commit yourself.
