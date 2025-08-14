import type { ICard } from '../../types/ICard';
import { useDispatch } from 'react-redux';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { updateCardTitle } from '../../store/cardsSlice';

interface BoardTitleInputProps {
  card: ICard;
  onClose: () => void;
}

export function CardTitleInput({ card, onClose }: BoardTitleInputProps) {
  const dispatch = useDispatch();
  const ref = useOutsideClick<HTMLFormElement>(onClose);
  const [titleValue, setTitleValue] = useState(card.title);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitleValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (titleValue.trim().length > 0) {
      dispatch(updateCardTitle({ id: card.id, title: titleValue.trim() }));
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
        className="w-full border-b-2 border-blue-900 focus:outline-0 font-normal"
        type="text"
        value={titleValue}
        onChange={handleChange}
        autoFocus
      />
      <button
        className="py-1 px-2 rounded-xl leading-none capitalize hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] text-sm cursor-pointer"
        type="submit"
      >
        Update
      </button>
    </form>
  );
}
