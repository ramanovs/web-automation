import homePage from "../locators/home-page.js";
import { expectedWords } from "../../helpers/expect.js"
import { expect as expectWdio } from "@wdio/globals";
import { expect as expectChai } from "chai";


export async function checkHomepage() {

    expectWdio(await homePage.homePageHeader()).toBeDisplayed();
    expectChai(await (await homePage.homePageHeader()).getText()).to.equal('Swag Labs');
    expectWdio(await homePage.homePageTitle()).toBeDisplayed();
    expectChai(await (await homePage.homePageTitle()).getText()).to.equal('Products');
    expectWdio(await homePage.burgerMenuButton()).toBeClickable();
    expectWdio(await homePage.shoppingCartButton()).toBeClickable();

    for (let index = 0; index < expectedWords.expectedInventoryItemName.length; index++) {
        expectChai(await (await homePage.inventoryItemName(index)).getText()).to.equal(expectedWords.expectedInventoryItemName[index]);
    }

    for (let index = 0; index < 12; index++){
        expectWdio(await homePage.inventoryItemImage(index)).toBeDisplayed();
        expectWdio(await homePage.inventoryItemImage(index)).toBeClickable();
    }

    for (let index = 0; index < expectedWords.expectedInventoryItemDesc.length; index++) {
        expectChai(await (await homePage.inventoryItemDesc(index)).getText()).to.equal(expectedWords.expectedInventoryItemDesc[index]);
    }

    for (let index = 0; index < expectedWords.expectedInventoryItemPrice.length; index++) {
        expectChai(await (await homePage.inventoryItemPrice(index)).getText()).to.equal(expectedWords.expectedInventoryItemPrice[index]);
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