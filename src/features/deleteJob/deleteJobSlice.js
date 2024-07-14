import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getJobs } from '../Jobs/JobsSlice';
import { removeJob } from './deleteJobApi';

export const deleteJob = createAsyncThunk('deleteJob', async (id, { dispatch }) => {
  await removeJob(id);
  dispatch(getJobs());
});

const initialState = {
  isLoading: false,
  isError: false,
  error: '',
};

const deleteJobSlice = createSlice({
  name: 'deleteJob',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default deleteJobSlice.reducer;
