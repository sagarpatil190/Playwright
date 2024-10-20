import { expect, type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly btnStartExploring: Locator;
  readonly inputWhere: Locator;
  readonly autosuggestDropdown: Locator;
  readonly autosuggestDropdownValue : Locator;
  readonly inputDate: Locator;
  readonly inputDateFrom: Locator;
  readonly inputDateTo: Locator;

  readonly inputGuest: Locator;
  readonly inputGuestAdult: Locator;
  readonly inputGuestChild: Locator;


  readonly btnSearch: Locator;

  constructor(page: Page) {
    this.page = page;

    this.btnStartExploring =  page.getByRole('button', { name: 'Start exploring' });
    this.inputWhere = page.getByTestId('structured-search-input-field-query');
    this.autosuggestDropdown = page.getByTestId('structured-search-input-field-query-panel');
    this.autosuggestDropdownValue = this.autosuggestDropdown.getByTestId("option-0");
    
    this.inputDate = page.getByTestId('structured-search-input-field-split-dates-0');
    this.inputDateFrom =  page.getByLabel('16, Tuesday, April');
    this.inputDateTo =  page.getByLabel('17, Wednesday, April');
    this.inputGuest =  page.getByTestId('structured-search-input-field-guests-button');
    this.inputGuestAdult =  page.getByTestId('stepper-adults-increase-button');
    this.inputGuestChild =  page.getByTestId('stepper-children-increase-button');
    this.btnSearch = page.getByTestId('structured-search-input-search-button');
}

   async closeStartExploring(){
    
    if(await this.btnStartExploring.isEnabled({ timeout: 30000 })){
        await this.btnStartExploring.click();
    }
   } 

   
  async fillSearchData(searchTerm:any) {

      await this.page.goto("/Talk:Main_Page");
    // await this.inputWhere.fill(searchTerm.keyword);
    
    // await expect(this.autosuggestDropdown).toBeVisible();
    // await this.autosuggestDropdownValue.click();
    
    // await this.inputDateFrom.click();
    // await this.inputDateTo.click();
    // await this.inputDateTo.click();
    
    // await this.inputGuest.click();
    // await this.inputGuestAdult.click();
    // await this.inputGuestChild.click();

    // await this.btnSearch.click();
    
  }

 
}