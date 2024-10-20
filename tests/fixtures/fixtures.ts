import { test as base } from '@playwright/test';
import App from '../e2e/config/App';

type Fixtures = {
  orxe: App;
};

export const test = base.extend<Fixtures>({
  orxe: async ({ page }, use) => {
    let myApp;
    myApp = new App(page);
    await use(myApp);
  },
});

export { expect } from '@playwright/test';
