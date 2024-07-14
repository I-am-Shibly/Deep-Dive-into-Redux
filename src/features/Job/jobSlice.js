import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAjob } from './jobApi';

const initialState = {
  isLoading: false,
  job: {},
  isError: false,
  error: '',
};

export const getAjob = createAsyncThunk(
  'jobsSlice/getAjob',
  async (id, { dispatch }) => {
    return await fetchAjob(id);
  }
);

const jobSlice = createSlice({
  name: 'job',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAjob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAjob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
        state.isError = false;
        state.error = '';
      })
      .addCase(getAjob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
