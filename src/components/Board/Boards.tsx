import { useStoreSelector } from '../../hooks/useStoreSelector';
import { Board } from './Board';
import { BoardCreator } from './BoardCreator';

export function Boards() {
  const boards = useStoreSelector((store) => store.boards.boards);

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5">
      {boards.map((board) => (
        <Board board={board} key={board.id} />
      ))}

      <BoardCreator />
    </ul>
  );
}
