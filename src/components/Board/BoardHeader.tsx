import type { IBoard } from '../../types/IBoard';
import { Menu } from '../Menu/Menu';
import { HiOutlineEllipsisHorizontal, HiOutlineTrash } from 'react-icons/hi2';
import { Modal } from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { removeBoard } from '../../store/boardsSlice';

interface BoardHeaderProps {
  board: IBoard;
  hasCards: boolean;
}

export function BoardHeader({ board, hasCards }: BoardHeaderProps) {
  const dispatch = useDispatch();

  return (
    <header className="py-2 px-5 pr-4 flex justify-between">
      <h3 className="font-medium text-lg text-blue-900 uppercase">
        {board.title}
      </h3>

      <Modal>
        <Menu.Toggler
          id={`board-${board.id}-menu`}
          className="w-6 h-6 rounded-4xl text-2xl hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
        >
          <HiOutlineEllipsisHorizontal />
        </Menu.Toggler>

        <Menu.List id={`board-${board.id}-menu`}>
          <Modal.Open windowName={`remove-board-${board.id}`}>
            <Menu.Button disabled={hasCards}>
              <HiOutlineTrash /> <span>Remove</span>
            </Menu.Button>
          </Modal.Open>
        </Menu.List>

        <Modal.Window name={`remove-board-${board.id}`}>
          <Modal.Confirm onConfirm={() => dispatch(removeBoard(board.id))}>
            Are you sure you want to remove "{board.title}" board?
          </Modal.Confirm>
        </Modal.Window>
      </Modal>
    </header>
  );
}
