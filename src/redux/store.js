import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';

const customLogger =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    console.log(`action: ${JSON.stringify(action)}`);
    console.log(`current: ${JSON.stringify(getState())}`);

    console.log(
      `next state: ${JSON.stringify([action].reduce(rootReducer, getState()))}`
    );

    next(action);
  };

export const store = createStore(rootReducer, applyMiddleware(customLogger));
