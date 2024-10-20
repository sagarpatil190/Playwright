import { test, expect } from '../../../fixtures/fixtures';
import { defaultSearchTerm } from '../../testdata/hotelsTestData';


test('User should able to search the hotel', { tag: ['@search'] }, async ({ orxe }) => {
    await orxe.app.mainApp.searchPage.fillSearchData(defaultSearchTerm);
    //await expect(await orxe.app.hotelApp.resultPage.getResultCount()).toBeGreaterThan(0);
});

test.afterEach(async ({ page }) => {
    if(page)
        page.close();
});