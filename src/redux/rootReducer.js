import { combineReducers } from 'redux';
import { productReducer } from './productSlice/productReducer';
import { cartReducer } from './cartSlice/cartReducer';

export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
