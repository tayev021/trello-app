import { useState } from 'react';
import { useBoardContext } from '../../hooks/useBoardContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeBoard, updateBoardTitle } from '../../store/boardsSlice';
import { Modal } from '../Modal/Modal';
import { Input } from '../forms/Input';
import { Button } from '../forms/Button';
import {
  HiOutlineArrowLeft,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi2';

export function DetailedBoardHeader() {
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
  const { board, cards } = useBoardContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hasCards = !!cards.length;

  function handleCloseUpdatingTitle() {
    setIsUpdatingTitle(false);
  }

  function onSubmitTitleUpdate(title: string): void {
    dispatch(updateBoardTitle({ id: board.id, title: title }));
  }

  return (
    <header className="grid grid-cols-[max-content_1fr_min-content_min-content] gap-4 items-center py-3 px-5 pr-4">
      <button
        className="flex items-center gap-2 py-0.5 px-3 rounded-2xl hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] active:bg-blue-200 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <HiOutlineArrowLeft /> Go Back
      </button>

      {isUpdatingTitle ? (
        <>
          <Input
            className="border-b-2 border-blue-900 font-medium uppercase text-lg text-blue-900"
            initialValue={board.title}
            onSubmit={onSubmitTitleUpdate}
            onClose={handleCloseUpdatingTitle}
          />
        </>
      ) : (
        <h3 className="border-b-2 border-transparent font-medium text-lg text-center text-blue-900 uppercase whitespace-nowrap text-ellipsis overflow-hidden">
          {board.title}
        </h3>
      )}

      <Button onClick={() => setIsUpdatingTitle(true)}>
        <HiOutlinePencil />
      </Button>
      <Modal.Open windowName={`remove-board-${board.id}`}>
        <Button disabled={hasCards}>
          <HiOutlineTrash />
        </Button>
      </Modal.Open>

      <Modal.Window name={`remove-board-${board.id}`}>
        <Modal.Confirm onConfirm={() => dispatch(removeBoard(board.id))}>
          Are you sure you want to remove "{board.title}" board?
        </Modal.Confirm>
      </Modal.Window>
    </header>
  );
}
