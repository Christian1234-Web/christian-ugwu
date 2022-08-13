

const productState = {
    productName: ''
};
const currencyState = {
    currencyName: '$'
};
const priceState = {
    priceIndex: 0
};

export const newProductName = (state = productState, { type, payload }) => {
    switch (type) {
        case 'change_product_name':
            return { ...state, productName: payload };
        default:
            return state;
    }
}
export const newCurrencyName = (state = currencyState, { type, payload }) => {
    switch (type) {
        case 'change_currency_name':

            return { ...state, currencyName: payload };

        default:
            return state;
    }
}
export const newPriceIndex = (state = priceState, { type, payload }) => {
    switch (type) {
        case 'change_price_index':

            return { ...state, priceIndex: payload };

        default:
            return state;
    }
}