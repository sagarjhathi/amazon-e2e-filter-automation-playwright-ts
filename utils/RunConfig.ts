/**
 * RunConfig decides how much of the site each test covers.
 *
 * Two things are limited:
 *   - filter options : how many options of a filter to try (for example the first 5 brands)
 *   - products       : how many products to open under each filter option
 *
 * A limit is either a number ("try at most this many") or 'all' ("try however many the page shows").
 * It is worked out in four steps below.
 */

type Limit = number | 'all';


// STEP 1: What kind of run is this?
//   cron     = the scheduled run (GitHub sets GITHUB_EVENT_NAME=schedule), or a run started with IS_CRON=true
//   standard = everything else: push, pull request, manual run, local run
const runType: 'cron' | 'standard' =
  process.env.GITHUB_EVENT_NAME === 'schedule' || process.env.IS_CRON?.toLowerCase() === 'true' ? 'cron' : 'standard';


// STEP 2: The default limits for each kind of run.
//   These are what a run uses when nothing overrides them in step 3.
//
//                        filter options   products per filter option
//     standard run       5                3
//     cron run           all              5
const DEFAULT_LIMITS: Record<'cron' | 'standard', { filterOptions: Limit; products: Limit }> = {
  standard: { filterOptions: 'all', products: 3 },
  cron: { filterOptions: 'all', products: 5 },
};


// STEP 3: Optional override from an environment variable.
//   Set the variable before running to change one limit for that run only, using a number or the word "all":
//     FILTER_OPTIONS=all   PRODUCTS=2
//   If the variable is not set, or holds anything else, there is no override (undefined) and the default is used.
function readOverride(variableName: string): Limit | undefined {
  const value = (process.env[variableName] ?? '').trim().toLowerCase();

  if (value === 'all') {
    return 'all';
  }

  const number = parseInt(value, 10);
  return number >= 0 ? number : undefined;
}


// STEP 4: The limits this run will use: the override if there is one, otherwise the default for this kind of run.
const filterOptionsLimit: Limit = readOverride('FILTER_OPTIONS') ?? DEFAULT_LIMITS[runType].filterOptions;
const productsLimit: Limit = readOverride('PRODUCTS') ?? DEFAULT_LIMITS[runType].products;


// Applies a limit to what the page really shows. 'all' means every one the page shows;
// a number is a cap, and is never more than what the page shows.
function howManyToUse(what: string, limit: Limit, available: number): number {
  const count: number = limit === 'all' ? available : Math.min(limit, available);
  console.log(`[RunConfig] ${what} (${runType} run): limit ${limit}, ${available} on the page, using ${count}`);
  return count;
}


export default {
  /** How many filter options (brands, storage sizes, ...) to walk through, given how many the page lists. */
  filterOptionLimit: (available: number): number => howManyToUse('Filter options', filterOptionsLimit, available),

  /** How many products to open under one applied filter option, given how many the page lists. */
  productLimit: (available: number): number => howManyToUse('Products', productsLimit, available),
};
