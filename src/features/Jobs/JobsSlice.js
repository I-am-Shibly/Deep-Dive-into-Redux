import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from './jobsApi';

const initialState = {
  isLoading: false,
  jobs: [],
  isError: false,
  error: '',
};

export const getJobs = createAsyncThunk('jobsSlice/getJobs', async () => {
  return await fetchJobs();
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
        state.isError = false;
        state.error = '';
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
