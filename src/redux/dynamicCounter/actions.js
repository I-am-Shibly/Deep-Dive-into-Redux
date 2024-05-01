import { DINCREMENT, DDECREMENT } from './actionTypes';

export const increase = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

export const decrease = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
