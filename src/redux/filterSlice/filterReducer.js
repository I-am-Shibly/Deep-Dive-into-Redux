import { FILTER_BY_SEARCH } from './actionTypes';

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_BY_SEARCH:
      return { searchKey: action.payload.toLowerCase() || '' };

    default:
      return state;
  }
};
