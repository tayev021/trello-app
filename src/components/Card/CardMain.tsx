import { useCardContext } from '../../hooks/useCardContext';
import { Task } from '../Task/Task';

export function CardMain() {
  const { card } = useCardContext();

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
