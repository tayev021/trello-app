import { v4 as uuid } from 'uuid';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICardState } from '../types/ICardState';
import type { ICard } from '../types/ICard';
import type { IBoard } from '../types/IBoard';
import type { ITask } from '../types/ITask';
import { loadStore } from '../utils/loadStore';

interface ICreateCard {
  title: ICard['title'];
  boardId: IBoard['id'];
}

interface IUpdateCardTitle {
  id: ICard['id'];
  title: ICard['title'];
}

interface IUpdateCardBoardPayload {
  id: ICard['id'];
  boardId: IBoard['id'];
}

interface ICreateTaskPayload {
  id: ICard['id'];
  name: ITask['name'];
}

interface IRemoveTaskPayload {
  id: ICard['id'];
  taskId: ITask['id'];
}

interface IUpdateTaskNamePayload {
  id: ICard['id'];
  taskId: ITask['id'];
  name: ITask['name'];
}

interface IToggleTaskStatusPayload {
  id: ICard['id'];
  taskId: ITask['id'];
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState: (): ICardState => loadStore().cards,
  reducers: {
    createCard(state, action: PayloadAction<ICreateCard>) {
      state.cards.push({
        id: uuid(),
        title: action.payload.title,
        boardId: action.payload.boardId,
        tasks: [],
      });
    },
    removeCard(state, action: PayloadAction<ICard['id']>) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCardTitle(state, action: PayloadAction<IUpdateCardTitle>) {
      const card = state.cards.find((card) => card.id === action.payload.id);

      if (!card) return;

      card.title = action.payload.title;
    },
    updateCardBoard(state, action: PayloadAction<IUpdateCardBoardPayload>) {
      state.cards = state.cards.map((card) =>
        card.id === action.payload.id
          ? { ...card, boardId: action.payload.boardId }
          : card
      );
    },
    createTask(state, action: PayloadAction<ICreateTaskPayload>) {
      const card = state.cards.find((card) => card.id === action.payload.id);

      if (!card) return;

      card.tasks.push({
        id: uuid(),
        name: action.payload.name,
        isDone: false,
      });
    },
    removeTask(state, action: PayloadAction<IRemoveTaskPayload>) {
      const card = state.cards.find((card) => card.id === action.payload.id);

      if (!card) return;

      card.tasks = card.tasks.filter(
        (task) => task.id !== action.payload.taskId
      );
    },
    updateTaskName(state, action: PayloadAction<IUpdateTaskNamePayload>) {
      const card = state.cards.find((card) => card.id === action.payload.id);

      if (!card) return;

      card.tasks = card.tasks.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, name: action.payload.name }
          : task
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
  },
});

export const cardsReducer = cardsSlice.reducer;
export const {
  createCard,
  removeCard,
  updateCardTitle,
  updateCardBoard,
  createTask,
  removeTask,
  updateTaskName,
  toggleTaskStatus,
} = cardsSlice.actions;
