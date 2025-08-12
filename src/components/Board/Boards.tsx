import { useStoreSelector } from '../../hooks/useStoreSelector';
import { Menu } from '../Menu/Menu';
import { Board } from './Board';

export function Boards() {
  const boards = useStoreSelector((store) => store.boards.boards);

  return (
    <Menu>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5">
        {boards.map((board) => (
          <Board board={board} key={board.id} />
        ))}
      </ul>
    </Menu>
  );
}
