import loginPage from "../locators/login-page.js";
import homePage from "../locators/home-page.js";
import cartPage from "../locators/cart-page.js";
import informationPage from "../locators/information-page.js";
import overviewPage from "../locators/overview-page.js";
import checkoutCompletePage from "../locators/checkout-complete-page.js"
import { browser, expect as expectWdio } from "@wdio/globals";
import { expect as expectChai } from "chai";



export async function LoginPageSaucedemo(url) {

    await browser.url(url);
    expectWdio(await (await loginPage.passwordInformation()).waitForDisplayed({ timeout: 3000 }));
    expectChai(await browser.getUrl()).to.equal("https://www.saucedemo.com/");
    expectWdio(await loginPage.loginLogo()).toBeDisplayed();
    expectChai(await (await loginPage.loginLogo()).getText()).to.equal("Swag Labs");
    expectWdio(await loginPage.usernameField()).toBeDisplayed();
    expectWdio(await loginPage.passwordField()).toBeDisplayed();
    expectWdio(await loginPage.loginButton()).toBeDisplayed();
    expectChai(await (await loginPage.loginInformationHeader()).getText()).to.equal("Accepted usernames are:");
    expectWdio(await loginPage.loginInformation()).toBeDisplayed();

    const acceptedUsernameElement = await loginPage.loginInformation();
    const acceptedUser = await acceptedUsernameElement.getText();
    const username = acceptedUser
        .replace('Accepted usernames are:', '')
        .split('\n')
        .filter(Boolean);

    const expectedUsername = [
        "standard_user",
        "locked_out_user",
        "problem_user",
        "performance_glitch_user",
        "error_user",
        "visual_user"
    ]

    for (let index = 0; index < expectedUsername.length; index++) {
        expectChai(username[index]).to.equal(expectedUsername[index]);
    }

    expectChai(await (await loginPage.passwordInformationHeader()).getText()).to.equal('Password for all users:');
    const passwordCredentialsElement = await loginPage.passwordInformation();
    const passwordCredential = await passwordCredentialsElement.getText();
    const password = passwordCredential
        .replace('Password for all users:', '')
        .split('\n')[1]

    expectChai(password).to.equal('secret_sauce');

}


export async function UserLogin() {

    await (await loginPage.usernameField()).addValue('standard_user');
    await (await loginPage.passwordField()).addValue('secret_sauce');
    await (await loginPage.loginButton()).click();

}

const expectedInventoryItemName = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Onesie",
    "Test.allTheThings() T-Shirt (Red)"
]

const expectedInventoryItemDesc = [
    "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
    "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
]

const expectedInventoryItemPrice = [
    "$29.99",
    "$9.99",
    "$15.99",
    "$49.99",
    "$7.99",
    "$15.99"
]


