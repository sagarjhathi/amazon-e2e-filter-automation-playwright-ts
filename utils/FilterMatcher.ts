// WHAT THIS FILE DOES
// -------------------
// A test clicks a filter on Amazon, for example "Processor Speed: less than 0.99 ghz", opens the products
// that are shown, and asks: "does this product really have what the filter promised?"
//
// To answer, we do NOT search the whole page text (that gave wrong answers: a stray "340 h" or the word
// "led" inside "controlled"). Instead we read ONE row of the product's spec table, because that row is
// where Amazon states the real value:
//
//     Processor Speed | 2.2 GHz        <- the row, stored as one line: "processor speed 2.2 ghz"
//
// Then we compare:  filter says "less than 0.99 ghz",  row says "2.2 ghz"  ->  2.2 is not below 0.99  ->  MISMATCH.
//
// THE THREE ANSWERS
//   match     the product fits the filter
//   mismatch  the product has the row, and it does NOT fit the filter  (the only answer that fails a test)
//   unknown   the product has no such row, so we cannot tell. The test skips it instead of failing it.
//
// Nothing here touches the browser, so it can be tested with plain strings.

type Product = { title: string; keyFeatures: string; about: string; techDetails: string };

export type MatchResult = {
  status: "match" | "mismatch" | "unknown";
  // What the spec row said, so a failure message can show it. "" if there was no row.
  rowValue: string;
  // Display Type only: "row" = decided by the spec row, "text" = no row, found in other text (weaker).
  source: "row" | "text" | "none";
};


// ---------------------------------------------------------------------------------------------
// SMALL HELPERS (used by both checks below)
// ---------------------------------------------------------------------------------------------

// Finds the spec row for a label and returns its value.
//   labels ["processor speed"], and the product has the line "processor speed 2.2 ghz"  ->  "2.2 ghz"
// Amazon names the same row differently on different products, so several labels can be given;
// the first label that has a row wins. Returns "" when the product has no such row.
function findRowValue(product: Product, labels: string[]): string {
  const lines = (product.techDetails + "\n" + product.keyFeatures).split("\n");
  for (const label of labels) {
    for (const line of lines) {
      const text = line.trim().toLowerCase();
      if (text.startsWith(label) && text.length > label.length) {
        return text.slice(label.length).trim();
      }
    }
  }
  return "";
}

// Splits text into lowercase words and puts a space around each: "Super AMOLED, LED" -> " super amoled led "
function toWords(text: string): string {
  return " " + text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).join(" ") + " ";
}

// Is the filter a whole word inside the text?
//   "led"  in "led display"  -> yes          "led"  in "controlled"  -> no
//   "oled" in "oled panel"   -> yes          "oled" in "amoled"      -> no
// This is why the words get spaces around them: " led " can only be found as a complete word.
function hasWord(text: string, filter: string): boolean {
  return toWords(text).includes(toWords(filter));
}


// ---------------------------------------------------------------------------------------------
// CHECK 1: DISPLAY TYPE. The filter is a plain word such as "lcd" or "oled".
// ---------------------------------------------------------------------------------------------

export function displayTypeMatch(filter: string, product: Product): MatchResult {
  // Step 1: the "Display Type" row. If it exists it decides: the filter word must be in it.
  const rowValue = findRowValue(product, ["display type"]);
  if (rowValue) {
    return { status: hasWord(rowValue, filter) ? "match" : "mismatch", rowValue, source: "row" };
  }

  // Step 2: no such row. Look for the filter word anywhere in the product text. This is weaker
  // (a title can mention a word for another reason), so it can only PASS a product, never fail it.
  const allText = [product.title, product.keyFeatures, product.about, product.techDetails].join(" ");
  if (hasWord(allText, filter)) {
    return { status: "match", rowValue: "", source: "text" };
  }

  // Step 3: nothing to go on.
  return { status: "unknown", rowValue: "", source: "none" };
}


// ---------------------------------------------------------------------------------------------
// CHECK 2: RANGES. The filter is a range such as "up to 6.9 h", "3,000 to 3,999 mah" or "9 h & above".
// ---------------------------------------------------------------------------------------------

