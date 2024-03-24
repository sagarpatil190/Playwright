import { type Page } from '@playwright/test';
import { ResultPage } from './resultPage';
import { SearchPage } from './searchPage';


export class HotelApp {

  readonly page: Page;
  readonly resultPage: ResultPage;
  readonly searchPage: SearchPage;


  constructor(page: Page) {
    this.page = page;
    this.resultPage = new ResultPage(page);
    this.searchPage = new SearchPage(page);
  }
}