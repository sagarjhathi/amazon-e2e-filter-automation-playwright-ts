import fs from "fs";
import path from "path";
import { expect, test } from "@playwright/test";
import type { Card } from "../pages/ProductListingPage";
import type { BadgeFacts, RatingFacts, SellerFacts } from "../flows/ProductPageFlows";
import Logger from "./Logger";

const log = Logger.for("CardChecks");

// What tests/CardFilterChecks.spec.ts compares and reports. Nothing here opens a page: the flows read, this judges.


// ---- Run settings (environment variables) ----

export const SELLER_PRODUCTS: number = process.env.PRODUCTS ? Number(process.env.PRODUCTS) : 5; // product pages opened per Seller option
export const BADGE_PRODUCTS: number = process.env.BADGE_PRODUCTS && process.env.BADGE_PRODUCTS !== "all" ? Number(process.env.BADGE_PRODUCTS) : Number.POSITIVE_INFINITY; // per Top Brands / Pay on Delivery
export const RATING_PRODUCTS: number = process.env.RATING_PRODUCTS ? Number(process.env.RATING_PRODUCTS) : 8; // for the rating check


// ---- Verdicts ----

// "no value": the page does not show what the rule needs, so it is listed, not judged.
export type Verdict = "fits" | "does not fit" | "no value";
export type Judged = { what: string; verdict: Verdict };


// ---- Reading numbers and names ----

// The first number in a text: "₹26,000" is 26000, "(44% off)" is 44, "4.1 out of 5 stars" is 4.1, "4 Stars & Up" is 4. NaN when there is none.
export const firstNumber = (text: string): number => Number(text.match(/\d[\d,]*\.?\d*/)?.[0].replace(/,/g, "") ?? NaN);

// A brand or seller name without the "..." Amazon puts at the end of a long one.
const cleanName = (name: string): string => name.replace(/\s*(\.{3}|…)\s*$/, "").replace(/\s+/g, " ").trim();

// The two seller names only have to start the same way, whichever is shorter ("NEW TECH WORLD ..." is cut).
export const sameSeller = (pageSeller: string, option: string): boolean =>
	cleanName(pageSeller).toLowerCase().startsWith(cleanName(option).toLowerCase()) || cleanName(option).toLowerCase().startsWith(cleanName(pageSeller).toLowerCase());

// The word is in the text as a whole word, not as part of a longer one.
const hasWholeWord = (text: string, word: string): boolean =>
	new RegExp(`(^|[^a-z0-9])${cleanName(word).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`, "i").test(text);


// ---- Filters checked on the cards: the rule of each says whether one card fits the option applied ----

// Names a brand's products are sold under in the titles, besides the brand's own name (lower case, matched as whole words).
// The titles of Apple's products say "iPhone", not "Apple"; Motorola's say "Moto"; and so on. A brand that is not listed is matched by its own name only.
// Add a brand here when a title of its products does not carry its name.
const brandAliases: Record<string, string[]> = {
	apple: ["iphone", "ipad", "macbook", "airpods", "imac"],
	motorola: ["moto"],
	creative: ["sound blaster"],
	plantronics: ["poly", "rig"],
	jio: ["jiobharat", "jiophone"],
	"polk audio": ["polk"],
	xiaomi: ["mi", "redmi", "poco"],
	samsung: ["galaxy"],
	google: ["pixel"],
	amazon: ["echo", "kindle", "fire tv", "fire"],
	lenovo: ["thinkpad", "ideapad", "legion", "yoga", "loq"],
	asus: ["rog", "tuf", "vivobook", "zenbook"],
	hp: ["pavilion", "victus", "omen", "envy", "spectre"],
	dell: ["inspiron", "latitude", "alienware", "xps", "vostro"],
	acer: ["aspire", "nitro", "predator", "swift"],
	microsoft: ["surface"],
};

// The brand, or one of its aliases, is a whole word of the title.
const titleHasBrand = (title: string, brand: string): boolean =>
	[brand, ...(brandAliases[cleanName(brand).toLowerCase()] ?? [])].some((name) => hasWholeWord(title, name));

