import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

export function useMenuContext() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('Failed to get MenuContext outside of MenuContextProvider');
  }

  return context;
}
