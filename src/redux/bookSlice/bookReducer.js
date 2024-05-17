import { EDIT_BOOK, FETCH_BOOK } from './actionTypes';

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;

    case EDIT_BOOK:
      return state.map((book) => {
        if (Number(book.id) === Number(action.payload.id)) {
          return { ...book, ...action.payload };
        }
        return book;
      });

    default:
      return state;
  }
};
