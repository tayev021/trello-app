import { createContext } from 'react';

interface IModalContext {
  windowName: string;
  open: (modalName: string) => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContext | null>(null);
