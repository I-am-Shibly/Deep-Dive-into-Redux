import { ADD_ITEM, DECREASE_QTY, INCREASE_QTY } from './actionTypes';

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    payload: data,
  };
};

export const increaseQty = (id, qty) => {
  return {
    type: INCREASE_QTY,
    payload: {
      id,
      qty,
    },
  };
};

export const decreaseQty = (id, qty) => {
  return {
    type: DECREASE_QTY,
    payload: {
      id,
      qty,
    },
  };
};
