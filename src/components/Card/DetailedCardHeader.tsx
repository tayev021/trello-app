import { useState } from 'react';
import { useCardContext } from '../../hooks/useCardContext';
import { useDispatch } from 'react-redux';
import { removeCard, updateCardTitle } from '../../store/cardsSlice';
import { Input } from '../forms/Input';
import { Button } from '../forms/Button';
import { Modal } from '../Modal/Modal';
import {
  HiOutlinePencil,
  HiOutlinePlus,
  HiOutlineTrash,
} from 'react-icons/hi2';

export function DetailedCardHeader() {
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
  const { card, setIsAddingTask } = useCardContext();
  const dispatch = useDispatch();

  function handleUpdateTitle(title: string): void {
    dispatch(updateCardTitle({ id: card.id, title: title }));
  }

  return (
    <header
      className="grid grid-cols-[1fr_repeat(3,min-content)] gap-2"
      style={card.tasks.length > 0 ? { marginBottom: '8px' } : {}}
    >
      {isUpdatingTitle ? (
        <Input
          className="border-b-2 border-blue-900 font-normal"
          initialValue={card.title}
          onSubmit={handleUpdateTitle}
          onClose={() => setIsUpdatingTitle(false)}
        />
      ) : (
        <h4 className="border-b-2 border-transparent font-normal whitespace-nowrap text-ellipsis overflow-hidden ">
          {card.title}
        </h4>
      )}

      <Button onClick={() => setIsUpdatingTitle(true)}>
        <HiOutlinePencil />
      </Button>
      <Button onClick={() => setIsAddingTask(true)}>
        <HiOutlinePlus />
      </Button>
      <Modal.Open windowName={`remove-card-${card.id}`}>
        <Button>
          <HiOutlineTrash />
        </Button>
      </Modal.Open>

      <Modal.Window name={`remove-card-${card.id}`}>
        <Modal.Confirm onConfirm={() => dispatch(removeCard(card.id))}>
          Are you sure you want to remove "{card.title}" card?
        </Modal.Confirm>
      </Modal.Window>
    </header>
  );
}
