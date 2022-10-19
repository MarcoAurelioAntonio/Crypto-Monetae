import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from '../features/Card/cardsSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
