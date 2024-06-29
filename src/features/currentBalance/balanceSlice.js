import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  balance: 0,
  isError: false,
  error: '',
};

const currentBalance = createSlice({
  name: 'currentBalance',
  initialState,
  reducers: {
    fetchedData: (state, action) => {
      const transactions = action.payload;

      const totalIncome = transactions
        .filter((t) => t.type === 'income')
        .reduce((total, t) => total + Number(t.amount), 0);

      const totalExpense = transactions
        .filter((t) => t.type === 'expense')
        .reduce((total, t) => total + Number(t.amount), 0);

      state.balance = totalIncome - totalExpense;
    },
  },
});

export default currentBalance.reducer;
export const { fetchedData } = currentBalance.actions;
