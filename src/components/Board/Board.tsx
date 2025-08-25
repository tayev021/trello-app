import type { IBoard } from '../../types/IBoard';
import { useDispatch } from 'react-redux';
import { useCards } from '../../hooks/useCards';
import { updateCardBoard } from '../../store/cardsSlice';
import { BoardHeader } from './BoardHeader';
import { BoardMain } from './BoardMain';
import { BoardFooter } from './BoardFooter';
import { BoardContext } from '../../context/BoardContext';
import { DetailedBoardHeader } from './DetailedBoardHeader';

interface BoardProps {
  board: IBoard;
  isDetailed?: boolean;
}

export function Board({ board, isDetailed = false }: BoardProps) {
  const dispatch = useDispatch();
  const cards = useCards();
  const filteredCards = cards.filter((cards) => cards.boardId === board.id);

  function handleDragOver(event: React.DragEvent<HTMLLIElement>) {
    event.preventDefault();
  }

  function handleDrop(event: React.DragEvent<HTMLLIElement>) {
    event.preventDefault();

    const cardId = event.dataTransfer.getData('text/plain');
    dispatch(updateCardBoard({ id: cardId, boardId: board.id }));
  }

  return (
    <BoardContext.Provider value={{ board, cards: filteredCards, isDetailed }}>
      <li
        className="max-w-[900px] grid grid-rows-[min-content_1fr_min-content] rounded-lg shadow-xl overflow-hidden"
        style={
          isDetailed
            ? { margin: '0 auto', backgroundColor: `${board.bgColor}` }
            : { backgroundColor: `${board.bgColor}` }
        }
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {isDetailed ? <DetailedBoardHeader /> : <BoardHeader />}
        <BoardMain />
        <BoardFooter />
      </li>
    </BoardContext.Provider>
  );
}
