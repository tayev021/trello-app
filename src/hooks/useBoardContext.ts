import { useContext } from 'react';
import { BoardContext } from '../context/BoardContext';

export function useBoardContext() {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error(
      'Failed to get BoardContext outside of BoardContextProvider'
    );
  }

  return context;
}
