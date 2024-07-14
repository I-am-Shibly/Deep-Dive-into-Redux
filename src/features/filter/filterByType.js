import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
};

const filterTypeSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    typeChange: (state, action) => {
      state.type = action.payload;
    }
  },
});

export default filterTypeSlice.reducer;
export const { typeChange } = filterTypeSlice.actions;
