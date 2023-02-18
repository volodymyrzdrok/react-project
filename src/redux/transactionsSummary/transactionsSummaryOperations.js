import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, setAuthHeader } from 'services/apiHelpers';

import { getTransactionsSummary } from 'services/walletApi';

export const getTransactionsStats = createAsyncThunk(
  'transactionsSummary/getTransactions',
  async ({ month, year }, thunkAPI) => {
    const idToken = thunkAPI.getState().session.idToken;
    if (!idToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(idToken);
      const data = await getTransactionsSummary(month, year);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        clearAuthHeader();
        return thunkAPI.rejectWithValue(error.response.statusText);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
