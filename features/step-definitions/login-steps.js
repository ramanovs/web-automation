import { Given, When } from "@wdio/cucumber-framework";
import * as loginPage from "../page-objects/funcionality/login-page.js";


Given('Open URL {string}', async function (url) {
    await loginPage.LoginPageSaucedemo(url);
});

When('User Login using valid credentials', async function () {
    await loginPage.UserLogin();
});