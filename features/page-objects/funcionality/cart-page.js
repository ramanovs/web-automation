import cartPage from "../locators/cart-page.js";
import { expectedWords } from "../../helpers/expect.js"
import { browser, expect as expectWdio } from "@wdio/globals";
import { expect as expectChai } from "chai";


export async function checkShoppingCartPage() {

    expectWdio(await cartPage.cartPageHeader()).toBeDisplayed();
    expectChai(await (await cartPage.cartPageHeader()).getText()).to.equal('Swag Labs');
    expectWdio(await cartPage.cartPageTitle()).toBeDisplayed();
    expectChai(await (await cartPage.cartPageTitle()).getText()).to.equal('Your Cart');
    expectWdio(await cartPage.burgerMenuButton()).toBeClickable();
    expectWdio(await cartPage.shoppingCartButton()).toBeDisplayed();
    expectWdio(await cartPage.cartQtyLabel()).toBeDisplayed();
    expectChai(await (await cartPage.cartQtyLabel()).getText()).to.equal('QTY');
    expectWdio(await cartPage.cartDescLabel()).toBeDisplayed();
    expectChai(await (await cartPage.cartDescLabel()).getText()).to.equal('Description');
    expectWdio(await cartPage.itemName()).toBeDisplayed();
    expectChai(await (await cartPage.itemName()).getText()).to.equal(expectedWords.expectedInventoryItemName[0]);
    expectWdio(await cartPage.itemDesc()).toBeDisplayed();
    expectChai(await (await cartPage.itemDesc()).getText()).to.equal(expectedWords.expectedInventoryItemDesc[0]);
    expectWdio(await cartPage.itemPrice()).toBeDisplayed();
    expectChai(await (await cartPage.itemPrice()).getText()).to.equal(expectedWords.expectedInventoryItemPrice[0]);
    expectWdio(await cartPage.removeItemButton()).toBeDisplayed();
    expectWdio(await cartPage.removeItemButton()).toBeClickable();
    expectChai(await (await cartPage.removeItemButton()).getText()).to.equal('Remove');
    expectWdio(await cartPage.continueShoppingButton()).toBeDisplayed();
    expectWdio(await cartPage.continueShoppingButton()).toBeClickable();
    expectChai(await (await cartPage.continueShoppingButton()).getText()).to.equal('Continue Shopping');
    expectWdio(await cartPage.checkoutButton()).toBeDisplayed();
    expectWdio(await cartPage.checkoutButton()).toBeClickable();
    expectChai(await (await cartPage.checkoutButton()).getText()).to.equal('Checkout');
    expectChai(await (await cartPage.cartPageFooter()).getText()).to.equal('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    await (await cartPage.checkoutButton()).click();

}