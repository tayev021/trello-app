import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ children, disabled = false, onClick }: ButtonProps) {
  return (
    <button
      className="w-6 h-6 flex justify-center items-center rounded-4xl text-lg text-zinc-600 hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
