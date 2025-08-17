import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useCardContext } from '../../hooks/useCardContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/cardsSlice';

export function CardFooter() {
  const [taskNameValue, setTaskNameValue] = useState('');
  const { card, setIsAddingTask } = useCardContext();
  const ref = useOutsideClick<HTMLFormElement>(() => setIsAddingTask(false));
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskNameValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameValue.length > 0) {
      dispatch(createTask({ id: card.id, name: taskNameValue }));
      setIsAddingTask(false);
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
