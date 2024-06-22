import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBlog, doLike } from './singleBlogApi';

const initialState = {
  loading: false,
  blog: {},
  isUpdating: false,
  isError: false,
  error: '',
};

export const getBlog = createAsyncThunk('blog', async (id) => {
  return await fetchBlog(id);
});

export const updateBlog = createAsyncThunk(
  'updateBlog',
  async ({ likes, id }) => {
    return await doLike({ likes, id });
  }
);

const singleBlogSlice = createSlice({
  name: 'blog',
  initialState,
 
  extraReducers: (builder) => {
    builder
      .addCase(getBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
        state.isError = false;
        state.error = '';
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.loading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error.message;
      });

    // update blog
    builder
      .addCase(updateBlog.pending, (state) => {
        state.isUpdating = true;
        state.error = '';
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        if (state.blog.id === action.payload.id) {
          state.blog = { ...state.blog, likes: action.payload.likes };
        }

        state.isUpdating = false;
        state.error = '';
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default singleBlogSlice.reducer;
