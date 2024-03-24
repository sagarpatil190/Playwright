import { test as base } from '@playwright/test';
import App from './App';

type Fixtures = {
  app: App;
};

export const test = base.extend<Fixtures>({
  app: async ({ page }, use) => {
    const myApp = new App(page);
    await use(myApp);
  },
});

export { expect } from '@playwright/test';
