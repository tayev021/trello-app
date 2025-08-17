import type { ICard } from '../types/ICard';
import { createContext } from 'react';

interface ICardContext {
  card: ICard;
  setIsAddingTask: (isAddingTask: boolean) => void;
}

export const CardContext = createContext<ICardContext | null>(null);
