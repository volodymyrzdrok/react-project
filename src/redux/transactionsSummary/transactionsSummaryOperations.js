import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, setAuthHeader } from 'services/apiHelpers';

import { getTransactionsSummary } from 'services/walletApi';

export const getTransactionsStats = createAsyncThunk(
  'transactionsSummary/getTransactions',
  async ({ month, year }, thunkAPI) => {
    const idToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI5NTY2YjEyYS01MmQ1LTQ0NjYtYTc4Mi01ZGNjNThmMGM1OGMiLCJpYXQiOjE2NzYzNzI0MDIsImV4cCI6MTAwMDAwMDE2NzYzNzI0MDJ9.P8aJLSJFPjwDz24nscpEw1nmb-J9B5lkOMKLf6U3RZ8';
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
