import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchKey: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchKey = action.payload.toLowerCase();
    },
  },
});

export default searchSlice.reducer;
export const { search } = searchSlice.actions;
