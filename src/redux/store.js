import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { customLogger } from './customLogger/logger';
import Logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(customLogger, Logger))
);
