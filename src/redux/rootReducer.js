import { combineReducers } from 'redux';
import { counterReducer } from './staticCounter/counterReducer';
import { dynamicCounterReducer } from './dynamicCounter/dynamicCounterReducer';

export const rootReducer = combineReducers({
  StaticCounter: counterReducer,
  DynamicCounter: dynamicCounterReducer,
});
