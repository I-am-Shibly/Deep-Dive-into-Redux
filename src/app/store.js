import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/VideosSlice';
import VideoReducer from '../features/Video/VideoSlice';
import relatedVideosSlice from '../features/relatedVideos/relatedVideosSlice';
import tagsSlice from '../features/tags/tagsSlice';
import filterSlice from '../features/filters/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: VideoReducer,
    relatedVideos: relatedVideosSlice,
    tags: tagsSlice,
    filter: filterSlice,
  },
});
