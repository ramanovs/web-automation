import * as informationPage from "../page-objects/funcionality/information-page.js";
import { Then } from "@wdio/cucumber-framework"; 


Then('User Redirected to Information Page', async function () {
    await informationPage.checkYourInformationPage();
});
