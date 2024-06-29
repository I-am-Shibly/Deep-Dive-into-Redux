import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { editTransaction } from './editTransactionApi';
import { getAllTransactions } from '../allTransactions/allTransactionsSlice';

export const modifyTransaction = createAsyncThunk(
  'modifyTransaction',
  async ({ data, id }, { dispatch }) => {
    await editTransaction({ id, data });
    dispatch(getAllTransactions());
  }
);

const initialState = {
  loading: false,
  isError: false,
  error: '',
};

const addTransactionSlice = createSlice({
  name: 'modifyTransaction',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(modifyTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(modifyTransaction.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(modifyTransaction.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default addTransactionSlice.reducer;
