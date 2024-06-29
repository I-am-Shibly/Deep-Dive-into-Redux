import { configureStore } from '@reduxjs/toolkit';
import currentBalanceReducer from '../features/currentBalance/balanceSlice';
import addNewTransactionReducer from '../features/addTransaction/addTransactionSlice';
import allTransactionsReducer from '../features/allTransactions/allTransactionsSlice';

export const store = configureStore({
  reducer: {
    balance: currentBalanceReducer,
    newTransaction: addNewTransactionReducer,
    allTransactions: allTransactionsReducer,
  },
});
