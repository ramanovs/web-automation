export const checkoutHelper = {
    selectedItem: null
}

export function calculatePriceWithTax (itemPrice)  {
    const price = parseFloat(itemPrice.replace("$", ""));
    const taxRate = 0.0801
    const tax = parseFloat((price * taxRate).toFixed(2));
    const totalPrice = parseFloat((price + tax).toFixed(2));

    return {
        tax: tax.toFixed(2),
        totalPrice: totalPrice.toFixed(2)
    };
};
