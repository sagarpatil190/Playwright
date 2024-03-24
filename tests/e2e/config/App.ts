import { type Page } from '@playwright/test';
import { HotelApp } from '../pom/hotel/v1/hotelapp'; 
import { HotelApp as HotelAppV2 } from '../pom/hotel/v2/hotelapp'; 
require('dotenv').config();


export default class App {

  readonly page: Page;
  readonly hotelApp: HotelApp;

  constructor(page: Page) {
    this.page = page;
    this.hotelApp = process.env.HotelApp_Version =='v2' ? new HotelAppV2(page) : new HotelApp(page);    
  }
}