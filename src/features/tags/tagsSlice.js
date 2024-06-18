import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTags } from './tagsApi';

const initialState = {
  loading: false,
  tags: [],
  isError: false,
  error: '',
};

export const getTags = createAsyncThunk('tags/getTags', async () => {
  return await fetchTags();
});

const TagSlice = createSlice({
  name: 'tags',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.loading = true;
        state.tags = [];
        state.isError = false;
        state.error = '';
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
        state.isError = false;
        state.error = '';
      })
      .addCase(getTags.rejected, (state, action) => {
        state.loading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default TagSlice.reducer;
