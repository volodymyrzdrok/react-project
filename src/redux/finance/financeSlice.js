import { createSlice } from '@reduxjs/toolkit';
import {
  getUserCurrent,
  loginUser,
  logoutUser,
} from 'redux/session/sessionOperations';

const defaultState = {
  transactions: [],
  transactionCategories: [],
  // transactionsSortedByCategory: {
  //   sorted: [],
  //   income: 0,
  //   expense: 0,
  // },
  isLoading: false,
  error: null,
  balance: 0,
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.balance = payload.user.balance;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        return (state = defaultState);
      })
      .addCase(getUserCurrent.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
      });
  },
});

export const selectTransactions = state => state.finance.items;
// export const selectTransactionsSortedByCategory = state =>
//   state.finance.transactionsSortedByCategory;
export const selectFinanceIsLoading = state => state.finance.isLoading;
export const selectFinanceErrorStatus = state => state.finance.error;
export const selectFinancesBalance = state => state.finance.balance;

export const finance = financeSlice.reducer;
// export const {  } = financeSlice.actions;
