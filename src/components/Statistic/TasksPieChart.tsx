import { useCards } from '../../hooks/useCards';
import type { ITask } from '../../types/ITask';
import { Table } from '../UI/Table/Table';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

export function TasksPieChart() {
  const cards = useCards();
  const tasks = cards.reduce(
    (acc: ITask[], card) => [...acc, ...card.tasks],
    []
  );

  const data = [
    {
      name: 'In Progress',
      quantity: 0,
      color: '#fef08a',
      brighterColor: '#facc15',
    },
    {
      name: 'Done',
      quantity: 0,
      color: '#86efac',
      brighterColor: '#22c55e',
    },
  ];

  tasks.forEach((task) =>
    task.isDone ? data[1].quantity++ : data[0].quantity++
  );

  return (
    <div className="flex flex-col p-4 rounded-lg bg-[#ffffff] shadow-[0_1px_3px_rgba(80,80,80,0.5)]">
      <h3 className="mb-4 font-semibold text-base text-blue-900 text-center uppercase">
        Tasks Progress
      </h3>
      <div className="grow grid grid-cols-[minmax(min-content,1fr)_1fr] items-center gap-4">
        <Table>
          <thead>
            <Table.Row>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Tasks</Table.HeadCell>
            </Table.Row>
          </thead>
          <tbody>
            {data.map((item) => (
              <Table.Row key={item.name}>
                <Table.Cell style={{ backgroundColor: `${item.color}` }}>
                  {item.name}
                </Table.Cell>
                <Table.Cell style={{ backgroundColor: `${item.color}` }}>
                  {item.quantity}
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
              innerRadius={60}
              outerRadius={90}
              startAngle={-90}
              animationBegin={0}
              animationDuration={1000}
              fill="#8884d8"
              dataKey="quantity"
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
