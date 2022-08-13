import { ActionTypes } from "../constants/constants"


export const addToCart = (cart) => {
    return {
        type: ActionTypes.ADD_CART_ITEM,
            payload: cart,
    };
    
};
export const getCartItems = (cart) => {
    return {
        type: ActionTypes.GET_CART_ITEMS,
            payload: cart,
    };
    
};

export const deleteCartItem = (cart) => {
    return {
        type: ActionTypes.REMOVE_CART_ITEM,
            payload: cart,
    };
    
};