import { v4 as uuid } from 'uuid';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IBoardState } from '../types/IBoardState';
import type { IBoard } from '../types/IBoard';
import { BGColors, type IBGColors } from '../types/IBGColors';
import { loadStore } from '../utils/loadStore';

interface ICreateBoardPayload {
  title: string;
}

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
  initialState: (): IBoardState => loadStore().boards,
  reducers: {
    createBoard(state, action: PayloadAction<ICreateBoardPayload>) {
      const newBoard: IBoard = {
        id: uuid(),
        title: action.payload.title,
        bgColor: BGColors[0],
      };

      state.boards = [...state.boards, newBoard];
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
