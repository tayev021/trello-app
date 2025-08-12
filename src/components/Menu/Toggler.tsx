import { type MouseEvent, type ReactElement } from 'react';
import { useMenuContext } from '../../hooks/useMenuContext';

interface ToggleProps {
  id: string;
  className: string;
  children: ReactElement;
}

export function Toggler({ id, className, children }: ToggleProps) {
  const { menuId, open, close, setPosition } = useMenuContext();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();

    if (
      'closest' in event.target &&
      event.target['closest'] instanceof Function
    ) {
      const closestButton = event.target.closest('button');

      if (closestButton) {
        const rect = closestButton.getBoundingClientRect();

        if (menuId !== id) {
          open(id);

          setPosition({
            x: rect.x,
            y: rect.y + rect.height,
          });
        } else {
          close();
        }
      }
    }
  }

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
