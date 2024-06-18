import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRelatedVideos } from './relatedVideosApi';

const initialState = {
  loading: false,
  relatedVideos: [],
  isError: false,
  error: '',
};

export const getRelatedVideos = createAsyncThunk(
  'relatedVideos/getRelatedVideos',
  async ({ tags, id }) => {
    const response = await fetchRelatedVideos({ tags, id });
    return response;
  }
);

const relatedVideoSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRelatedVideos.pending, (state) => {
        state.loading = true;
        state.relatedVideos = [];
        state.isError = false;
        state.error = '';
      })
      .addCase(getRelatedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.relatedVideos = action.payload;
        state.isError = false;
        state.error = '';
      })
      .addCase(getRelatedVideos.rejected, (state, action) => {
        state.loading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default relatedVideoSlice.reducer;
