import { useState } from 'react';
import { useBoardContext } from '../../hooks/useBoardContext';
import { useDispatch } from 'react-redux';
import { removeBoard, updateBoardTitle } from '../../store/boardsSlice';
import { Modal } from '../Modal/Modal';
import { Menu } from '../Menu/Menu';
import { Link } from 'react-router';
import { Input } from '../forms/Input';
import {
  HiOutlineEllipsisHorizontal,
  HiOutlineEye,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi2';

export function BoardHeader() {
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
  const { board, cards, isDetailed } = useBoardContext();
  const dispatch = useDispatch();

  const hasCards = !!cards.length;

  function handleUpdateTitle(title: string): void {
    dispatch(updateBoardTitle({ id: board.id, title: title }));
  }

  return (
    <header className="grid grid-cols-[1fr_min-content] gap-4 items-center py-2 px-5 pr-4">
      {isUpdatingTitle ? (
        <>
          <Input
            className="border-b-2 border-blue-900 font-medium uppercase text-lg text-blue-900"
            initialValue={board.title}
            onSubmit={handleUpdateTitle}
            onClose={() => setIsUpdatingTitle(false)}
          />
        </>
      ) : (
        <h3
          className="border-b-2 border-transparent font-medium text-lg text-blue-900 uppercase whitespace-nowrap text-ellipsis overflow-hidden"
          style={isDetailed ? { textAlign: 'center' } : {}}
        >
          {board.title}
        </h3>
      )}

      <Menu.Toggler
        id={`board-${board.id}-menu`}
        className="w-6 h-6 rounded-4xl text-2xl hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
      >
        <HiOutlineEllipsisHorizontal />
      </Menu.Toggler>

      <Menu.List id={`board-${board.id}-menu`}>
        <Menu.Button>
          <Link
            to={`/board/${board.id}`}
            className="w-full flex items-center gap-2"
          >
            <HiOutlineEye /> <span>Open</span>
          </Link>
        </Menu.Button>
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
    </header>
  );
}
