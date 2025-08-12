import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './cardsSlice';
import { boardsReducer } from './boardsSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    boards: boardsReducer,
  },
});

export type IStore = ReturnType<typeof store.getState>;
