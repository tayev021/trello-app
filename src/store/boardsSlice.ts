import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IBoardState } from '../types/IBoardState';
import type { IBoard } from '../types/IBoard';

const initialState: IBoardState = {
  boards: [
    {
      id: 1,
      title: 'ToDo',
    },
    {
      id: 2,
      title: 'In Progress',
    },
    {
      id: 3,
      title: 'Done',
    },
    {
      id: 4,
      title: 'Test 1',
    },
    {
      id: 5,
      title: 'Test 2',
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    createBoard(state, action: PayloadAction<IBoard>) {
      state.boards = [...state.boards, action.payload];
    },
    removeBoard(state, action: PayloadAction<IBoard['id']>) {
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload
      );
    },
  },
});

export const boardsReducer = boardsSlice.reducer;
export const { createBoard, removeBoard } = boardsSlice.actions;
