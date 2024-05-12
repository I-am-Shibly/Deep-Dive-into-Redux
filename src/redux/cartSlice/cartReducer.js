import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';

const initialState = {
  productInfo: [],
  totalItems: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.productInfo.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedProductInfo = [...state.productInfo];
        updatedProductInfo[existingProductIndex].qty += action.payload.qty;

        return {
          ...state,
          productInfo: updatedProductInfo,
          totalItems: state.totalItems + action.payload.qty,
        };
      } else {
        return {
          ...state,
          productInfo: [
            ...state.productInfo,
            {
              id: action.payload.id,
              qty: action.payload.qty,
            },
          ],

          totalItems: state.totalItems + action.payload.qty,
        };
      }

    case DELETE_FROM_CART:
      // Filter out the deleted product
      const updatedProductInfo = state.productInfo.filter(
        (product) => product.id !== action.payload
      );

      // Calculate the new totalItems based on the updated productInfo
      const newTotalItems = updatedProductInfo.reduce(
        (total, product) => total + product.qty,
        0
      );

      return {
        ...state,
        productInfo: updatedProductInfo,
        totalItems: newTotalItems,
      };

    default:
      return state;
  }
};
