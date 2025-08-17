import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

export function useCardContext() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('Failed to get CardContext outside of CardContextProvider');
  }

  return context;
}
