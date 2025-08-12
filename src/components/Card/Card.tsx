import type { ICard } from '../../types/ICard';

interface CardProps {
  card: ICard;
}

export function Card({ card }: CardProps) {
  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData('text/plain', card.id);
  }

  return (
    <div
      className="py-2 px-3 border-2 border-transparent hover:border-blue-900 rounded-lg  bg-[#FFFFFF] shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <h4 className="font-normal">{card.title}</h4>
    </div>
  );
}
