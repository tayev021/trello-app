import type { IBoard } from '../types/IBoard';
import { useCards } from './useCards';

export function useFilteredCards(boardId: IBoard['id']) {
  const cards = useCards();
  const filteredCards = cards.filter((cards) => cards.boardId === boardId);

  return filteredCards;
}
