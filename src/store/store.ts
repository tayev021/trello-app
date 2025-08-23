import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './cardsSlice';
import { boardsReducer } from './boardsSlice';
import { saveStore } from '../utils/saveStore';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    boards: boardsReducer,
  },
});

store.subscribe(() => saveStore(store.getState()));

export type IStore = ReturnType<typeof store.getState>;
