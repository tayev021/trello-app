import type { IBoard } from './IBoard';

export interface IBoardData {
  id: IBoard['id'];
  name: IBoard['title'];
  color: IBoard['bgColor'];
  brighterColor: string;
  tasksQuantity: number;
  ['Tasks In Progress']: number;
  ['Tasks Done']: number;
}
