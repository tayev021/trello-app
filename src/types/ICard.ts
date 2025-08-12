import type { IBoard } from './IBoard';

export interface ICard {
  id: string;
  title: string;
  boardId: IBoard['id'];
}
