import type { IBoard } from '../../types/IBoard';
import { Menu } from '../Menu/Menu';
import {
  HiOutlineEllipsisHorizontal,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { Modal } from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { removeBoard } from '../../store/boardsSlice';
import { useState } from 'react';
import { BoardTitleInput } from './BoardTitleInput';

interface BoardHeaderProps {
  board: IBoard;
  hasCards: boolean;
}

export function BoardHeader({ board, hasCards }: BoardHeaderProps) {
  const dispatch = useDispatch();
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);

  function handleCloseUpdatingTitle() {
    setIsUpdatingTitle(false);
  }

  return (
    <header className="grid grid-cols-[1fr_min-content] gap-4 py-2 px-5 pr-4">
      {isUpdatingTitle ? (
        <BoardTitleInput board={board} onClose={handleCloseUpdatingTitle} />
      ) : (
        <h3 className="border-b-2 border-transparent font-medium text-lg text-blue-900 uppercase whitespace-nowrap text-ellipsis overflow-hidden">
          {board.title}
        </h3>
      )}

      <Modal>
        <Menu.Toggler
          id={`board-${board.id}-menu`}
          className="w-6 h-6 rounded-4xl text-2xl hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
        >
          <HiOutlineEllipsisHorizontal />
        </Menu.Toggler>

        <Menu.List id={`board-${board.id}-menu`}>
          <Menu.Button onClick={() => setIsUpdatingTitle(true)}>
            <HiOutlinePencil /> <span>Update title</span>
          </Menu.Button>
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
