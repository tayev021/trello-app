import { useParams } from 'react-router';
import { useStoreSelector } from '../../hooks/useStoreSelector';
import { Board } from '../../components/Board/Board';
import { BoardPageNotFound } from './BoardPageNotFound';

export function BoardPage() {
  const { boardId } = useParams();
  const boards = useStoreSelector((store) => store.boards.boards);
  const board = boards.find((board) => board.id === boardId);

  if (!board) return <BoardPageNotFound />;

  return <Board board={board} isDetailed={true} />;
}
