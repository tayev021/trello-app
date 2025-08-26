import type { IBoardData } from '../../types/IBoardData';
import { Table } from '../UI/Table/Table';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

interface IBoardsPieChartProps {
  data: {
    id: IBoardData['id'];
    name: IBoardData['name'];
    color: IBoardData['color'];
    brighterColor: string;
    tasksQuantity: number;
  }[];
}

export function BoardsPieChart({ data }: IBoardsPieChartProps) {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-[#ffffff] shadow-[0_1px_3px_rgba(80,80,80,0.5)]">
      <h3 className="mb-4 font-semibold text-base text-blue-900 text-center uppercase">
        Tasks on Boards
      </h3>
      <div className="grow grid grid-cols-[minmax(min-content,1fr)_1fr] items-center gap-4">
        <Table>
          <thead>
            <Table.Row>
              <Table.HeadCell>Board</Table.HeadCell>
              <Table.HeadCell>Tasks</Table.HeadCell>
            </Table.Row>
          </thead>
          <tbody className="">
            {data.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell style={{ backgroundColor: `${item.color}` }}>
                  {item.name}
                </Table.Cell>
                <Table.Cell style={{ backgroundColor: `${item.color}` }}>
                  {item.tasksQuantity}
                </Table.Cell>
              </Table.Row>
            ))}
          </tbody>
        </Table>
        <div className="flex justify-center">
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
              animationBegin={0}
              animationDuration={1000}
              fill="#8884d8"
              dataKey="tasksQuantity"
            >
              {data.map((item) => (
                <Cell key={`cell-${item.name}`} fill={item.brighterColor} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
