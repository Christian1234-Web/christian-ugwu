
export const changeProductName = (name) => {
    return {
        type: 'change_product_name',
        payload: name,
    };

};
export const changeCurrencyName = (name) => {
    return {
        type: 'change_currency_name',
        payload: name,
    };

};
export const changePriceIndex = (name) => {
    return {
        type: 'change_price_index',
        payload: name,
    };

};
