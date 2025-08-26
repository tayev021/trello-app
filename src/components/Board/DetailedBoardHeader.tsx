import { useState } from 'react';
import { useBoardContext } from '../../hooks/useBoardContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeBoard, updateBoardTitle } from '../../store/boardsSlice';
import { Modal } from '../Modal/Modal';
import { Menu } from '../Menu/Menu';
import { Input } from '../UI/forms/Input';
import { Button } from '../UI/forms/Button';
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { BackButton } from '../UI/BackButton';

export function DetailedBoardHeader() {
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
  const { board, cards } = useBoardContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hasCards = !!cards.length;

  function handleUpdateTitle(title: string): void {
    dispatch(updateBoardTitle({ id: board.id, title: title }));
  }

  function handleRemove() {
    dispatch(removeBoard(board.id));
    navigate('/');
  }

  return (
    <header
      className="grid grid-cols-[max-content_1fr_min-content_min-content_min-content] gap-4 items-center py-3 px-5 pr-4"
      style={isUpdatingTitle ? { gridTemplateColumns: 'max-content 1fr' } : {}}
    >
      <BackButton />

      {isUpdatingTitle ? (
        <>
          <Input
            className="border-b-2 border-blue-900 font-medium uppercase text-lg text-center text-blue-900"
            initialValue={board.title}
            onSubmit={handleUpdateTitle}
            onClose={() => setIsUpdatingTitle(false)}
          />
        </>
      ) : (
        <h3 className="border-b-2 border-transparent font-medium text-lg text-center text-blue-900 uppercase whitespace-nowrap text-ellipsis overflow-hidden">
          {board.title}
        </h3>
      )}

      {!isUpdatingTitle && (
        <>
          <Button onClick={() => setIsUpdatingTitle(true)}>
            <HiOutlinePencil />
          </Button>

          <Menu.Toggler
            id={`board-${board.id}-color-settings`}
            className="w-6 h-6 flex justify-center items-center rounded-4xl text-lg text-zinc-600 hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer disabled:cursor-not-allowed"
          >
            <HiOutlineAdjustmentsHorizontal />
          </Menu.Toggler>

          <Menu.ColorsList id={`board-${board.id}-color-settings`} />

          <Modal.Open windowName={`remove-board-${board.id}`}>
            <Button disabled={hasCards}>
              <HiOutlineTrash />
            </Button>
          </Modal.Open>

          <Modal.Window name={`remove-board-${board.id}`}>
            <Modal.Confirm onConfirm={handleRemove}>
              Are you sure you want to remove "{board.title}" board?
            </Modal.Confirm>
          </Modal.Window>
        </>
      )}
    </header>
  );
}
