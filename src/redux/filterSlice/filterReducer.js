import { FILTER_BY_COLOR, FILTER_BY_STATUS } from './actionTypes';

const initialState = {
  status: 'All',
  colors: [],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_COLOR:
      switch (action.payload.changeType) {
        case 'Added':
          return {
            ...state,
            colors: [...state.colors, action.payload.color],
          };

        case 'Removed':
          return {
            ...state,
            colors: state.colors.filter(
              (color) => color !== action.payload.color
            ),
          };

        default:
          return state;
      }

    case FILTER_BY_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
