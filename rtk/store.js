const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const {
  reducer: fetchVideoReducer,
} = require('./features/fetchVideo/fetchVideo');

const {
  reducer: relatedVideosReducer,
} = require('./features/fetchRelatedVideos/relatedVideos');

const store = configureStore({
  reducer: {
    videos: fetchVideoReducer,
    relatedVideos: relatedVideosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger()),
});

module.exports = store;
