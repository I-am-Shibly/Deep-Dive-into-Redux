import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addNewTransaction } from './addTransactionApi';

export const addTransaction = createAsyncThunk('addTransaction', async (data) => {
  return await addNewTransaction(data);
});

const initialState = {
  loading: false,
  newTransaction: {},
  isError: false,
  error: '',
};

const addTransactionSlice = createSlice({
  name: 'addTransaction',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.newTransaction = action.payload;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.loading = false;
        state.newTransaction = {};
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default addTransactionSlice.reducer;
