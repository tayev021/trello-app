import { useState } from 'react';
import type { ICard } from '../../types/ICard';
import { CardHeader } from './CardHeader';
import { CardMain } from './CardMain';
import { CardFooter } from './CardFooter';

interface CardProps {
  card: ICard;
}

export function Card({ card }: CardProps) {
  const [isAddingTask, setIsAddingTask] = useState(false);

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData('text/plain', card.id);
  }

  return (
    <div
      className="py-2 px-3 border-2 border-transparent hover:border-blue-900 rounded-lg  bg-[#FFFFFF] shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <CardHeader card={card} onStartAddingTask={() => setIsAddingTask(true)} />
      <CardMain card={card} />
      {isAddingTask && (
        <CardFooter cardId={card.id} onClose={() => setIsAddingTask(false)} />
      )}
    </div>
  );
}
