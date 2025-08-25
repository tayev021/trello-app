import type { ReactElement } from 'react';
import { Row } from './Row';
import { Cell } from './Cell';
import { HeadCell } from './HeadCell';

interface ITableProps {
  className?: string;
  children: ReactElement[];
}

export function Table({ className = '', children }: ITableProps) {
  return <table className={className}>{children}</table>;
}

Table.Row = Row;
Table.HeadCell = HeadCell;
Table.Cell = Cell;
