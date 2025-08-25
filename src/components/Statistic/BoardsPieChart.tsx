import { useStoreSelector } from '../../hooks/useStoreSelector';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import type { IBoard } from '../../types/IBoard';
import { getBrighterColor } from '../../utils/getBrighterColor';
import { Table } from '../UI/Table/Table';

type IPieDataObject = {
  [key: IBoard['id']]: {
    id: IBoard['id'];
    name: IBoard['title'];
    color: string;
    brighterColor: string;
    tasksNumber: number;
  };
};

export function BoardsPieChart() {
  const boards = useStoreSelector((store) => store.boards.boards);
  const cards = useStoreSelector((store) => store.cards.cards);

  const pieDataObject = boards.reduce((acc: IPieDataObject, board) => {
    acc[board.id] = {
      id: board.id,
      name: board.title,
      color: board.bgColor,
      brighterColor: getBrighterColor(board.bgColor),
      tasksNumber: 0,
    };

    return acc;
  }, {});

  cards.forEach(
    (card) => (pieDataObject[card.boardId].tasksNumber += card.tasks.length)
  );

  const data = Object.values(pieDataObject);

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
            {data.map((i) => (
              <Table.Row key={i.id}>
                <Table.Cell style={{ backgroundColor: `${i.color}` }}>
                  {i.name}
                </Table.Cell>
                <Table.Cell style={{ backgroundColor: `${i.color}` }}>
                  {i.tasksNumber}
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
              dataKey="tasksNumber"
            >
              {data.map((i) => (
                <Cell key={`cell-${i.name}`} fill={i.brighterColor} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
