import { ADD_BOOK, EDIT_BOOK, FETCH_BOOK } from './actionTypes';

export const fetchBooks = (bookData) => {
  return {
    type: FETCH_BOOK,
    payload: bookData,
  };
};

export const addBookAction = (bookData) => {
  return {
    type: ADD_BOOK,
    payload: bookData,
  };
};

export const editBook = (bookData) => {
  return {
    type: EDIT_BOOK,
    payload: bookData,
  };
};
