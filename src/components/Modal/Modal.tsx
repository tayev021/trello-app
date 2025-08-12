import { useState, type ReactNode } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { Open } from './Open';
import { Window } from './Window';
import { Confirm } from './Confirm';

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  const [windowName, setWindowName] = useState<string>('');

  const open = setWindowName;
  const close = () => setWindowName('');

  return (
    <ModalContext.Provider value={{ windowName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Confirm = Confirm;
