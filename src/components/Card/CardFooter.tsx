import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/cardsSlice';
import type { ICard } from '../../types/ICard';

interface CardFooterProps {
  cardId: ICard['id'];
  onClose: () => void;
}

export function CardFooter({ cardId, onClose }: CardFooterProps) {
  const [taskNameValue, setTaskNameValue] = useState('');
  const ref = useOutsideClick<HTMLFormElement>(onClose);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskNameValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameValue.length > 0) {
      dispatch(createTask({ id: cardId, name: taskNameValue }));
      onClose();
    }
  }

  return (
    <footer className="mt-2 mb-1">
      <form
        ref={ref}
        className="grid grid-cols-[1fr_min-content] items-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full py-0.5 px-3 rounded-2xl border-zinc-600  focus:outline-0 font-normal text-sm leading-0 bg-[#FFFFFF] shadow-[0_1px_3px_rgba(60,60,60,0.7)]"
          type="text"
          value={taskNameValue}
          onChange={handleChange}
          autoFocus
        />
        <button
          className="py-1 px-4 rounded-2xl leading-none uppercase hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(60,60,60,0.7)] text-sm cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </form>
    </footer>
  );
}
