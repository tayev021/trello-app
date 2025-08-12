import { v4 as uuid } from 'uuid';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICardState } from '../types/ICardState';
import type { ICard } from '../types/ICard';
import type { IBoard } from '../types/IBoard';

const initialState: ICardState = {
  cards: [
    {
      id: uuid(),
      title: 'Test first card',
      boardId: 1,
    },
    {
      id: uuid(),
      title: 'Test second card',
      boardId: 2,
    },
  ],
};

interface IUpdateCardBoardPayload {
  id: ICard['id'];
  boardId: IBoard['id'];
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    createCard(state, action: PayloadAction<ICard>) {
      state.cards.push(action.payload);
    },
    removeCard(state, action: PayloadAction<ICard['id']>) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCardBoard(state, action: PayloadAction<IUpdateCardBoardPayload>) {
      state.cards = state.cards.map((card) =>
        card.id === action.payload.id
          ? { ...card, boardId: action.payload.boardId }
          : card
      );
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { createCard, removeCard, updateCardBoard } = cardsSlice.actions;
