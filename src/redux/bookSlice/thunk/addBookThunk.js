import { addBookAction } from '../actions';

export const addBookThunk = (bookData) => async (dispatch) => {
  const response = await fetch('http://localhost:9000/books', {
    method: 'POST',
    body: JSON.stringify(bookData),
    headers: {
      'Content-type': 'application/json; charset = UTF-8',
    },
  });

  const addedBook = await response.json();
  console.log(addedBook);
  dispatch(addBookAction(addedBook));
};
