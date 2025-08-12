import { cloneElement, type ReactElement } from 'react';
import { useModalContext } from '../../hooks/useModalContext';

interface ChildProps {
  onClick: () => void;
}

interface OpenProps {
  children: ReactElement<ChildProps>;
  windowName: string;
}

export function Open({ children, windowName }: OpenProps) {
  const { open } = useModalContext();

  return cloneElement(children, { onClick: () => open(windowName) });
}
