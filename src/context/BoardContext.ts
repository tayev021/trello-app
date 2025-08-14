import type { IBoard } from '../types/IBoard';
import { createContext } from 'react';

interface IBoardContext {
  board: IBoard;
}

export const BoardContext = createContext<IBoardContext | null>(null);
