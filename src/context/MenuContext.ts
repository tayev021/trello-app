import type { IPosition } from '../types/IPosition';
import { createContext } from 'react';

interface IMenuContext {
  menuId: string;
  open: (menuId: string) => void;
  close: () => void;
  position: IPosition;
  setPosition: (position: IPosition) => void;
}

export const MenuContext = createContext<IMenuContext | null>(null);
