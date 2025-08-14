import type { ICard } from '../../types/ICard';
import { useDispatch } from 'react-redux';
import { Menu } from '../Menu/Menu';
import { Modal } from '../Modal/Modal';
import { removeCard } from '../../store/cardsSlice';
import {
  HiOutlineEllipsisHorizontal,
  HiOutlinePencil,
  HiOutlinePlus,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { useState } from 'react';
import { CardTitleInput } from './CardTitleInput';

interface CardHeaderProps {
  card: ICard;
  onStartAddingTask: () => void;
}

export function CardHeader({ card, onStartAddingTask }: CardHeaderProps) {
  const dispatch = useDispatch();
  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);

  return (
    <header
      className="grid grid-cols-[1fr_min-content_min-content] gap-2"
      style={card.tasks.length > 0 ? { marginBottom: '8px' } : {}}
    >
      {isUpdatingTitle ? (
        <CardTitleInput card={card} onClose={() => setIsUpdatingTitle(false)} />
      ) : (
        <h4 className="font-normal whitespace-nowrap text-ellipsis overflow-hidden ">
          {card.title}
        </h4>
      )}

      <button
        className="w-6 h-6 flex justify-center items-center rounded-4xl text-lg text-zinc-600 hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
        onClick={onStartAddingTask}
      >
        <HiOutlinePlus />
      </button>

      <Menu.Toggler
        id={`card-${card.id}-menu`}
        className="w-6 h-6 rounded-4xl text-2xl hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] cursor-pointer"
      >
        <HiOutlineEllipsisHorizontal />
      </Menu.Toggler>

      <Menu.List id={`card-${card.id}-menu`}>
        <Menu.Button onClick={() => setIsUpdatingTitle(true)}>
          <HiOutlinePencil /> <span>Update title</span>
        </Menu.Button>
        <Modal.Open windowName={`remove-card-${card.id}`}>
          <Menu.Button>
            <HiOutlineTrash /> <span>Remove</span>
          </Menu.Button>
        </Modal.Open>
      </Menu.List>

      <Modal.Window name={`remove-card-${card.id}`}>
        <Modal.Confirm onConfirm={() => dispatch(removeCard(card.id))}>
          Are you sure you want to remove "{card.title}" card?
        </Modal.Confirm>
      </Modal.Window>
    </header>
  );
}
