import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';

//dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(process.cwd(), 'tests', 'qa.env') });

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
          storageState: STORAGE_STATE, 
          
      },
      testMatch: '**/*loggedin.spec.ts',
      dependencies: ['setup'],
      
    },
    {
      name: 'e2e tests',
      testIgnore: ['**/*loggedin.spec.ts', '**/*.setup.ts'],
    },
  ],
});
