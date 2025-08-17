import type { IBoard } from '../types/IBoard';
import type { ICard } from '../types/ICard';
import { createContext } from 'react';

interface IBoardContext {
  board: IBoard;
  cards: ICard[];
  isDetailed: boolean;
}

export const BoardContext = createContext<IBoardContext | null>(null);
