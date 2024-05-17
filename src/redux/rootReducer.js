import { combineReducers } from 'redux';
import { bookReducer } from './bookSlice/bookReducer';
import { filterReducer } from './filterSlice/filterReducer';

export const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});
