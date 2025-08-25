import type { ReactNode } from 'react';

interface ICellProps {
  style?: object;
  children: ReactNode;
}

export function Cell({ style = {}, children }: ICellProps) {
  return (
    <td
      className="block px-2 border-r-3 last:border-r-0 border-[#ffffff] bg-stone-100 whitespace-nowrap text-ellipsis overflow-hidden"
      style={style}
    >
      {children}
    </td>
  );
}
