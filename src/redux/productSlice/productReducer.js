import { ADD_ITEM, DECREASE_QTY, INCREASE_QTY } from './actionTypes';

const initialState = [];

const newId = (array) => {
  const maxId = array.reduce((maxId, state) => Math.max(maxId, state.id), 0);
  return maxId + 1;
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: newId(state),
          data: action.payload,
        },
      ];

    case INCREASE_QTY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            data: {
              ...product.data,
              qty: product.data.qty + action.payload.qty,
            },
          };
        }
        return product;
      });

    case DECREASE_QTY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            data: {
              ...product.data,
              qty: Math.max(product.data.qty - action.payload.qty, 0),
            },
          };
        }

        return product;
      });

    default:
      return state;
  }
};