export const cardRules: { heading: string; description: string; threshold: number; rule: (option: string, card: Card) => Verdict }[] = [
	{
		// The brand (or an alias of it) is a whole word of the title.
		heading: "Brands", description: "the brand, or a known alias of it, is a whole word of the card's title", threshold: 0.9,
		rule: (option, card) => card.title === "" ? "no value" : titleHasBrand(card.title, option) ? "fits" : "does not fit",
	},
	{
		// The card's rating is at least the option's stars: "4 Stars & Up" and "4.1 out of 5 stars".
		heading: "Customer Reviews", description: "the card's rating is at least the option's stars", threshold: 0.95,
		rule: (option, card) => card.rating === "" ? "no value" : firstNumber(card.rating) >= firstNumber(option) ? "fits" : "does not fit",
	},
	{
		// Every card prints a "FREE delivery" line.
		heading: "Eligible for Free Delivery", description: "the card prints a \"FREE delivery\" line", threshold: 0.9,
		rule: (_option, card) => card.delivery === "" ? "no value" : /free delivery/i.test(card.delivery) ? "fits" : "does not fit",
	},
	{
		// The printed discount is not always the one the filter uses (Mobile, "60% Off or more": 7 of 16 cards print 60% or more, the rest 29% to 43%),
		// so the rule allows 5 points below the level and the threshold is low (0.4; the worst share seen without the buffer was 43%).
		// It only catches a filter that returns cards that print far less than the level. A card that prints no discount is not judged.
		heading: "Discount", description: "the discount the card prints is within 5 points of the option's level or higher (a card that prints none is not judged)", threshold: 0.4,
		rule: (option, card) => card.discount === "" ? "no value" : firstNumber(card.discount) >= firstNumber(option) - 5 ? "fits" : "does not fit",
	},
];

// The price of the card is inside the range. A side that is open (null) has no limit.
export function priceVerdict(card: Card, min: number | null, max: number | null): Judged {
	const price: number = firstNumber(card.price);
	const what: string = `${card.title.slice(0, 40)} ${card.price}`;
	if (Number.isNaN(price)) return { what, verdict: "no value" };
	return { what, verdict: (min === null || price >= min) && (max === null || price <= max) ? "fits" : "does not fit" };
}

// The card agrees with itself: (M.R.P. - price) / M.R.P. rounds to the printed percent. A card that does not print all three is not judged.
export function selfCheckVerdict(card: Card): Judged {
	const price: number = firstNumber(card.price);
	const mrp: number = firstNumber(card.mrp);
	const printed: number = firstNumber(card.discount);
	if ([price, mrp, printed].some(Number.isNaN)) return { what: card.title.slice(0, 40), verdict: "no value" };
	return { what: `${card.title.slice(0, 40)} price ${price}, M.R.P. ${mrp}, printed ${printed}%`, verdict: Math.abs(Math.round((mrp - price) / mrp * 100) - printed) <= 1 ? "fits" : "does not fit" };
}


// ---- Facts checked on the product pages ----

// The filter is applied, so the product page must show the label (Pay on Delivery, Top Brand). The exception is a page that says the
// product cannot be shipped to the chosen location: it has no such label whatever the filter says, so it is not judged.
export function badgeVerdict(product: BadgeFacts, option: string): Judged {
	const what: string = `${product.asin} (${option})`;
	if (product.problem !== "" || (product.badge === "" && product.cannotShip)) return { what, verdict: "no value" };
	return { what, verdict: product.badge !== "" ? "fits" : "does not fit" };
}

// The product is sold by the option's seller, in the buy box or in another offer.
export function sellerVerdict(product: SellerFacts, option: string): Judged {
	const sold: boolean = (product.seller !== "" && sameSeller(product.seller, option)) || product.offerSellers.some((seller) => sameSeller(seller, option));
	const noSeller: boolean = product.seller === "" && product.offerSellers.length === 0;
	return { what: `${product.asin} (${option}, page shows '${product.seller}')`, verdict: product.problem !== "" || noSeller ? "no value" : sold ? "fits" : "does not fit" };
}

