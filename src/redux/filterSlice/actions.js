import { FILTER_BY_MENU, FILTER_BY_SEARCH } from './actionTypes';

export const filterBySearch = (text) => {
  return {
    type: FILTER_BY_SEARCH,
    payload: text,
  };
};

export const filterByMenu = (menu) => {
  return {
    type: FILTER_BY_MENU,
    payload: menu,
  };
};
