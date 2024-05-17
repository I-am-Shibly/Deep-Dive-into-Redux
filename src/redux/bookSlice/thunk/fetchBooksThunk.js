import { fetchBooks } from '../actions';

export const fetchBooksThunk = async (dispatch) => {
  const response = await fetch('http://localhost:9000/books');
  const books = await response.json();

  dispatch(fetchBooks(books));
};
