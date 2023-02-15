import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getUserCurrent, logoutUser } from './sessionOperations';

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
  reducers: {
    resetAuthError(state, action) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        return (state = defaultState);
      })
      .addCase(getUserCurrent.fulfilled, (state, { payload }) => {
        state.isAuthStatus = true;
        state.user.userId = payload.id;
        state.user.name = payload.username;
        state.user.email = payload.email;
      })
      .addMatcher(
        ({ type }) => {
          return (
            type === 'session/register/fulfilled' ||
            type === 'session/login/fulfilled'
          );
        },
        (state, { payload }) => {
          state.isAuthStatus = true;
          state.user.userId = payload.user.id;
          state.user.name = payload.user.username;
          state.user.email = payload.user.email;
          state.idToken = payload.token;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('pending') && type.startsWith('session');
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('fulfilled') && type.startsWith('session');
        },
        state => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('rejected') && type.startsWith('session');
        },
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          // state.isFetchingCurrentUser = false;
        }
      );
  },
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
export const { resetAuthError } = sessionSlice.actions;
