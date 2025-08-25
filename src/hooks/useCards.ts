import { useStoreSelector } from './useStoreSelector';

export function useCards() {
  const cards = useStoreSelector((store) => store.cards.cards);

  return cards;
}
