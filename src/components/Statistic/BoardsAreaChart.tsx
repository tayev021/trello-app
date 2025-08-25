import type { IBoard } from '../../types/IBoard';
import { useBoards } from '../../hooks/useBoards';
import { useStoreSelector } from '../../hooks/useStoreSelector';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type IAreaDataObject = {
  [key: IBoard['id']]: {
    name: IBoard['title'];
    ['Tasks In Progress']: number;
    ['Tasks Done']: number;
  };
};

const toPercent = (decimal: number) => `${(decimal * 100).toFixed(2)}%`;

export function BoardsAreaChart() {
  const boards = useBoards();
  const cards = useStoreSelector((store) => store.cards.cards);

  const barDataObject = boards.reduce((acc: IAreaDataObject, board) => {
    const name =
      board.title.length > 8 ? board.title.slice(0, 5) + '...' : board.title;

    acc[board.id] = {
      name: name,
      ['Tasks In Progress']: 0,
      ['Tasks Done']: 0,
    };

    return acc;
  }, {});

  cards.forEach((card) => {
    card.tasks.forEach((task) => {
      if (task.isDone) {
        barDataObject[card.boardId]['Tasks Done']++;
      } else {
        barDataObject[card.boardId]['Tasks In Progress']++;
      }
    });
  });

  const data = Object.values(barDataObject);

  return (
    <div className="flex flex-col p-4 rounded-lg bg-[#ffffff] shadow-[0_1px_3px_rgba(80,80,80,0.5)]">
      <h3 className="mb-4 font-semibold text-base text-blue-900 text-center uppercase">
        Percentage of completed tasks
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart width={500} height={400} data={data} stackOffset="expand">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Tasks Done"
            stackId="1"
            fill="#86efac"
            stroke="#22c55e"
          />
          <Area
            type="monotone"
            dataKey="Tasks In Progress"
            stackId="1"
            fill="#fef08a"
            stroke="#facc15"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
