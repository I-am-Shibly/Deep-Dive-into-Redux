import { FILTER_BY_COLOR, FILTER_BY_STATUS } from './actionTypes';

export const filterByStatus = (status) => {
  return {
    type: FILTER_BY_STATUS,
    payload: status,
  };
};

export const filterByColor = (color, changeType) => {
  return {
    type: FILTER_BY_COLOR,
    payload: {
      color,
      changeType,
    },
  };
};
