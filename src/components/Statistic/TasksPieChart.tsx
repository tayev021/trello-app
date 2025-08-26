import { Table } from '../UI/Table/Table';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

interface ITasksPieChartProps {
  data: { name: string; quantity: number }[];
}

export function TasksPieChart({ data }: ITasksPieChartProps) {
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
            <Table.Row>
              <Table.Cell style={{ backgroundColor: '#fef08a' }}>
                {data[0].name}
              </Table.Cell>
              <Table.Cell style={{ backgroundColor: '#fef08a' }}>
                {data[0].quantity}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ backgroundColor: '#86efac' }}>
                {data[1].name}
              </Table.Cell>
              <Table.Cell style={{ backgroundColor: '#86efac' }}>
                {data[1].quantity}
              </Table.Cell>
            </Table.Row>
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
              <Cell key={`cell-inProgress`} fill="#facc15" />
              <Cell key={`cell-done`} fill="#22c55e" />
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
