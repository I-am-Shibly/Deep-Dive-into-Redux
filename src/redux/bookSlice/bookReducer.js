import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, FETCH_BOOK } from './actionTypes';

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case FETCH_BOOK:
      return action.payload;

    case EDIT_BOOK:
      return state.map((book) => {
        if (Number(book.id) === Number(action.payload.id)) {
          return { ...book, ...action.payload };
        }
        return book;
      });

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};
