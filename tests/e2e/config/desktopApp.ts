import { Page } from "@playwright/test";
import { HotelApp } from "../pom/desktop/hotel/v1/hotelapp";
import { HotelAppV2 } from "../pom/desktop/hotel/v2/hotelapp";
import { MainApp } from "../pom/desktop/main/v1/mainapp";


export default class DesktopApp {
    readonly page: Page;
    readonly hotelApp:any;
    readonly mainApp:any;


    constructor(page: Page) { 
        this.mainApp = new MainApp(page)
        this.hotelApp = process.env.HotelApp_Version?.toLowerCase() =='v2' ? new HotelAppV2(page) : new HotelApp(page);    
    }
  }