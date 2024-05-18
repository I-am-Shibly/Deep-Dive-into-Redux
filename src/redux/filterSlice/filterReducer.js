import { FILTER_BY_MENU, FILTER_BY_SEARCH } from './actionTypes';

const initialState = {
  searchKey: '',
  menuItem: 'All',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_SEARCH:
      return { ...state, searchKey: action.payload.toLowerCase() || '' };

    case FILTER_BY_MENU:
      return { ...state, menuItem: action.payload };

    default:
      return state;
  }
};
