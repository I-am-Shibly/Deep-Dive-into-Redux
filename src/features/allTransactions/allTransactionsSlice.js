import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllTransctions } from './allTransactionsApi';

export const getAllTransactions = createAsyncThunk('allTransactions', async () => {
  return await fetchAllTransctions();
});

const initialState = {
  loading: false,
  allTransactions: [],
  isError: false,
  error: '',
};

const allTransactionSlice = createSlice({
  name: 'getAllTransactions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.allTransactions = action.payload;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default allTransactionSlice.reducer;
