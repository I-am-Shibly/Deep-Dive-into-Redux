import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSingleVideo } from './VideoApi';

const initialState = {
  loading: false,
  video: {},
  isError: false,
  error: '',
};

export const getSingleVideo = createAsyncThunk('video/getVideo', async (id) => {
  return await fetchSingleVideo(id);
});

const VideoSlice = createSlice({
  name: 'video',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSingleVideo.pending, (state) => {
        state.loading = true;
        state.video = {};
        state.isError = false;
        state.error = '';
      })
      .addCase(getSingleVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload;
        state.isError = false;
        state.error = '';
      })
      .addCase(getSingleVideo.rejected, (state, action) => {
        state.loading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default VideoSlice.reducer;
