import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortAllBlogs: true,
  sortNewest: false,
  sortMost_liked: false,

  filterAll: true,
  filterSaved: false,
};

const filterSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    showNewest: (state) => {
      state.sortAllBlogs = false;
      state.sortNewest = true;
      state.sortMost_liked = false;
    },

    showMostLiked: (state) => {
      state.sortAllBlogs = false;
      state.sortMost_liked = true;
      state.sortNewest = false;
    },

    notSorted: (state) => {
      state.sortAllBlogs = true;
      state.sortMost_liked = false;
      state.sortNewest = false;
    },

    showAllBlogs: (state) => {
      state.filterAll = true;
      state.filterSaved = false;
    },

    showSaved: (state) => {
      state.filterSaved = true;
      state.filterAll = false;
    },
  },
});

export default filterSlice.reducer;
export const { notSorted, showAllBlogs, showMostLiked, showNewest, showSaved } =
  filterSlice.actions;
