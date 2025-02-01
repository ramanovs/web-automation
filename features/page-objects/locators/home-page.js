class HomePage {
    async homePageHeader() {
        return await $('[class="app_logo"]');
    }
    async homePageTitle() {
        return await $('[class="title"]');
    }
    async burgerMenuButton() {
        return await $('[id="react-burger-menu-btn"]');
    }
    async shoppingCartButton() {
        return await $('[data-test="shopping-cart-link"]');
    }
    async inventoryItemName(index) {
        return await $$('[data-test="inventory-item-name"]')[index];
    }
    async inventoryItemDesc(index) {
        return await $$('[data-test="inventory-item-desc"]')[index];
    }
    async inventoryItemPrice(index) {
        return await $$('[data-test="inventory-item-price"]')[index];
    }
    async inventoryItemImage(index){
        return await $$('[class="inventory_item_img"]')[index];
    }
    async sauceLabsBackpackImage() {
        return await $('[data-test="inventory-item-sauce-labs-backpack-img"]');
    }
    async sauceLabsBikeLightImage(){
        return await $('[data-test="inventory-item-sauce-labs-bike-light-img"]');
    }
    async sauceLabsBoltTshirtImage(){
        return await $('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]');
    }
    async sauceLabsFleeceJacketIamge(){
        return await $('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]');
    }
    async sauceLabsOnesieImage(){
        return await $('[data-test="inventory-item-sauce-labs-onesie-img"]');
    }
    async testAllTheThingsTshirtImage(){
        return await $('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]');
    }
    async addToCartButton(index) {
        return await $$('[class="btn btn_primary btn_small btn_inventory "]')[index];
    }
    async homePageFooter() {
        return await $('[data-test="footer-copy"]');
    }

}
export default new HomePage();
