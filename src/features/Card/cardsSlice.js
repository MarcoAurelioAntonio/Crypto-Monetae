import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchCoins from './api';

const initialState = [];

export const fetchCoinsAsync = createAsyncThunk(
  'coins/fetchCoins',
  async (coins) => {
    const response = await fetchCoins(coins);
    return response;
  },
);

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    renderCoins: (state) => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinsAsync.fulfilled, (state, action) => {
        let newState = state;
        newState = action.payload;
        return newState;
      });
  },
});

export const { renderCoins } = coinsSlice.reducer;

export default coinsSlice.reducer;
