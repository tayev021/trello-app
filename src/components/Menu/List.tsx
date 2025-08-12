import type { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useMenuContext } from '../../hooks/useMenuContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface ListProps {
  id: string;
  children: ReactElement | ReactElement[];
}

export function List({ id, children }: ListProps) {
  const { menuId, position, close } = useMenuContext();
  const ref = useOutsideClick<HTMLUListElement>(close, false);

  if (menuId !== id) return null;

  const top = `${position?.y || 0}px`;
  const left = `${Math.round(position?.x || 0)}px`;

  return createPortal(
    <ul
      className="fixed flex flex-col gap-1 p-1 rounded-md bg-[#FFFFFF] shadow-[0_1px_3px_rgba(80,80,80,0.6)]"
      style={{ top: top, left: left }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}
