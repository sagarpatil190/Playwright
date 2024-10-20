import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';

//dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(process.cwd(), 'tests', 'Environment') });

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

export default defineConfig({
testDir: process.env.testType == 'e2e' ? './tests' : './tests', 
timeout: 30000, // Timeout is shared between all tests.

fullyParallel: true,
forbidOnly: !!process.env.CI,
retries: process.env.CI ? 2 : 0,
workers: process.env.CI ? 1 : undefined,
reporter: 'allure-playwright',
use: {
  baseURL: 'https://en.wikipedia.org',
},
projects: [
  {
    name: 'setup',
    testMatch: '**/*.setup.ts',
  },
  {
      name: 'e2e tests',
      use: { 
          ...devices['Desktop Chrome'],         
      },
      testMatch: '**/*.spec.ts',
      dependencies: ['setup'],
      
    }
  ],
});
