import { createSlice } from '@reduxjs/toolkit';

import { getTransactionsStats } from './transactionsSummaryOperations';

const defaultState = {
  transactionsSummary: null,
  isLoading: false,
  error: null,
};

export const transactionsSummarySlice = createSlice({
  name: 'summary',
  initialState: defaultState,
  extraReducers: builder => {
    builder
      .addCase(getTransactionsStats.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionsStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactionsSummary = payload;
        state.error = null;
      })
      .addCase(getTransactionsStats.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const transactionsSummaryReducer = transactionsSummarySlice.reducer;
