import {rootReducer} from '../rootReducer'

export const customLogger =
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