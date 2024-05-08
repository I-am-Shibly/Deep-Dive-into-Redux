import { combineReducers } from 'redux';
import { todoReducer } from './todoSlice/todoReducer';
import { filterReducer } from './filterSlice/filterReducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
