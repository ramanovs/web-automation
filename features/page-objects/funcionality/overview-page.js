import overviewPage from "../locators/overview-page.js";
import { expect as expectWdio } from "@wdio/globals";
import { expect as expectChai } from "chai";
import { expectedWords } from "../../helpers/expect.js"
import { calculatePriceWithTax } from "../../helpers/calculation.js"


export async function checkOverviewPage() {

    expectWdio(await overviewPage.overviewPageHeader()).toBeDisplayed();
    expectChai(await (await overviewPage.overviewPageHeader()).getText()).to.equal('Swag Labs');
    expectWdio(await overviewPage.overviewPageTitle()).toBeDisplayed();
    expectChai(await (await overviewPage.overviewPageTitle()).getText()).to.equal('Checkout: Overview');
    expectWdio(await overviewPage.burgerMenuButton()).toBeClickable();
    expectWdio(await overviewPage.cartQtyLabel()).toBeDisplayed();
    expectChai(await (await overviewPage.cartQtyLabel()).getText()).to.equal('QTY');
    expectWdio(await overviewPage.cartDescLabel()).toBeDisplayed();
    expectChai(await (await overviewPage.cartDescLabel()).getText()).to.equal('Description');
    expectWdio(await overviewPage.itemQuantity()).toBeDisplayed();
    expectChai(await (await overviewPage.itemQuantity()).getText()).to.equal('1');
    expectWdio(await overviewPage.itemName()).toBeDisplayed();
    expectChai(await (await overviewPage.itemName()).getText()).to.equal(expectedWords.expectedInventoryItemName[0]);
    expectWdio(await overviewPage.itemDesc()).toBeDisplayed();
    expectChai(await (await overviewPage.itemDesc()).getText()).to.equal(expectedWords.expectedInventoryItemDesc[0]);
    expectWdio(await overviewPage.itemPrice()).toBeDisplayed();
    expectChai(await (await overviewPage.itemPrice()).getText()).to.equal(expectedWords.expectedInventoryItemPrice[0]);
    expectWdio(await overviewPage.paymentInfoLabel()).toBeDisplayed();
    expectChai(await (await overviewPage.paymentInfoLabel()).getText()).to.equal('Payment Information:');
    expectWdio(await overviewPage.paymentInfoValue()).toBeDisplayed();
    expectChai(await (await overviewPage.paymentInfoValue()).getText()).to.equal('SauceCard #31337');
    expectWdio(await overviewPage.shippingInfoLabel()).toBeDisplayed();
    expectChai(await (await overviewPage.shippingInfoLabel()).getText()).to.equal('Shipping Information:');
    expectWdio(await overviewPage.shippingInfoValue()).toBeDisplayed();
    expectChai(await (await overviewPage.shippingInfoValue()).getText()).to.equal('Free Pony Express Delivery!');
    expectWdio(await overviewPage.priceTotalLabel()).toBeDisplayed();
    expectChai(await (await overviewPage.priceTotalLabel()).getText()).to.equal('Price Total');
    expectWdio(await overviewPage.subTotalValue()).toBeDisplayed();
    expectChai(await (await overviewPage.subTotalValue()).getText()).to.equal(`Item total: ${expectedWords.expectedInventoryItemPrice[0]}`);
    const itemPrice = expectedWords.expectedInventoryItemPrice[0];
    const { tax, totalPrice } = calculatePriceWithTax(itemPrice);
    expectWdio(await overviewPage.taxValue()).toBeDisplayed();
    expectChai(await (await overviewPage.taxValue()).getText()).to.equal(`Tax: $${tax}`);
    expectWdio(await overviewPage.priceTotalValue()).toBeDisplayed();
    expectChai(await (await overviewPage.priceTotalValue()).getText()).to.equal(`Total: $${totalPrice}`);
    expectWdio(await overviewPage.cancelButton()).toBeDisplayed();
    expectWdio(await overviewPage.cancelButton()).toBeClickable();
    expectWdio(await overviewPage.finishButton()).toBeDisplayed();
    expectWdio(await overviewPage.finishButton()).toBeClickable();
    expectWdio(await overviewPage.OverviewPagePageFooter()).toBeDisplayed();
    expectChai(await (await overviewPage.OverviewPagePageFooter()).getText()).to.equal('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    await (await overviewPage.finishButton()).click();

}