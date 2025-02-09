import { Then } from "@wdio/cucumber-framework"; 
import * as homePage from "../page-objects/funcionality/home-page.js";


Then('User success redirected to Homepage', async function () {
    await homePage.checkHomepage();
    
});

Then('User Choose Item', async function () {
    await homePage.selectItemAndClickCartButton();
})