import informationPage from "../locators/information-page.js";
import { expect as expectWdio } from "@wdio/globals";
import { expect as expectChai } from "chai";



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