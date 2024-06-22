import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBlogs } from './blogApi';

const initialState = {
  loading: false,
  blogs: [],
  isError: false,
  error: '',
};

export const getBlogs = createAsyncThunk('blogs', async () => {
  return await fetchBlogs();
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    reset: (state) => {
      state.blogs = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        state.isError = false;
        state.error = '';
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
export const { reset } = blogSlice.actions;
