import type { IBoard } from '../../types/IBoard';
import { useStoreSelector } from '../../hooks/useStoreSelector';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type IBarDataObject = {
  [key: IBoard['id']]: {
    name: IBoard['title'];
    ['Tasks In Progress']: number;
    ['Tasks Done']: number;
  };
};

export function BoardsBarChart() {
  const boards = useStoreSelector((store) => store.boards.boards);
  const cards = useStoreSelector((store) => store.cards.cards);

  const barDataObject = boards.reduce((acc: IBarDataObject, board) => {
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
        Tasks Progress on Boards
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Tasks In Progress"
            fill="#facc15"
            activeBar={<Rectangle fill="#fef08a" stroke="#facc15" />}
          />
          <Bar
            dataKey="Tasks Done"
            fill="#22c55e"
            activeBar={<Rectangle fill="#86efac" stroke="#22c55e" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
