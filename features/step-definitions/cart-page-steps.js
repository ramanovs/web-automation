import { Then } from "@wdio/cucumber-framework"; 
import * as cartPage from "../page-objects/funcionality/cart-page.js";


Then('User Redirected to Shopping Cart Page', async function () {
    await cartPage.checkShoppingCartPage();
});