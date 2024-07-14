import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { editJob } from './editJobsApi';
import { getJobs } from '../Jobs/JobsSlice';

const initialState = {
  isLoading: false,
  isError: false,
  error: '',
};

export const modifyJob = createAsyncThunk(
  'editJobSlice/editJob',
  async ({ id, data }, { dispatch }) => {
    await editJob({ id, data });
    dispatch(getJobs());
  }
);

const editJobSlice = createSlice({
  name: 'editJobs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(modifyJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(modifyJob.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(modifyJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default editJobSlice.reducer;
