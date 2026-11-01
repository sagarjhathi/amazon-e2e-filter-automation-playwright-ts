// TEMP config for tests-temp/ only. The main suite (tests/) and CI do not use it.
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests-temp',
  timeout: 600_000,
  fullyParallel: true,
  retries: 0,
  workers: Number(process.env.PW_WORKERS ?? 2),
  reporter: [['list']],
  use: { headless: true, actionTimeout: 15_000, navigationTimeout: 30_000 },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], launchOptions: { args: ['--disable-blink-features=AutomationControlled'], slowMo: Number(process.env.SLOWMO ?? 0) } } }], // SLOWMO=5000 waits 5 s at every action
});
