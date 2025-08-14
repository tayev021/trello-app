import type { IBoard } from '../../types/IBoard';
import { useDispatch } from 'react-redux';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { updateBoardTitle } from '../../store/boardsSlice';

interface BoardTitleInputProps {
  board: IBoard;
  onClose: () => void;
}

export function BoardTitleInput({ board, onClose }: BoardTitleInputProps) {
  const dispatch = useDispatch();
  const ref = useOutsideClick<HTMLFormElement>(onClose);
  const [titleValue, setTitleValue] = useState(board.title);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitleValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (titleValue.length > 0) {
      dispatch(updateBoardTitle({ id: board.id, title: titleValue }));
      onClose();
    }
  }

  return (
    <form
      ref={ref}
      className="grid grid-cols-[1fr_min-content] items-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full border-b-2 border-blue-900 focus:outline-0 font-medium text-lg text-blue-900 uppercase"
        type="text"
        value={titleValue}
        onChange={handleChange}
        autoFocus
      />
      <button
        className="py-1 px-2 rounded-xl leading-none uppercase hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] text-sm text-blue-900 cursor-pointer"
        type="submit"
      >
        Update
      </button>
    </form>
  );
}