// The rating on the card and on the product page: both print "N out of 5 stars", and a difference of one tenth is rounding.
export function ratingVerdict(product: RatingFacts, cardRatingText: string): Judged {
	const cardRating: number = firstNumber(cardRatingText);
	const pageRating: number = firstNumber(product.rating);
	if (product.problem !== "" || Number.isNaN(cardRating) || Number.isNaN(pageRating)) return { what: product.asin, verdict: "no value" };
	return { what: `${product.asin} card ${cardRating}, page ${pageRating}`, verdict: Math.abs(cardRating - pageRating) <= 0.1001 ? "fits" : "does not fit" };
}


// ---- Reporting and saving ----

// Counts the judged items and fails (softly, so every check of the test is reported) when the share that fits is under the threshold.
// When nothing could be judged (every item shows no value), the check says nothing either way: it is marked "inconclusive" on the test, not failed.
export function checkShare(label: string, items: Judged[], threshold: number): void {
	const fits: number = items.filter((item) => item.verdict === "fits").length;
	const misfits: string[] = items.filter((item) => item.verdict === "does not fit").map((item) => item.what);
	const noValue: number = items.filter((item) => item.verdict === "no value").length;
	const judged: number = fits + misfits.length;
	console.log(`${label}: ${fits} of ${judged} fit, ${noValue} show no value${misfits.length > 0 ? `; do not fit: ${misfits.join(" | ")}` : ""}`);

	// The same in the test's log, with the items that were not judged: what fits, what does not, and what could not be told.
	log.info(`CHECK ${label}: ${fits} of ${judged} judged fit (needs at least ${threshold}), ${noValue} show no value`);
	if (misfits.length > 0) log.warn(`${label}: do not fit: ${misfits.join(" | ")}`);
	const unjudged: string[] = items.filter((item) => item.verdict === "no value").map((item) => item.what);
	if (unjudged.length > 0) log.info(`${label}: not judged (no value): ${unjudged.slice(0, 10).join(" | ")}${unjudged.length > 10 ? ` | ... and ${unjudged.length - 10} more` : ""}`);

	if (judged === 0) {
		log.warn(`${label}: nothing could be judged, so the check is marked inconclusive (not failed)`);
		test.info().annotations.push({ type: "inconclusive", description: `${label}: nothing could be judged (${noValue} show no value)` });
		return;
	}
	expect.soft(fits / judged, `${label}: the share that fits must be at least ${threshold}. Not fitting: ${misfits.join(" | ")}`).toBeGreaterThanOrEqual(threshold);
}

// Saves what was read as collected/<search term>__<name>.json, before any check, so it is kept even when a check fails.
export function saveCollected(searchTerm: string, name: string, data: unknown): void {
	const folder: string = process.env.COLLECT_DIR ?? "collected";
	const file: string = path.join(folder, `${searchTerm}__${name.replace(/\s+/g, "_")}.json`);
	fs.mkdirSync(folder, { recursive: true });
	fs.writeFileSync(file, JSON.stringify({ searchTerm, name, collectedAt: new Date().toISOString(), data }, null, 1));
	log.info(`Saved what was read to ${file}`);
}

// The Seller test does not fail, so its result goes to the log: per option how many products are sold by that seller, and which are not.
export function logSellerResult(label: string, option: string, judged: Judged[]): void {
	const count = (verdict: Verdict): number => judged.filter((item) => item.verdict === verdict).length;
	log.info(`CHECK ${label} '${option}': ${count("fits")} of ${judged.length} product(s) sold by that seller, ${count("does not fit")} sold by another, ${count("no value")} unread or with no seller (reported, not failed)`);
	const different: string[] = judged.filter((item) => item.verdict === "does not fit").map((item) => item.what);
	if (different.length > 0) log.warn(`${label} '${option}': seller mismatch: ${different.join(" | ")}`);
}

// Says in the test's log which rule the test applies, so the rest of the log can be read against it.
export function logRule(rule: string): void {
	log.section(`RULE: ${rule}`);
}
