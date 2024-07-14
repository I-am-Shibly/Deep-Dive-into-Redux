import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addJob } from './addJobApi';
import { getJobs } from '../Jobs/JobsSlice';

export const addNew = createAsyncThunk('addJob', async (data, { dispatch }) => {
  await addJob({data});
  dispatch(getJobs());
});

const initialState = {
  isLoading: false,
  isError: false,
  error: '',
};

const addJobSlice = createSlice({
  name: 'addJobs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addNew.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNew.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(addNew.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default addJobSlice.reducer;
