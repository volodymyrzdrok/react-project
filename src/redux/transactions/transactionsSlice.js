import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  items: [],
  transactionsSortedByCategory: {
    sorted: [],
    income: 0,
    expense: 0,
  },
  isLoading: false,
  error: null,
  balance: 0,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {},
});

export const selectTransactions = state => state.transactions.items;
export const selectTransactionsSortedByCategory = state =>
  state.transactions.transactionsSortedByCategory;
export const selectTransactionsIsLoading = state =>
  state.transactions.isLoading;
export const selectTransactionsErrorStatus = state => state.transactions.error;

export const transactions = transactionsSlice.reducer;
// export const {  } = transactionsSlice.actions;
