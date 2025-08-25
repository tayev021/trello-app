import type { ReactNode } from 'react';

interface IHeadCellProps {
  children: ReactNode;
}

export function HeadCell({ children }: IHeadCellProps) {
  return (
    <th className="block px-2 border-r-3 last:border-r-0 border-[#ffffff] first:rounded-tl-lg last:rounded-tr-lg bg-stone-200 font-medium text-start whitespace-nowrap text-ellipsis overflow-hidden">
      {children}
    </th>
  );
}
