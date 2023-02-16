import { createSlice } from '@reduxjs/toolkit';
import {
  getUserCurrent,
  loginUser,
  logoutUser,
} from 'redux/session/sessionOperations';
import {
  addTransaction,
  fetchAllTransactions,
  getCategoriesTransaction,
  removeTransaction,
} from './financeOperations';

const defaultState = {
  balance: 0,
  transactions: [],
  categoriesTrans: [],
  // transactionsSortedByCategory: {
  //   sorted: [],
  //   income: 0,
  //   expense: 0,
  // },
  isLoading: false,
  error: null,
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
        console.log('index :', index);
        state.transactions.splice(index, 1);
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
          // console.log('action :', action);
          state.error = action.payload;
        }
      );
  },
});

export const selectFinancesBalance = state => state.finance.balance;
export const selectTransactions = state => state.finance.transactions;
// export const selectTransactionsSortedByCategory = state =>
//   state.finance.transactionsSortedByCategory;
export const selectFinanceIsLoading = state => state.finance.isLoading;
export const selectFinanceErrorStatus = state => state.finance.error;
export const selectCategoriesForId = state =>
  state.finance.categoriesTrans.reduce((acc, el) => {
    acc[el.id.toLowerCase()] = el;

    return acc;
  }, {});

export const selectCategoriesTrans = state =>
  state.finance.categoriesTrans.reduce((acc, el) => {
    acc[el.name.toLowerCase()] = el;

    return acc;
  }, {});

export const finance = financeSlice.reducer;
// export const {  } = financeSlice.actions;
