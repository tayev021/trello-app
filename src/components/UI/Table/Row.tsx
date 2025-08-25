import type { ReactElement } from 'react';

interface IRowProps {
  children: ReactElement | ReactElement[];
}

export function Row({ children }: IRowProps) {
  return (
    <tr className="grid grid-cols-[minmax(150px,_1fr)_minmax(max-content,60px)] border-b-3 border-[#ffffff]">
      {children}
    </tr>
  );
}
