import { deleteBook } from '../actions';

export const deleteBookThunk = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset = UTF-8',
    },
  });

  const deletedBook = await response.json();
  dispatch(deleteBook(deletedBook.id));
};
