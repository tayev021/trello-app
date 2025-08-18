import { useState } from 'react';
import { useBoardContext } from '../../hooks/useBoardContext';
import { useDispatch } from 'react-redux';
import { createCard } from '../../store/cardsSlice';
import { Input } from '../forms/Input';
import { HiPlus } from 'react-icons/hi2';

export function BoardFooter() {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const { board } = useBoardContext();
  const dispatch = useDispatch();

  function handleCreateCard(cardTitle: string) {
    dispatch(createCard({ title: cardTitle, boardId: board.id }));
  }

  return (
    <footer className="p-4">
      {isAddingCard ? (
        <>
          <Input
            className="py-0.5 px-3 rounded-2xl border-zinc-600  focus:outline-0 font-normal text-base bg-[#FFFFFF] shadow-[0_1px_3px_rgba(80,80,80,0.5)]"
            onSubmit={handleCreateCard}
            onClose={() => setIsAddingCard(false)}
          />
        </>
      ) : (
        <button
          className="py-0.5 px-3 flex gap-1 items-center rounded-2xl cursor-pointer hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] active:bg-blue-200"
          onClick={() => setIsAddingCard(true)}
        >
          <HiPlus />
          Add a card
        </button>
      )}
    </footer>
  );
}
