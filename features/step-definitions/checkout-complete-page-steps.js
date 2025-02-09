import { Then } from "@wdio/cucumber-framework"; 
import * as checkoutCompletePage from "../page-objects/funcionality/checkout-complete-page.js";


Then('User Redirected to Checkout Complete Page', async function () {
    await checkoutCompletePage.checkCheckoutCompletePage();
    
});
Then('User Click Back To Home Button', async function () {
    await checkoutCompletePage.clickBackToHomeButton();
    
});