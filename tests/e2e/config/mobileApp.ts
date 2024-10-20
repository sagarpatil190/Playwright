import { Page } from "@playwright/test";
import { HotelApp } from "../pom/mobile/hotel/v1/hotelapp";
import { MainApp } from "../pom/mobile/main/v1/mainapp";



export default class MobileApp {
    readonly page: Page;
    readonly hotelApp:any;
    readonly mainApp:any;


    constructor(page: Page) { 
        this.mainApp = new MainApp(page)
        this.hotelApp = new HotelApp(page);    
    }
  }