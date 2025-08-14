import { useDispatch } from 'react-redux';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { createCard } from '../../store/cardsSlice';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useBoardContext } from '../../hooks/useBoardContext';

interface BoardCardInputProps {
  onClose: () => void;
}

export function BoardCardInput({ onClose }: BoardCardInputProps) {
  const dispatch = useDispatch();
  const ref = useOutsideClick<HTMLFormElement>(onClose);
  const [cardTitleValue, setCardTitleValue] = useState('');
  const { board } = useBoardContext();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCardTitleValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cardTitleValue.length > 0) {
      dispatch(createCard({ title: cardTitleValue, boardId: board.id }));
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
