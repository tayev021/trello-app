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

interface IStyleCardHeader {
  marginBottom?: string;
  gridTemplateColumns?: string;
}

export function DetailedCardHeader() {
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
  const { card, setIsAddingTask } = useCardContext();
  const dispatch = useDispatch();

  const style: IStyleCardHeader = {};

  if (card.tasks.length > 0) style.marginBottom = '8px';
  if (isUpdatingTitle) style.gridTemplateColumns = '1fr';

  function handleUpdateTitle(title: string): void {
    dispatch(updateCardTitle({ id: card.id, title: title }));
  }

  return (
    <header
      className="grid grid-cols-[1fr_repeat(3,min-content)] gap-2"
      style={style}
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

      {!isUpdatingTitle && (
        <>
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
        </>
      )}
    </header>
  );
}
