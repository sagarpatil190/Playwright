import { type Page } from '@playwright/test';
import { ResultPage } from './resultPage';



export class HotelApp {

  readonly page: Page;
  readonly resultPage: ResultPage;

  constructor(page: Page) {
    this.page = page;
    this.resultPage = new ResultPage(page);
  }
}