import type { IBoardData } from '../../types/IBoardData';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface IBoardsAreaChartProps {
  data: {
    name: IBoardData['name'];
    ['Tasks In Progress']: IBoardData['Tasks In Progress'];
    ['Tasks Done']: IBoardData['Tasks Done'];
  }[];
}

const toPercent = (decimal: number) => `${(decimal * 100).toFixed(2)}%`;

export function BoardsAreaChart({ data }: IBoardsAreaChartProps) {
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
