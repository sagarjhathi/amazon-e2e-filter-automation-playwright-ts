import fs from "fs";
import path from "path";
import { expect, test } from "@playwright/test";
import type { Card } from "../pages/ProductListingPage";
import type { BadgeFacts, RatingFacts, SellerFacts } from "../flows/ProductPageFlows";

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

export const cardRules: { heading: string; threshold: number; rule: (option: string, card: Card) => Verdict }[] = [
	{
		// The brand is a whole word of the title.
		heading: "Brands", threshold: 0.9,
		rule: (option, card) => card.title === "" ? "no value" : hasWholeWord(card.title, option) ? "fits" : "does not fit",
	},
	{
		// The printed discount is at least the option's: "25% Off or more" and "(44% off)". Amazon's own figure can differ a little, so 80% must fit.
		heading: "Discount", threshold: 0.8,
		rule: (option, card) => card.discount === "" ? "no value" : firstNumber(card.discount) >= firstNumber(option) ? "fits" : "does not fit",
	},
	{
		// The card's rating is at least the option's stars: "4 Stars & Up" and "4.1 out of 5 stars".
		heading: "Customer Reviews", threshold: 0.95,
		rule: (option, card) => card.rating === "" ? "no value" : firstNumber(card.rating) >= firstNumber(option) ? "fits" : "does not fit",
	},
	{
		// Every card prints a "FREE delivery" line.
		heading: "Eligible for Free Delivery", threshold: 0.9,
		rule: (_option, card) => card.delivery === "" ? "no value" : /free delivery/i.test(card.delivery) ? "fits" : "does not fit",
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

// The filter is applied, so the product page must show the label (Pay on Delivery, Top Brand).
export function badgeVerdict(product: BadgeFacts, option: string): Judged {
	return { what: `${product.asin} (${option})`, verdict: product.problem !== "" ? "no value" : product.badge !== "" ? "fits" : "does not fit" };
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

	if (judged === 0) {
		test.info().annotations.push({ type: "inconclusive", description: `${label}: nothing could be judged (${noValue} show no value)` });
		return;
	}
	expect.soft(fits / judged, `${label}: the share that fits must be at least ${threshold}. Not fitting: ${misfits.join(" | ")}`).toBeGreaterThanOrEqual(threshold);
}

// Saves what was read as collected/<search term>__<name>.json, before any check, so it is kept even when a check fails.
export function saveCollected(searchTerm: string, name: string, data: unknown): void {
	const folder: string = process.env.COLLECT_DIR ?? "collected";
	fs.mkdirSync(folder, { recursive: true });
	fs.writeFileSync(path.join(folder, `${searchTerm}__${name.replace(/\s+/g, "_")}.json`), JSON.stringify({ searchTerm, name, collectedAt: new Date().toISOString(), data }, null, 1));
}
