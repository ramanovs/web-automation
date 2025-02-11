import { Then } from "@wdio/cucumber-framework"; 
import * as homePage from "../page-objects/funcionality/home-page.js";


Then('User success redirected to Homepage', async function () {
    await homePage.checkHomepage();
    
});

Then('User add {string} to Cart', async function (item) {
    await homePage.selectItemAndClickCartButton(item);
})