// Units we understand. Each maps to [what it measures, how many of the base unit it is].
// This lets "1 tb" be compared with "up to 512 gb", because 1 tb = 1024 gb.
const UNITS: Record<string, [string, number]> = {
  gb: ["gb", 1], tb: ["gb", 1024], mb: ["gb", 1 / 1024],
  ghz: ["ghz", 1], mhz: ["ghz", 0.001],
  h: ["h", 1], hr: ["h", 1], hrs: ["h", 1], hour: ["h", 1], hours: ["h", 1],
  min: ["h", 1 / 60], mins: ["h", 1 / 60], minute: ["h", 1 / 60], minutes: ["h", 1 / 60],
  mah: ["mah", 1], milliamp: ["mah", 1],
  mp: ["mp", 1], megapixels: ["mp", 1],
  cm: ["cm", 1], centimetre: ["cm", 1], centimetres: ["cm", 1], centimeter: ["cm", 1], centimeters: ["cm", 1],
  inch: ["cm", 2.54], inches: ["cm", 2.54],
};

// A number in text, such as 6.9 or 3000. "3,000" is turned into "3000" first so it reads as one number.
const NUMBER = /\d+(?:\.\d+)?/g;
function removeThousandsCommas(text: string): string {
  return text.toLowerCase().replace(/(\d),(\d{3})/g, "$1$2");
}

type Range = { min: number; max: number; measures: string; size: number };

// Turns the filter text into a range, in the base unit.
//   "up to 6.9 h"       -> from 0 to 6.9            (hours)
//   "7 to 7.9 h"        -> from 7 to 7.9
//   "9 h & above"       -> from 9 up, no upper end
//   "less than 0.99 ghz"-> from 0 to 0.99
// Returns null if the filter is not one of these shapes or uses a unit we do not know.
function parseFilter(filter: string): Range | null {
  const text = removeThousandsCommas(filter);
  const numbers = (text.match(NUMBER) ?? []).map(Number);
  const unitWord = text.split(/[^a-z]+/).find((word) => UNITS[word]); // the first word that is a known unit
  if (numbers.length === 0 || !unitWord) return null;

  const [measures, size] = UNITS[unitWord];
  let min = 0;
  let max = Infinity;

  if (text.startsWith("up to") || text.startsWith("less than") || text.startsWith("under")) {
    max = numbers[0];                       // "up to 6.9 h": only an upper end
  } else if (numbers.length === 2) {
    [min, max] = numbers;                   // "7 to 7.9 h": both ends
  } else if (text.includes("above") || text.includes("more")) {
    min = numbers[0];                       // "9 h & above": only a lower end
  } else {
    return null;
  }
  return { min: min * size, max: max * size, measures, size };
}

// Reads the numbers out of the spec row, in the same base unit as the filter.
//   row "2.2 ghz"      -> [2.2]
//   row "800 mhz"      -> [0.8]       (converted to ghz)
//   row "2.0 50.0 mp"  -> [50]        (a camera row can list several cameras)
//   row "6000"         -> [6000]      (phones often leave the unit out)
// A number followed by a known unit is converted. A number with no unit at all is only used when
// no number in the row has a unit, because otherwise "2.0" in "2.0 50.0 mp" could pass a wrong product.
function numbersInRow(row: string, range: Range): number[] {
  const withUnit: number[] = [];
  const bare: number[] = [];
  const text = removeThousandsCommas(row);

  for (const match of text.matchAll(/(\d+(?:\.\d+)?) ?([a-z]+)?/g)) {
    const value = Number(match[1]);
    const unit = match[2] ? UNITS[match[2]] : undefined;
    if (unit && unit[0] === range.measures) withUnit.push(value * unit[1]);
    else if (!match[2]) bare.push(value * range.size);
  }
  return withUnit.length > 0 ? withUnit : bare;
}

export function rangeMatch(filter: string, rowLabels: string[], product: Product): MatchResult {
  // Step 1: read the spec row. No row, no answer.
  const rowValue = findRowValue(product, rowLabels);
  if (!rowValue) return { status: "unknown", rowValue, source: "none" };

  // Step 2: read the filter as a range. If it is not a range we know, fall back to looking for its text in the row.
  const range = parseFilter(filter);
  if (!range) {
    return { status: hasWord(rowValue, filter) ? "match" : "mismatch", rowValue, source: "row" };
  }

  // Step 3: it is a match if at least one number in the row is inside the range.
  const numbers = numbersInRow(rowValue, range);
  if (numbers.length === 0) return { status: "unknown", rowValue, source: "none" };
  const fits = numbers.some((n) => n >= range.min && n <= range.max);
  return { status: fits ? "match" : "mismatch", rowValue, source: "row" };
}
