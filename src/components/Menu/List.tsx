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

  const bodyRect = document.body.getBoundingClientRect();

  const top = `${position.y}px`;
  const left =
    position.x + 150 > bodyRect.width
      ? `${Math.round(bodyRect.width - 160)}px`
      : `${Math.round(position.x)}px`;

  return createPortal(
    <ul
      className="w-[150px] fixed flex flex-col gap-1 p-1 rounded-md bg-[#FFFFFF] shadow-[0_1px_3px_rgba(80,80,80,0.6)]"
      style={{ top: top, left: left }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}