export async function checkHomepage() {

    expectWdio(await homePage.homePageHeader()).toBeDisplayed();
    expectChai(await (await homePage.homePageHeader()).getText()).to.equal('Swag Labs');
    expectWdio(await homePage.homePageTitle()).toBeDisplayed();
    expectChai(await (await homePage.homePageTitle()).getText()).to.equal('Products');
    expectWdio(await homePage.burgerMenuButton()).toBeClickable();
    expectWdio(await homePage.shoppingCartButton()).toBeClickable();

    for (let index = 0; index < expectedInventoryItemName.length; index++) {
        expectChai(await (await homePage.inventoryItemName(index)).getText()).to.equal(expectedInventoryItemName[index]);
    }

    for (let index = 0; index < 12; index++){
        expectWdio(await homePage.inventoryItemImage(index)).toBeDisplayed();
        expectWdio(await homePage.inventoryItemImage(index)).toBeClickable();
    }

    for (let index = 0; index < expectedInventoryItemDesc.length; index++) {
        expectChai(await (await homePage.inventoryItemDesc(index)).getText()).to.equal(expectedInventoryItemDesc[index]);
    }

    for (let index = 0; index < expectedInventoryItemPrice.length; index++) {
        expectChai(await (await homePage.inventoryItemPrice(index)).getText()).to.equal(expectedInventoryItemPrice[index]);
    }

    for (let index = 0; index < 6; index++) {
        expectWdio(await homePage.addToCartButton(index)).toBeDisplayed();
        expectWdio(await homePage.addToCartButton(index)).toBeClickable();
    }

    expectChai(await (await homePage.sauceLabsBackpackImage()).getAttribute('src')).to.equal('/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
    expectChai(await (await homePage.sauceLabsBikeLightImage()).getAttribute('src')).to.equal('/static/media/bike-light-1200x1500.37c843b0.jpg');
    expectChai(await (await homePage.sauceLabsBoltTshirtImage()).getAttribute('src')).to.equal('/static/media/bolt-shirt-1200x1500.c2599ac5.jpg');
    expectChai(await (await homePage.sauceLabsFleeceJacketIamge()).getAttribute('src')).to.equal('/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg');
    expectChai(await (await homePage.sauceLabsOnesieImage()).getAttribute('src')).to.equal('/static/media/red-onesie-1200x1500.2ec615b2.jpg');
    expectChai(await (await homePage.testAllTheThingsTshirtImage()).getAttribute('src')).to.equal('/static/media/red-tatt-1200x1500.30dadef4.jpg');
    expectChai(await (await homePage.homePageFooter()).getText()).to.equal('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
}

export async function selectItemAndClickCartButton() {

    await (await homePage.addToCartButton(0)).click();
    await (await homePage.shoppingCartButton()).click();

}

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
    expectChai(await (await cartPage.itemName()).getText()).to.equal(expectedInventoryItemName[0]);
    expectWdio(await cartPage.itemDesc()).toBeDisplayed();
    expectChai(await (await cartPage.itemDesc()).getText()).to.equal(expectedInventoryItemDesc[0]);
    expectWdio(await cartPage.itemPrice()).toBeDisplayed();
    expectChai(await (await cartPage.itemPrice()).getText()).to.equal(expectedInventoryItemPrice[0]);
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

export async function checkYourInformationPage() {

    expectWdio(await informationPage.informationPageHeader()).toBeDisplayed();
    expectChai(await (await informationPage.informationPageHeader()).getText()).to.equal('Swag Labs');
    expectWdio(await informationPage.informationPageTitle()).toBeDisplayed();
    expectChai(await (await informationPage.informationPageTitle()).getText()).to.equal('Checkout: Your Information');
    expectWdio(await informationPage.burgerMenuButton()).toBeClickable();
    expectWdio(await informationPage.shoppingCartButton()).toBeDisplayed();
    expectWdio(await informationPage.checkoutInfoSection()).toBeDisplayed();
    expectWdio(await informationPage.firstNameField()).toBeDisplayed();
    expectWdio(await informationPage.lastNameField()).toBeDisplayed();
    expectWdio(await informationPage.postalCodeField()).toBeDisplayed();
    expectWdio(await informationPage.cancelButton()).toBeDisplayed();
    expectWdio(await informationPage.cancelButton()).toBeClickable();
    expectChai(await (await informationPage.cancelButton()).getText()).to.equal('Cancel');
    expectWdio(await informationPage.continueButton()).toBeDisplayed();
    expectWdio(await informationPage.continueButton()).toBeClickable();
    expectChai(await (await informationPage.InformationPageFooter()).getText()).to.equal('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    await (await informationPage.firstNameField()).addValue('Rama')
    await (await informationPage.lastNameField()).addValue('Saputra')
    await (await informationPage.postalCodeField()).addValue('16426')
    await (await informationPage.continueButton()).click();

}

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
    expectChai(await (await overviewPage.itemName()).getText()).to.equal(expectedInventoryItemName[0]);
    expectWdio(await overviewPage.itemDesc()).toBeDisplayed();
    expectChai(await (await overviewPage.itemDesc()).getText()).to.equal(expectedInventoryItemDesc[0]);
    expectWdio(await overviewPage.itemPrice()).toBeDisplayed();
    expectChai(await (await overviewPage.itemPrice()).getText()).to.equal(expectedInventoryItemPrice[0]);
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
    expectChai(await (await overviewPage.subTotalValue()).getText()).to.equal(`Item total: ${expectedInventoryItemPrice[0]}`);
    const priceToFloat = parseFloat(expectedInventoryItemPrice[0].replace("$", ""));
    const taxCalculation = parseFloat((priceToFloat * 0.0801).toFixed(2));
    const taxValue = taxCalculation.toFixed(2);
    expectWdio(await overviewPage.taxValue()).toBeDisplayed();
    expectChai(await (await overviewPage.taxValue()).getText()).to.equal(`Tax: $${taxValue}`);
    const priceTotalValueCalculation = priceToFloat + taxCalculation;
    const priceTotalValue = priceTotalValueCalculation.toFixed(2);
    expectWdio(await overviewPage.priceTotalValue()).toBeDisplayed();
    expectChai(await (await overviewPage.priceTotalValue()).getText()).to.equal(`Total: $${priceTotalValue}`);
    expectWdio(await overviewPage.cancelButton()).toBeDisplayed();
    expectWdio(await overviewPage.cancelButton()).toBeClickable();
    expectWdio(await overviewPage.finishButton()).toBeDisplayed();
    expectWdio(await overviewPage.finishButton()).toBeClickable();
    expectWdio(await overviewPage.OverviewPagePageFooter()).toBeDisplayed();
    expectChai(await (await overviewPage.OverviewPagePageFooter()).getText()).to.equal('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    await (await overviewPage.finishButton()).click();

}

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