import type { ICard } from '../../types/ICard';
import { useState } from 'react';
import { useBoardContext } from '../../hooks/useBoardContext';
import { CardContext } from '../../context/CardContext';
import { CardHeader } from './CardHeader';
import { CardMain } from './CardMain';
import { CardFooter } from './CardFooter';
import { DetailedCardHeader } from './DetailedCardHeader';

interface CardProps {
  card: ICard;
}

export function Card({ card }: CardProps) {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const { isDetailed } = useBoardContext();

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData('text/plain', card.id);
  }

  return (
    <CardContext.Provider value={{ card, setIsAddingTask }}>
      <div
        className="py-2 px-3 border-2 border-transparent hover:border-blue-900 rounded-lg  bg-[#FFFFFF] shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
        draggable="true"
        onDragStart={isDetailed ? () => {} : handleDragStart}
      >
        {isDetailed ? <DetailedCardHeader /> : <CardHeader />}
        <CardMain />
        {isAddingTask && <CardFooter />}
      </div>
    </CardContext.Provider>
  );
}
