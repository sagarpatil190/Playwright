import { test, expect } from '../../config/fixtures';
import { defaultSearchTerm } from '../../testdata/hotelsTestData';






test('User should able to search the hotel', async ({ app }) => {
    await app.page.goto('https://www.airbnb.co.in/');
    await app.hotelApp.searchPage.fillSearchData(defaultSearchTerm);
    await expect(await app.hotelApp.resultPage.getResultCount()).toBeGreaterThan(0);
});

// test('api test', async ({request}) => {
//     const response = await request.get(`https://catfact.ninja/fact`);
//     const statusCode = response.status() //get the status code
//     console.log(statusCode)
//     const responseBody = JSON.parse(await response.text())
//     console.log(responseBody);
    
// });


test.afterEach(async ({ page }) => {
    if(page)
        page.close();
});