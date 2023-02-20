import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from 'redux/session/sessionOperations';

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
    toggleModalLogout(state, action) {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
  },
  extraReducers: builder => {
    builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
      state.isModalLogoutOpen = false;
    });
  },
});

export const selectIsModalLogoutOpen = state => state.global.isModalLogoutOpen;
export const selectIsModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;
export const selectGlobalIsLoading = state => state.global.isLoading;
export const selectGlobalErrorStatus = state => state.global.error;

export const global = globalSlice.reducer;
export const { toggleModalAddTrans } = globalSlice.actions;
export const { toggleModalLogout } = globalSlice.actions;
