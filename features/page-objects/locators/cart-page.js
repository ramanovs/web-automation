class CartPage {
    async cartPageHeader() {
        return await $('[class="app_logo"]');
    }
    async cartPageTitle() {
        return await $('[class="title"]');
    }
    async burgerMenuButton() {
        return await $('[id="react-burger-menu-btn"]');
    }
    async shoppingCartButton() {
        return await $('[data-test="shopping-cart-link"]');
    }
    async cartQtyLabel() {
        return await $('[data-test="cart-quantity-label"]');
    }
    async cartDescLabel() {
        return await $('[data-test="cart-desc-label"]');
    }
    async itemName() {
        return await $('[data-test="inventory-item-name"]');
    }
    async itemDesc() {
        return await $('[data-test="inventory-item-desc"]');
    }
    async itemPrice() {
        return await $('[data-test="inventory-item-price"]');
    }
    async removeItemButton() {
        return await $('[data-test="remove-sauce-labs-backpack"]');
    }
    async continueShoppingButton() {
        return await $('[data-test="continue-shopping"]');
    }
    async checkoutButton() {
        return await $('[data-test="checkout"]');
    }
    async cartPageFooter() {
        return await $('[data-test="footer-copy"]');
    }

}


export default new CartPage();