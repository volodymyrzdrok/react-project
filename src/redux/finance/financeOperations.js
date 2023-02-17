import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'services/apiHelpers';

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
    // console.log('idToken :', idToken);
    setAuthHeader(idToken);
    try {
      const response = await axios.get('/api/transactions');

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

    setAuthHeader(idToken);
    try {
      const response = await axios.post('/api/transactions', newTransObj);
      // console.log('response.data :', response.data.type);
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'trans/removeTrans',
  async (transactionId, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;
    setAuthHeader(idToken);
    try {
      await axios.delete(`/api/transactions/${transactionId}`);
      // console.log('видалило -', transactionId);
      return transactionId;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  'trans/editTrans',
  async (newObj, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;
    setAuthHeader(idToken);
    const { id, amount, comment } = newObj;
    try {
      const response = await axios.patch(`/api/transactions/${id}`, {
        amount,
        comment,
      });

      // console.log('edit response :', response.data);
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
