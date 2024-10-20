import { type Page } from '@playwright/test';
import { ResultPage } from './resultPage';


export class HotelAppV2 {

  readonly page: Page;
  readonly resultPage: ResultPage;


  constructor(page: Page) {
    this.page = page;
    this.resultPage = new ResultPage(page);
  }
}