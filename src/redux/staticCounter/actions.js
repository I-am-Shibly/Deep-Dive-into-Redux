import { INCREMENT, DECREMENT } from './actionTypes';

export const increase = () => {
  return {
    type: INCREMENT,
  };
};

export const decrease = () => {
  return {
    type: DECREMENT,
  };
};
