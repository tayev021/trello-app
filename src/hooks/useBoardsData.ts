import type { IBoard } from '../types/IBoard';
import type { IBoardData } from '../types/IBoardData';
import { getBrighterColor } from '../utils/getBrighterColor';
import { useBoards } from './useBoards';
import { useCards } from './useCards';

type IBoardsDataObject = {
  [key: IBoard['id']]: IBoardData;
};

export function useBoardsData() {
  const boards = useBoards();
  const cards = useCards();

  const boardsQuantity = boards.length;
  const cardsQuantity = cards.length;
  let tasksQuantity = 0;
  let tasksInProgress = 0;
  let tasksDone = 0;

  const boardsDataObject = boards.reduce((acc: IBoardsDataObject, board) => {
    acc[board.id] = {
      id: board.id,
      name: board.title,
      color: board.bgColor,
      brighterColor: getBrighterColor(board.bgColor),
      tasksQuantity: 0,
      ['Tasks In Progress']: 0,
      ['Tasks Done']: 0,
    };

    return acc;
  }, {});

  cards.forEach((card) => {
    card.tasks.forEach((task) => {
      tasksQuantity++;
      boardsDataObject[card.boardId].tasksQuantity++;

      if (task.isDone) {
        tasksDone++;
        boardsDataObject[card.boardId]['Tasks Done']++;
      } else {
        tasksInProgress++;
        boardsDataObject[card.boardId]['Tasks In Progress']++;
      }
    });
  });

  const boardsData = Object.values(boardsDataObject);

  return {
    boardsQuantity,
    cardsQuantity,
    tasksQuantity,
    tasksInProgress,
    tasksDone,
    boardsData,
  };
}
