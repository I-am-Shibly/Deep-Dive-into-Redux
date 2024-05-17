import { FILTER_BY_SEARCH } from './actionTypes';

export const filterBySearch = (text) => {
  return {
    type: FILTER_BY_SEARCH,
    payload: text,
  };
};
