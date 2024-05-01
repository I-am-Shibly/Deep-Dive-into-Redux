import { DINCREMENT, DDECREMENT } from './actionTypes';

export const increase = () => {
  return {
    type: DINCREMENT,
  };
};

export const decrease = () => {
  return {
    type: DDECREMENT,
  };
};
