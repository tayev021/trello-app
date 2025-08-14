import type { IBoard } from '../../types/IBoard';
import { useDispatch } from 'react-redux';
import { useStoreSelector } from '../../hooks/useStoreSelector';
import { updateCardBoard } from '../../store/cardsSlice';
import { BoardHeader } from './BoardHeader';
import { BoardMain } from './BoardMain';
import { BoardFooter } from './BoardFooter';

interface BoardProps {
  board: IBoard;
}

export function Board({ board }: BoardProps) {
  const dispatch = useDispatch();
  const cards = useStoreSelector((store) => store.cards.cards);
  const filteredCards = cards.filter((cards) => cards.boardId === board.id);

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    const cardId = event.dataTransfer.getData('text/plain');
    dispatch(updateCardBoard({ id: cardId, boardId: board.id }));
  }

  return (
    <div
      className="grid grid-rows-[min-content_1fr_min-content] rounded-lg bg-[#F1F2F4] shadow-xl overflow-hidden"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <BoardHeader board={board} hasCards={!!filteredCards.length} />
      <BoardMain cards={filteredCards} />
      <BoardFooter board={board} />
    </div>
  );
}
