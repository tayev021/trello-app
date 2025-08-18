import { useState } from 'react';
import { useCardContext } from '../../hooks/useCardContext';
import { useDispatch } from 'react-redux';
import { updateCardTitle } from '../../store/cardsSlice';
import { Input } from '../forms/Input';
import { HiOutlinePlus } from 'react-icons/hi2';

export function CardHeader() {
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
  const { card, setIsAddingTask } = useCardContext();
  const dispatch = useDispatch();

  function handleUpdateTitle(title: string): void {
    dispatch(updateCardTitle({ id: card.id, title: title }));
  }

  return (
    <header
      className="grid grid-cols-[1fr_min-content] gap-2"
      style={card.tasks.length > 0 ? { marginBottom: '8px' } : {}}
    >
      {isUpdatingTitle ? (
        <Input
          className="border-b-2 border-blue-900 font-normal"
          initialValue={card.title}
          onSubmit={handleUpdateTitle}
          onClose={() => setIsUpdatingTitle(false)}
        />
      ) : (
        <h4 className="border-b-2 border-transparent font-normal whitespace-nowrap text-ellipsis overflow-hidden ">
          {card.title}
        </h4>
      )}

      <button
        className="w-6 h-6 flex justify-center items-center rounded-4xl text-lg text-zinc-600 hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
        onClick={() => setIsAddingTask(true)}
      >
        <HiOutlinePlus />
      </button>
    </header>
  );
}
