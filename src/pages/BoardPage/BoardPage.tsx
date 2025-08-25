import { useParams } from 'react-router';
import { useBoards } from '../../hooks/useBoards';
import { BoardPageNotFound } from './BoardPageNotFound';
import { Board } from '../../components/Board/Board';

export function BoardPage() {
  const { boardId } = useParams();
  const boards = useBoards();
  const board = boards.find((board) => board.id === boardId);

  if (!board) return <BoardPageNotFound />;

  return <Board board={board} isDetailed={true} />;
}
