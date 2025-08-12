import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      'Failed to get ModalContext outside of ModalContextProvider'
    );
  }

  return context;
}
