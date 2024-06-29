import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteTransaction } from './deleteTransactionApi';
import { getAllTransactions } from '../allTransactions/allTransactionsSlice';

export const removeTransaction = createAsyncThunk(
  'removeTransaction',
  async (id, { dispatch }) => {
    await deleteTransaction(id);
    dispatch(getAllTransactions());
  }
);

const initialState = {
  loading: false,
  isError: false,
  error: '',
};

const removeTransactionSlice = createSlice({
  name: 'removeTransaction',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(removeTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default removeTransactionSlice.reducer;
