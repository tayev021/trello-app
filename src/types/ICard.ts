import type { IBoard } from './IBoard';
import type { ITask } from './ITask';

export interface ICard {
  id: string;
  title: string;
  boardId: IBoard['id'];
  tasks: ITask[];
}
