import { v4 as uuid } from 'uuid';
import type { IBoard } from '../types/IBoard';
import type { ICard } from '../types/ICard';
import { BGColors } from '../types/IBGColors';
import type { IStore } from '../store/store';

const initialBoards: IBoard[] = [
  {
    id: '1',
    title: 'ToDo',
    bgColor: BGColors[0],
  },
  {
    id: '2',
    title: 'Work',
    bgColor: BGColors[3],
  },
  {
    id: '3',
    title: 'Done',
    bgColor: BGColors[4],
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
];

const initialCards: ICard[] = [
  {
    id: uuid(),
    title: 'Test first card',
    boardId: '1',
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
    boardId: '1',
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
    boardId: '2',
    tasks: [],
  },
];

export function loadStore(): IStore {
  const serializedStore = localStorage.getItem('store');

  if (typeof serializedStore === 'string') {
    const store = JSON.parse(serializedStore);

    if ('boards' in store && 'cards' in store) {
      return store;
    }
  }

  return {
    boards: { boards: initialBoards },
    cards: { cards: initialCards },
  };
}
