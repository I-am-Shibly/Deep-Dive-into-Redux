export const addBookThunk = (bookData) => async (dispatch) => {
  const response = await fetch('http://localhost:9000/books', {
    method: 'POST',
    body: {
      bookData: JSON.stringify(bookData),
    },
  });
};
