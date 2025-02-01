class OverviewPage {
    async overviewPageHeader() {
        return await $('[class="app_logo"]');
    }
    async overviewPageTitle() {
        return await $('[class="title"]');
    }
    async burgerMenuButton() {
        return await $('[id="react-burger-menu-btn"]');
    }
    async cartQtyLabel() {
        return await $('[data-test="cart-quantity-label"]');
    }
    async cartDescLabel() {
        return await $('[data-test="cart-desc-label"]');
    }
    async itemQuantity() {
        return await $('[data-test="item-quantity"]');
    }
    async itemName() {
        return await $('[data-test="inventory-item-name"]');
    }
    async itemDesc() {
        return await $('[data-test="inventory-item-desc"]');
    }
    async itemPrice() {
        return await $('[data-test="inventory-item-price"]')
    }
    async paymentInfoLabel() {
        return await $('[data-test="payment-info-label"]');
    }
    async paymentInfoValue() {
        return await $('[data-test="payment-info-value"]');
    }
    async shippingInfoLabel() {
        return await $('[data-test="shipping-info-label"]');
    }
    async shippingInfoValue() {
        return await $('[data-test="shipping-info-value"]')
    }
    async priceTotalLabel() {
        return await $('[data-test="total-info-label"]');
    }
    async subTotalValue() {
        return await $('[data-test="subtotal-label"]');
    }
    async taxValue() {
        return await $('[data-test="tax-label"]');
    }
    async priceTotalValue() {
        return await $('[data-test="total-label"]');
    }
    async cancelButton() {
        return await $('[data-test="cancel"]');
    }
    async finishButton() {
        return await $('[data-test="finish"]')
    }
    async OverviewPagePageFooter() {
        return await $('[data-test="footer-copy"]');
    }

}

export default new OverviewPage();