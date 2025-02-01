import { Given, When, Then } from "@wdio/cucumber-framework";
import * as checkout from "../page-objects/funcionality/checkout.js";

Given('Open URL {string}', async function (url) {
    await checkout.LoginPageSaucedemo(url);
});

When('User Login using valid credentials', async function () {
    await checkout.UserLogin();
});

Then('User success redirected to Homepage And Choose Item', async function () {
    await checkout.checkHomepage();
    await checkout.selectItemAndClickCartButton();
});

Then('User Redirected to Shopping Cart Page', async function () {
    await checkout.checkShoppingCartPage();
});

Then('User Redirected to Information Page', async function () {
    await checkout.checkYourInformationPage();
});

Then('User Redirected to Overview Page', async function () {
    await checkout.checkOverviewPage();
});

Then('User Redirected to Checkout Complete Page', async function () {
    await checkout.checkCheckoutCompletePage();
    
});
Then('User Click Back To Home Button', async function () {
    await checkout.clickBackToHomeButton();
    await checkout.checkHomepage();
    
});