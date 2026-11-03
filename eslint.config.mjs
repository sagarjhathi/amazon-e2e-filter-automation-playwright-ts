import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules/', 'playwright-report/', 'blob-report/', 'test-results/', 'allure-results/', 'allure-report/', 'docs/', 'test-results-card-checks/', 'playwright-report-card-checks/', 'blob-report-card-checks/', 'allure-results-card-checks/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Several catch blocks swallow the error on purpose, so an unused catch variable is fine.
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
    },
  },
);
