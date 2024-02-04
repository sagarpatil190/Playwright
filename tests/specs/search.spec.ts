import { test, expect, type Page, defineConfig } from '@playwright/test';
import {SearchPage}  from '../pom/searchPage';
import { ResultPage } from '../pom/resultPage';
import { defaultSearchTerm } from '../testdata/hotelsTestData';


let searchPage:SearchPage;
let resultpage:ResultPage;

test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
    resultpage = new ResultPage(page);
   
});


test('User should able to search the hotel', async ({ page }) => {
    await page.goto('/');
    await searchPage.closeStartExploring();
    await searchPage.fillSearchData(defaultSearchTerm);
    await expect(await resultpage.getResultCount()).toBeGreaterThan(0);
});

test('api test', async ({request}) => {
    const response = await request.get(`https://catfact.ninja/fact`);
    const statusCode = response.status() //get the status code
    console.log(statusCode)
    const responseBody = JSON.parse(await response.text())
    console.log(responseBody);
    
});


test.afterEach(async ({ page }) => {
    if(page)
        page.close();
});