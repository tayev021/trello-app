import { useBoardContext } from '../../hooks/useBoardContext';
import { Card } from '../Card/Card';

export function BoardMain() {
  const { cards } = useBoardContext();

  return (
    <main
      className="flex flex-col px-4"
      style={cards.length === 0 ? { justifyContent: 'center' } : {}}
    >
      {cards.length === 0 ? (
        <p className="py-5 italic text-zinc-400 text-center">
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
