import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';

export const addToCart = (id, qty) => {
  return {
    type: ADD_TO_CART,
    payload: { id, qty },
  };
};

export const deleteFromCart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    payload: productId,
  };
};
