import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'services/apiHelpers';

export const getCategoriesTransaction = createAsyncThunk(
  'trans/getCategories',
  async (_, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;
    try {
      setAuthHeader(idToken);
      const res = await axios.get('/api/transaction-categories');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const categories = getState().finance.categoriesTrans;

      return categories.length > 0 ? false : true;
    },
  }
);

export const fetchAllTransactions = createAsyncThunk(
  'trans/fetchAll',
  async (_, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;

    setAuthHeader(idToken);
    try {
      const response = await axios.get('/api/transactions');

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, { getState }) => {
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

      return response.data;
    } catch (err) {
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

      return transactionId;
    } catch (err) {
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

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
