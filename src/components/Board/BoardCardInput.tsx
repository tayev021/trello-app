import { useDispatch } from 'react-redux';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { IBoard } from '../../types/IBoard';
import { createCard } from '../../store/cardsSlice';

interface BoardCardInputProps {
  boardId: IBoard['id'];
  onClose: () => void;
}

export function BoardCardInput({ boardId, onClose }: BoardCardInputProps) {
  const dispatch = useDispatch();
  const ref = useOutsideClick<HTMLFormElement>(onClose);
  const [cardTitleValue, setCardTitleValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCardTitleValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cardTitleValue.length > 0) {
      dispatch(createCard({ title: cardTitleValue, boardId: boardId }));
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
        className="w-full py-0.5 px-3 rounded-2xl border-zinc-600  focus:outline-0 font-normal text-base bg-[#FFFFFF] shadow-[0_1px_3px_rgba(80,80,80,0.5)]"
        type="text"
        value={cardTitleValue}
        onChange={handleChange}
        autoFocus
      />
      <button
        className="py-1 px-4 rounded-2xl leading-none uppercase hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] text-base cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
