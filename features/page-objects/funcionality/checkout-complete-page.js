import checkoutCompletePage from "../locators/checkout-complete-page.js"
import { expect as expectWdio } from "@wdio/globals";
import { expect as expectChai } from "chai";


export async function checkCheckoutCompletePage() {

    expectWdio(await checkoutCompletePage.checkoutCompletePageHeader()).toBeDisplayed();
    expectChai(await (await checkoutCompletePage.checkoutCompletePageHeader()).getText()).to.equal('Swag Labs');
    expectWdio(await checkoutCompletePage.checkoutCompletePageTitle()).toBeDisplayed();
    expectChai(await (await checkoutCompletePage.checkoutCompletePageTitle()).getText()).to.equal('Checkout: Complete!');
    expectWdio(await checkoutCompletePage.burgerMenuButton()).toBeClickable();
    expectWdio(await checkoutCompletePage.checklistImage()).toBeDisplayed();
    expectWdio(await checkoutCompletePage.completeHeader()).toBeDisplayed();
    expectChai(await (await checkoutCompletePage.completeHeader()).getText()).to.equal('Thank you for your order!');
    expectWdio(await checkoutCompletePage.completeText()).toBeDisplayed();
    expectChai(await (await checkoutCompletePage.completeText()).getText()).to.equal('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    expectWdio(await checkoutCompletePage.backHomeButton()).toBeDisplayed();
    expectWdio(await checkoutCompletePage.backHomeButton()).toBeClickable();
    expectWdio(await checkoutCompletePage.checkoutCompleteFooter()).toBeDisplayed();
    expectChai(await (await checkoutCompletePage.checkoutCompleteFooter()).getText()).to.equal('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');

}

export async function clickBackToHomeButton() {

    await (await checkoutCompletePage.backHomeButton()).click();

}