import { type Page } from '@playwright/test';
import DesktopApp from './desktopApp';
import MobileApp from './mobileApp';


export default class App {

  readonly page: Page;
  readonly app;

  constructor(page: Page) {
    this.page = page;
    this.app = process.env.Device?.toLocaleLowerCase() =='desktop' ? new DesktopApp(page) : new MobileApp(page);    
  }
}