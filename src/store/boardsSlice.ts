import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IBoardState } from '../types/IBoardState';
import type { IBoard } from '../types/IBoard';
import { BGColors, type IBGColors } from '../types/IBGColors';

const initialState: IBoardState = {
  boards: [
    {
      id: '1',
      title: 'ToDo',
      bgColor: BGColors[0],
    },
    {
      id: '2',
      title: 'In Progress',
      bgColor: BGColors[0],
    },
    {
      id: '3',
      title: 'Done',
      bgColor: BGColors[0],
    },
    {
      id: '4',
      title: 'Test 1',
      bgColor: BGColors[0],
    },
    {
      id: '5',
      title: 'Test 2',
      bgColor: BGColors[0],
    },
  ],
};

interface IUpdateBoardTitlePayload {
  id: IBoard['id'];
  title: string;
}

interface IUpdateBoardBGColorPayload {
  id: IBoard['id'];
  color: IBGColors;
}

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
    updateBoardTitle(state, action: PayloadAction<IUpdateBoardTitlePayload>) {
      state.boards = state.boards.map((board) =>
        board.id === action.payload.id
          ? { ...board, title: action.payload.title }
          : board
      );
    },
    updateBoardBGColor(
      state,
      action: PayloadAction<IUpdateBoardBGColorPayload>
    ) {
      state.boards = state.boards.map((board) =>
        board.id === action.payload.id
          ? { ...board, bgColor: action.payload.color }
          : board
      );
    },
  },
});

export const boardsReducer = boardsSlice.reducer;
export const {
  createBoard,
  removeBoard,
  updateBoardTitle,
  updateBoardBGColor,
} = boardsSlice.actions;
