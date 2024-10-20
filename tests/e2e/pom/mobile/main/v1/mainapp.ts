import { type Page } from '@playwright/test';
import { SearchPage } from './searchPage';


export class MainApp {

  readonly page: Page;
  readonly searchPage: SearchPage;

  constructor(page: Page) {
    this.page = page;
    this.searchPage = new SearchPage(page);
  }
}