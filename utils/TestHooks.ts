import { test } from "@playwright/test";
import { stripVTControlCharacters } from "node:util";
import Logger from "./Logger";

const log = Logger.for("Test");

// Gives every test of a spec its own log, as tests/AmazonAll.spec.ts does: a fresh log before the test, and after it (also after a failure,
// a skip or a timeout) the log is attached to the test, so it shows in the Playwright report and the Allure report as "test-log".
// Call it once, at the top of the spec file.
export function useTestLog(): void {

	// eslint-disable-next-line no-empty-pattern
	test.beforeEach(({}, testInfo) => {
		Logger.startTest(testInfo.title);
		log.info(`Started '${testInfo.title}' (project: ${testInfo.project.name}, worker ${testInfo.workerIndex})`);
	});

	// eslint-disable-next-line no-empty-pattern
	test.afterEach(async ({}, testInfo) => {
		log.info(`Finished '${testInfo.title}': ${testInfo.status} (expected ${testInfo.expectedStatus}) in ${testInfo.duration} ms`);
		for (const error of testInfo.errors) {
			log.error(`Failure: ${stripVTControlCharacters(error.message ?? "").split("\n").slice(0, 3).join(" | ")}`);
		}
		await Logger.attachTo(testInfo);
	});
}
