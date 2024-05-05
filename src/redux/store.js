import { createStore, applyMiddleware } from 'redux';
import { reducerFunction } from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(reducerFunction, composeWithDevTools());
