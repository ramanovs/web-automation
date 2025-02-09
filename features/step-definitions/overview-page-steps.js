import { Then } from "@wdio/cucumber-framework"; 
import * as overviewPage from "../page-objects/funcionality/overview-page.js";


Then('User Redirected to Overview Page', async function () {
    await overviewPage.checkOverviewPage();
});