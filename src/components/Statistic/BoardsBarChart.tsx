import type { IBoardData } from '../../types/IBoardData';
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

interface IBoardsBarChartProps {
  data: {
    name: IBoardData['name'];
    ['Tasks In Progress']: IBoardData['Tasks In Progress'];
    ['Tasks Done']: IBoardData['Tasks Done'];
  }[];
}

export function BoardsBarChart({ data }: IBoardsBarChartProps) {
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
