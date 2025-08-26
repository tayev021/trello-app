import { useCardContext } from '../../hooks/useCardContext';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/cardsSlice';
import { Input } from '../UI/forms/Input';

export function CardFooter() {
  const { card, setIsAddingTask } = useCardContext();
  const dispatch = useDispatch();

  function handleSubmit(taskName: string) {
    dispatch(createTask({ id: card.id, name: taskName }));
  }

  return (
    <footer className="mt-2 mb-1">
      <Input
        className="w-full py-0.5 px-3 rounded-2xl border-zinc-600  focus:outline-0 font-normal text-sm leading-0 bg-[#FFFFFF] shadow-[0_1px_3px_rgba(60,60,60,0.5)]"
        buttonTitle="Add"
        onSubmit={handleSubmit}
        onClose={() => setIsAddingTask(false)}
      />
    </footer>
  );
}
