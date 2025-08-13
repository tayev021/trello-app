import { v4 as uuid } from 'uuid';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICardState } from '../types/ICardState';
import type { ICard } from '../types/ICard';
import type { IBoard } from '../types/IBoard';
import type { ITask } from '../types/ITask';

const initialState: ICardState = {
  cards: [
    {
      id: uuid(),
      title: 'Test first card',
      boardId: 1,
      tasks: [
        {
          id: uuid(),
          name: 'test task 1',
          isDone: true,
        },
        {
          id: uuid(),
          name: 'test task 2',
          isDone: false,
        },
        {
          id: uuid(),
          name: 'test task 3',
          isDone: true,
        },
        {
          id: uuid(),
          name: 'test task 4 test task 4 test task 4',
          isDone: false,
        },
      ],
    },
    {
      id: uuid(),
      title: 'Test second card',
      boardId: 1,
      tasks: [
        {
          id: uuid(),
          name: 'test task 5',
          isDone: true,
        },
      ],
    },
    {
      id: uuid(),
      title: 'Test third card',
      boardId: 2,
      tasks: [],
    },
  ],
};

interface IUpdateCardBoardPayload {
  id: ICard['id'];
  boardId: IBoard['id'];
}

interface IToggleTaskStatusPayload {
  id: ICard['id'];
  taskId: ITask['id'];
}

interface IRemoveTaskPayload {
  id: ICard['id'];
  taskId: ITask['id'];
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
    toggleTaskStatus(state, action: PayloadAction<IToggleTaskStatusPayload>) {
      const card = state.cards.find((card) => card.id === action.payload.id);

      if (!card) return;

      card.tasks = card.tasks.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, isDone: !task.isDone }
          : task
      );
    },
    removeTask(state, action: PayloadAction<IRemoveTaskPayload>) {
      const card = state.cards.find((card) => card.id === action.payload.id);

      if (!card) return;

      card.tasks = card.tasks.filter(
        (task) => task.id !== action.payload.taskId
      );
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const {
  createCard,
  removeCard,
  updateCardBoard,
  toggleTaskStatus,
  removeTask,
} = cardsSlice.actions;
