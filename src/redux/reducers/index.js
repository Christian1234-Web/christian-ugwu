import { combineReducers } from "redux";
import { cartItemsReducer, addToCartReducer, removeFromCartReducer } from "./cartReducer";
import { newCurrencyName, newProductName, newPriceIndex } from "./globalVariables";


const reducers = combineReducers({
    allCartItems: cartItemsReducer,
    addToCart: addToCartReducer,
    removeCartItem: removeFromCartReducer,
    newCurrencyName,
    newProductName,
    newPriceIndex
});

export default reducers;