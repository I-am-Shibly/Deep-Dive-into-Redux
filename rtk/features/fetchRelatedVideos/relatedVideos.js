const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');
const { fetchVideo } = require('../fetchVideo/fetchVideo');

const initialState = {
  loading: false,
  relatedVideos: [],
  error: '',
};

const fetchRelatedVideos = createAsyncThunk(
  'videos/relatedVideos',
  async (searchQueryString) => {
    const response = await fetch(`http://localhost:9000/videos?${searchQueryString}`);
    const relatedVideos = await response.json();

    const sortedVideos = relatedVideos?.sort((a, b) =>
      parseFloat(a?.views) > parseFloat(b?.views) ? -1 : 1
    );

    return sortedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: 'related videos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.loading = true;
        state.relatedVideos = [];
        state.error = '';
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.relatedVideos.push(action.payload);
        state.error = '';
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.loading = false;
        state.relatedVideos = [];
        state.error = action.error.message;
      });
  },
});

module.exports = { fetchRelatedVideos, reducer: relatedVideosSlice.reducer };
