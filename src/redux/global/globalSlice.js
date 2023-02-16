import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const defaultState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isLoading: false,
  error: null,
};
export const globalSlice = createSlice({
  name: 'global',
  initialState: defaultState,
  reducers: {
    toggleModalAddTrans(state, action) {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
  },
  extraReducers: builder => {},
});

export const selectIsModalLogoutOpen = state => state.global.isModalLogoutOpen;
export const selectIsModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;
export const selectGlobalIsLoading = state => state.global.isLoading;
export const selectGlobalErrorStatus = state => state.global.error;

export const global = globalSlice.reducer;
export const { toggleModalAddTrans } = globalSlice.actions;
