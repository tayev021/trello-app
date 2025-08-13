import type { ICard } from '../../types/ICard';
import { Task } from '../Task/Task';

interface CardMainProps {
  card: ICard;
}

export function CardMain({ card }: CardMainProps) {
  return (
    <main>
      <ul>
        {card.tasks.map((task) => (
          <Task task={task} cardId={card.id} key={task.id} />
        ))}
      </ul>
    </main>
  );
}
