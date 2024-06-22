import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogSlice';
import singleBlogReducer from '../features/blog/singleBlogSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: singleBlogReducer,
    filter: filterReducer,
  },
});
