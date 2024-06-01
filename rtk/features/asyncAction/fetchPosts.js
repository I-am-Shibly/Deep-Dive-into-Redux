const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  todos: [],
  error: '',
};

const fetchTodos = createAsyncThunk('posts/fetchTodos', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  );

  const todos = await response.json();
  return todos;
});

const todoSLice = createSlice({
  name: 'fetchTodos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = '';
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = true;
        state.todos = [];
        state.error = action.error.message;
      });
  },
});

module.exports = todoSLice.reducer;
module.exports.fetchTodos = fetchTodos;
