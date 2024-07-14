import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  salary: 0,
};

const filterSalary = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    changeSalary: (state, action) => {
      state.salary = action.payload;
    },
  },
});

export default filterSalary.reducer;
export const { changeSalary } = filterSalary.actions;
