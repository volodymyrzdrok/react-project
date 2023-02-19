import { createSlice } from '@reduxjs/toolkit';
import {
  getUserCurrent,
  loginUser,
  logoutUser,
} from 'redux/session/sessionOperations';
import {
  addTransaction,
  editTransaction,
  fetchAllTransactions,
  getCategoriesTransaction,
  removeTransaction,
} from './financeOperations';

const defaultState = {
  balance: 0,
  transactions: [],
  categoriesTrans: [],

  isLoading: false,
  error: null,
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState: defaultState,
  reducers: {
    resetErrorTransaction(state, _) {
      state.error = null;
    },
  },
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
      })
      .addCase(getCategoriesTransaction.fulfilled, (state, { payload }) => {
        state.categoriesTrans = payload;
      })
      .addCase(fetchAllTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [payload, ...state.transactions];
      })
      .addCase(removeTransaction.fulfilled, (state, { payload }) => {
        const index = state.transactions.findIndex(c => c.id === payload);
        state.transactions.splice(index, 1);
      })
      .addCase(editTransaction.fulfilled, (state, { payload }) => {
        const index = state.transactions.findIndex(c => c.id === payload.id);
        state.transactions.splice(index, 1, payload);
      })
      .addMatcher(
        ({ type }) => {
          return type.endsWith('pending') && type.startsWith('trans');
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('fulfilled') && type.startsWith('trans');
        },
        state => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('rejected') && type.startsWith('trans');
        },
        (state, action) => {
          state.isLoading = false;

          state.error = action.payload;
        }
      );
  },
});

export const selectTransactions = state => state.finance.transactions;
export const selectFinanceIsLoading = state => state.finance.isLoading;
export const selectFinanceErrorStatus = state => state.finance.error;
export const selectCategoriesForId = state =>
  state.finance.categoriesTrans.reduce((acc, el) => {
    acc[el.id.toLowerCase().trim()] = el;

    return acc;
  }, {});

export const selectCategoriesTrans = state =>
  state.finance.categoriesTrans.reduce((acc, el) => {
    acc[el.name.toLowerCase().trim()] = el;

    return acc;
  }, {});

export const selectFinancesBalance = state =>
  state.finance.transactions.reduce((acc, el) => (acc += el.amount), 0);

export const finance = financeSlice.reducer;
export const { resetErrorTransaction } = financeSlice.actions;
