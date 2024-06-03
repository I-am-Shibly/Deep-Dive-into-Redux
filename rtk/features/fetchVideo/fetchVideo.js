const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  videos: [],
  error: '',
};

const fetchVideo = createAsyncThunk('videos/fetchVideo', async () => {
  const response = await fetch('http://localhost:9000/videos');
  const videos = await response.json();
  return videos;
});

const fetchVideoSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.loading = true;
        state.videos = [];
        state.error = '';
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
        state.error = '';
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.loading = false;
        state.videos = [];
        state.error = action.error.message;
      });
  },
});

module.exports = { fetchVideo, reducer: fetchVideoSlice.reducer };
