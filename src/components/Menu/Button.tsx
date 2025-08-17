import type { ReactNode } from 'react';
import { useMenuContext } from '../../hooks/useMenuContext';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ disabled, onClick, children }: ButtonProps) {
  const { close } = useMenuContext();

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li className="list-none">
      <button
        className="w-full flex items-center gap-2 p-1 rounded-md hover:bg-zinc-200 active:bg-blue-200 cursor-pointer disabled:cursor-no-drop disabled:active:bg-zinc-200"
        disabled={disabled}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}
