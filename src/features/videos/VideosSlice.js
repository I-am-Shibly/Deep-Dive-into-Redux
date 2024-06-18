import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchVideos } from './VideosApi';

export const getVideos = createAsyncThunk('videos/getVideo', async () => {
  const videos = await fetchVideos();
  return videos;
});

const initialState = {
  loading: false,
  videos: [],
  isError: false,
  error: '',
};
const videosSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.loading = true;
        state.videos = [];
        state.isError = false;
        state.error = '';
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload
        state.isError = false;
        state.error = '';
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.loading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default videosSlice.reducer;
