import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tagItem: [],
  searchKey: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tagItem.push(action.payload);
    },

    tagRemoved: (state, action) => {
      const tagIdToRemove = state.tagItem.indexOf(action.payload);

      if (tagIdToRemove !== -1) {
        state.tagItem.splice(tagIdToRemove, 1);
      }
    },

    searched: (state, action) => {
      state.searchKey += action.payload;
    },
  },
});

export const { searched, tagRemoved, tagSelected } = filterSlice.actions;
export default filterSlice.reducer;
