import { DINCREMENT, DDECREMENT } from './actionTypes';

const initialState = {
  count: 0,
};

export const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case DDECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};
