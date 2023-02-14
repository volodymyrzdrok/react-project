import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const defaultState = {
  isAuthStatus: false,
  user: {
    userId: '',
    name: '',
    email: '',
  },
  idToken: null,
  isLoading: false,
  isFetchingCurrentUser: false,
  error: null,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {},
});

const persistConfig = {
  key: 'walletApp-session',
  storage,
  whitelist: ['idToken'],
};

export const selectIdToken = state => state.session.idToken;
export const selectUserName = state => state.session.user.name;
export const selectAuthStatus = state => state.session.isAuthStatus;
export const selectAuthError = state => state.session.error;
export const selectFetchingCurrentUser = state =>
  state.session.isFetchingCurrentUser;
export const selectIsLoadingSession = state => state.session.isLoading;

export const session = persistReducer(persistConfig, sessionSlice.reducer);
// export const {  } = sessionSlice.actions;
