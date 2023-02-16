import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, setAuthHeader } from 'services/apiHelpers';

export const registerUser = createAsyncThunk(
  'session/register',
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/sign-up', {
        username,
        email,
        password,
      });
      setAuthHeader(response.data.token);

      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'session/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/sign-in', {
        email,
        password,
      });
      setAuthHeader(response.data.token);

      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'session/logout',
  async (_, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;

    if (!idToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(idToken);
      const response = await axios.delete('/api/auth/sign-out');

      clearAuthHeader(idToken);

      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getUserCurrent = createAsyncThunk(
  'session/currentuser',
  async (_, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;
    if (!idToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(idToken);
      const res = await axios.get('/api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const { idToken } = getState().auth;
  //     if (idToken) return false;
  //     return Boolean(idToken);
  //   },
  // }
);
