import { useState } from 'react';
import { useBoardContext } from '../../hooks/useBoardContext';
import { useDispatch } from 'react-redux';
import type { ITask } from '../../types/ITask';
import type { ICard } from '../../types/ICard';
import {
  updateTaskName,
  toggleTaskStatus,
  removeTask,
} from '../../store/cardsSlice';
import { Input } from '../forms/Input';
import { Modal } from '../Modal/Modal';
import { HiOutlinePencil, HiXMark } from 'react-icons/hi2';
import styles from './Task.module.css';

interface TaskProps {
  task: ITask;
  cardId: ICard['id'];
}

export function Task({ task, cardId }: TaskProps) {
  const [isUpdatingName, setIsUpdatingName] = useState(false);
  const { isDetailed } = useBoardContext();
  const dispatch = useDispatch();

  const style = !isDetailed
    ? { gridTemplateColumns: 'min-content 1fr min-content' }
    : isUpdatingName
    ? { gridTemplateColumns: '1fr', padding: '0' }
    : {};

  function handleNameUpdate(taskName: string) {
    dispatch(updateTaskName({ id: cardId, taskId: task.id, name: taskName }));
  }

  function handleToggleTaskStatus() {
    dispatch(toggleTaskStatus({ id: cardId, taskId: task.id }));
  }

  function handleRemoveTask() {
    dispatch(removeTask({ id: cardId, taskId: task.id }));
  }

  return (
    <li
      className="grid grid-cols-[min-content_1fr_min-content_min-content] gap-1 p-1 rounded-md text-base hover:bg-zinc-200"
      style={style}
    >
      {isUpdatingName ? (
        <Input
          className="py-[1px] pl-5 pr-2 border-b-2 border-blue-900 leading-none"
          initialValue={task.name}
          onSubmit={handleNameUpdate}
          onClose={() => setIsUpdatingName(false)}
        />
      ) : (
        <>
          <label className={styles['checkbox-container']}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={handleToggleTaskStatus}
            />
            <div className={styles['checkbox-mark']}></div>
          </label>

          <p className="border-b-2 border-transparent overflow-hidden whitespace-nowrap text-ellipsis leading-none">
            {task.name}
          </p>
        </>
      )}

      {!isUpdatingName && (
        <>
          {isDetailed && (
            <button
              className="hover:text-blue-700 cursor-pointer"
              onClick={() => setIsUpdatingName(true)}
            >
              <HiOutlinePencil />
            </button>
          )}

          <Modal.Open windowName={`remove-task-${task.id}`}>
            <button className="hover:text-red-700 cursor-pointer">
              <HiXMark />
            </button>
          </Modal.Open>

          <Modal.Window name={`remove-task-${task.id}`}>
            <Modal.Confirm onConfirm={handleRemoveTask}>
              Are you sure you want to remove "{task.name}" task?
            </Modal.Confirm>
          </Modal.Window>
        </>
      )}
    </li>
  );
}
