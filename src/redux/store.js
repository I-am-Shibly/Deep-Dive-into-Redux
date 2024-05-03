import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from './rootReducer';
import { customLogger } from './customLogger/logger';
import Logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(customLogger, Logger));
