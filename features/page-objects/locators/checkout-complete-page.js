class CheckoutCompletePage {
    async checkoutCompletePageHeader() {
        return await $('[class="app_logo"]');
    }
    async checkoutCompletePageTitle() {
        return await $('[class="title"]');
    }
    async burgerMenuButton() {
        return await $('[id="react-burger-menu-btn"]');
    }
    async shoppingCartButton() {
        return await $('[data-test="shopping-cart-link"]');
    }
    async checklistImage() {
        return await $('[data-test="pony-express"]');
    }
    async completeHeader() {
        return await $('[data-test="complete-header"]');
    }
    async completeText() {
        return await $('[data-test="complete-text"]');
    }
    async backHomeButton() {
        return await $('[data-test="back-to-products"]');
    }
    async checkoutCompleteFooter() {
        return await $('[data-test="footer-copy"]');
    }


}

export default new CheckoutCompletePage();