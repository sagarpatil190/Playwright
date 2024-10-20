import { test as setup, expect } from '@playwright/test';
import { STORAGE_STATE } from '../../../playwright.config';

setup('do login', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');
});