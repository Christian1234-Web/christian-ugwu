import { ActionTypes } from "../constants/constants";

const initialState = {
    cartItems: [],
    newCartItem: [],
    removeFromCart: {},

};
export const cartItemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CART_ITEMS:
            return { ...state, cartItems: payload };
        default:
            return state;
    }
}
export const addToCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_CART_ITEM:

            return { ...state, newCartItem: payload };

        default:
            return state;
    }
}
export const removeFromCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.REMOVE_CART_ITEM:

            return { ...state, removeFromCart: payload };

        default:
            return state;
    }
}