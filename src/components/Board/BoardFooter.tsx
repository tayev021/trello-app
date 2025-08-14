import { useState } from 'react';
import { HiPlus } from 'react-icons/hi2';
import { BoardCardInput } from './BoardCardInput';

export function BoardFooter() {
  const [isAddingCard, setIsAddingCard] = useState(false);

  return (
    <footer className="p-4">
      {isAddingCard ? (
        <BoardCardInput onClose={() => setIsAddingCard(false)} />
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
