import { expect, type Locator, type Page } from '@playwright/test';

export class ResultPage {
  readonly page: Page;
  readonly results: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.results =  page.getByTestId("card-container");
}

   async getResultCount():Promise<number>{
      await this.results.waitFor({timeout: 30000});
      await expect(this.results).toBeEnabled();
      return await this.results.count()    
   } 
}