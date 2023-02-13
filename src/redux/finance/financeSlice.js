import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  transactions: [],
  transactionsSortedByCategory: {
    sorted: [],
    income: 0,
    expense: 0,
  },
  isLoading: false,
  error: null,
  balance: 0,
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {},
});

export const selectTransactions = state => state.finance.items;
export const selectTransactionsSortedByCategory = state =>
  state.finance.transactionsSortedByCategory;
export const selectFinanceIsLoading = state => state.finance.isLoading;
export const selectFinanceErrorStatus = state => state.finance.error;
export const selectFinancesBalance = state => state.finance.balance;

export const finance = financeSlice.reducer;
// export const {  } = financeSlice.actions;
