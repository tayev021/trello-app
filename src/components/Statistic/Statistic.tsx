import { useBoardsData } from '../../hooks/useBoardsData';
import { StatisticCard } from './StatisticCard';
import {
  HiOutlineCalendarDateRange,
  HiOutlineChartBar,
  HiOutlineDocument,
} from 'react-icons/hi2';
import { BoardsPieChart } from './BoardsPieChart';
import { TasksPieChart } from './TasksPieChart';
import { BoardsBarChart } from './BoardsBarChart';
import { BoardsAreaChart } from './BoardsAreaChart';

export function Statistic() {
  const {
    boardsQuantity,
    cardsQuantity,
    tasksQuantity,
    tasksInProgress,
    tasksDone,
    boardsData,
  } = useBoardsData();

  return (
    <>
      <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 mb-5">
        <StatisticCard
          title="Total Boards"
          quantity={boardsQuantity}
          icon={<HiOutlineCalendarDateRange />}
          iconColor="#5b21b6"
        />
        <StatisticCard
          title="Total Cards"
          quantity={cardsQuantity}
          icon={<HiOutlineDocument />}
          iconColor="#ca8a04"
        />
        <StatisticCard
          title="Total Tasks"
          quantity={tasksQuantity}
          icon={<HiOutlineChartBar />}
          iconColor="#10b981"
        />
      </ul>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,1fr))] gap-4">
        <BoardsPieChart data={boardsData} />
        <TasksPieChart
          data={[
            { name: 'In Progress', quantity: tasksInProgress },
            { name: 'Done', quantity: tasksDone },
          ]}
        />
        <BoardsBarChart data={boardsData} />
        <BoardsAreaChart data={boardsData} />
      </div>
    </>
  );
}
