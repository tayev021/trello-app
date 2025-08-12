import type { ReactNode } from 'react';

interface BoardConfirmRemoveProps {
  onConfirm: () => void;
  onClose?: () => void;
  children: ReactNode;
}

export function Confirm({
  onConfirm,
  onClose,
  children,
}: BoardConfirmRemoveProps) {
  return (
    <div className="">
      <p className="mb-8 text-xl text-center">{children}</p>
      <div className="flex gap-12 justify-center">
        <button
          className="w-30 py-[6px] border-2 border-blue-900 rounded-xl font-medium uppercase text-md leading-none text-blue-900 cursor-pointer hover:tracking-wider transition-all duration-100"
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button
          className="w-30 py-[6px] border-2 border-orange-800 rounded-xl font-medium uppercase text-md leading-none text-orange-800 cursor-pointer hover:tracking-wider transition-all duration-100"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
