import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRelatedBlogs } from './relatedBlogsApi';

const initialState = {
  loading: false,
  relatedBlogs: [],
  isError: false,
  error: '',
};

export const getRelatedBlogs = createAsyncThunk(
  'relatedBlogs/getRelatedBlogs',
  async ({ tags, id }) => {
    const response = await fetchRelatedBlogs({ tags, id });
    return response;
  }
);

const relatedBlogsSlice = createSlice({
  name: 'relatedBlogs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRelatedBlogs.pending, (state) => {
        state.loading = true;
        state.relatedBlogs = [];
        state.isError = false;
        state.error = '';
      })
      .addCase(getRelatedBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.relatedBlogs = action.payload;
        state.isError = false;
        state.error = '';
      })
      .addCase(getRelatedBlogs.rejected, (state, action) => {
        state.loading = false;
        state.relatedBlogs = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default relatedBlogsSlice.reducer;
