import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, setAuthHeader } from 'services/apiHelpers';

export const getCategoriesTransaction = createAsyncThunk(
  'trans/getCategories',
  async (_, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;
    if (!idToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(idToken);
      const res = await axios.get('/api/transaction-categories');

      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchAllTransactions = createAsyncThunk(
  'trans/fetchAll',
  async (_, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;
    console.log('idToken :', idToken);
    setAuthHeader(idToken);
    try {
      const response = await axios.get('/api/transactions');
      console.log('response,data :', response.data);
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, { getState }) => {
      // const { idToken } = getState().auth;
      const { transactions } = getState().finance;
      if (transactions.length) return false;
      return true;
    },
  }
);

export const addTransaction = createAsyncThunk(
  'trans/addTrans',
  async (newTransObj, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;
    console.log('idToken :', idToken);
    setAuthHeader(idToken);
    try {
      const response = await axios.post('/api/transactions', newTransObj);
      console.log('response.data :', response.data);
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
