import type { ICard } from '../../types/ICard';
import { Card } from '../Card/Card';

interface BoardHeaderProps {
  cards: ICard[];
}

export function BoardMain({ cards }: BoardHeaderProps) {
  return (
    <main className="px-4 flex flex-col justify-center">
      {cards.length === 0 ? (
        <p className="italic text-zinc-400 text-center">
          No cards on this board
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </ul>
      )}
    </main>
  );
}
