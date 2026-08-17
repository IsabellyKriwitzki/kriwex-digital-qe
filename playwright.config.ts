import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in parallel */
  fullyParallel: true,

  /* Prevent test.only from being committed to CI */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests on CI */
  retries: process.env.CI ? 2 : 0,

  /* Use a single worker on CI for stability */
  workers: process.env.CI ? 1 : undefined,

  /* Test execution timeout */
  timeout: 30_000,

  /* Assertion timeout */
  expect: {
    timeout: 5_000,
  },

  /* HTML test report */
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  /* Shared test configuration */
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3001',

    /* Capture screenshot only when a test fails */
    screenshot: 'only-on-failure',

    /* Record video only when a test fails */
    video: 'retain-on-failure',

    /* Capture trace when retrying a failed test */
    trace: 'on-first-retry',

    /* Collect test artifacts */
    actionTimeout: 10_000,
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      testMatch: '**/ui/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      testMatch: '**/ui/**/*.spec.ts',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      testMatch: '**/ui/**/*.spec.ts',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    {
      name: 'e2e',
      testMatch: '**/e2e/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:3001',
      },
    },

    {
      name: 'api',
      testMatch: '**/api/**/*.spec.ts',
      use: {
        baseURL: 'http://localhost:3000',
      },
    },

    {
      name: 'database',
      testMatch: '**/database/**/*.spec.ts',
    },
  ],
});