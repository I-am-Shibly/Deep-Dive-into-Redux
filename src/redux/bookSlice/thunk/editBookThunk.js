import { editBook } from '../actions';

export const editBookThunk = (bookData) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/books/${bookData.id}`, {
    method: 'PATCH',
    body: JSON.stringify(bookData),
    headers: {
      'Content-type': 'application/json; charset = UTF-8',
    },
  });
  const updatedBook = await response.json();
  dispatch(editBook(updatedBook));
};
