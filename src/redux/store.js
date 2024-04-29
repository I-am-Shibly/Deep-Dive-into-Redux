import { createStore } from 'redux';
import { counterReducer } from './staticCounter/counterReducer';

export const store = createStore(counterReducer);
