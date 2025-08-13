import { useDispatch } from 'react-redux';
import { removeTask, toggleTaskStatus } from '../../store/cardsSlice';
import type { ITask } from '../../types/ITask';
import type { ICard } from '../../types/ICard';
import { HiXMark } from 'react-icons/hi2';
import styles from './Task.module.css';
import { Modal } from '../Modal/Modal';

interface TaskProps {
  task: ITask;
  cardId: ICard['id'];
}

export function Task({ task, cardId }: TaskProps) {
  const dispatch = useDispatch();

  function handleToggleTaskStatus() {
    dispatch(toggleTaskStatus({ id: cardId, taskId: task.id }));
  }

  function handleRemoveTask() {
    dispatch(removeTask({ id: cardId, taskId: task.id }));
  }

  return (
    <li className="grid grid-cols-[min-content_1fr_min-content] gap-1 p-1 rounded-md text-base hover:bg-zinc-200">
      <label className={styles['checkbox-container']}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggleTaskStatus}
        />
        <div className={styles['checkbox-mark']}></div>
      </label>

      <p className="overflow-hidden whitespace-nowrap text-ellipsis leading-none">
        {task.name}
      </p>

      <Modal.Open windowName={`remove-task-${task.id}`}>
        <button className="hover:text-red-600 cursor-pointer">
          <HiXMark />
        </button>
      </Modal.Open>

      <Modal.Window name={`remove-task-${task.id}`}>
        <Modal.Confirm onConfirm={handleRemoveTask}>
          Are you sure you want to remove "{task.name}" task?
        </Modal.Confirm>
      </Modal.Window>
    </li>
  );
}
