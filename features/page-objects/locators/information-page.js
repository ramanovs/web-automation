class InformationPage {
    async informationPageHeader() {
        return await $('[class="app_logo"]');
    }
    async informationPageTitle() {
        return await $('[class="title"]');
    }
    async burgerMenuButton() {
        return await $('[id="react-burger-menu-btn"]');
    }
    async shoppingCartButton() {
        return await $('[data-test="shopping-cart-link"]');
    }
    async checkoutInfoSection() {
        return await $('[class="checkout_info"]');
    }
    async firstNameField() {
        return await $('[id="first-name"]');
    }
    async lastNameField() {
        return await $('[id="last-name"]');
    }
    async postalCodeField() {
        return await $('[id="postal-code"]');
    }
    async cancelButton() {
        return await $('[id="cancel"]');
    }
    async continueButton() {
        return await $('[data-test="continue"]')
    }
    async InformationPageFooter() {
        return await $('[data-test="footer-copy"]');
    }


}

export default new InformationPage();