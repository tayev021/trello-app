import { BoardsPieChart } from '../../components/Statistic/BoardsPieChart';
import { BackButton } from '../../components/UI/BackButton';
import { StatisticCards } from '../../components/Statistic/StatisticCards';
import { TasksPieChart } from '../../components/Statistic/TasksPieChart';
import { BoardsBarChart } from '../../components/Statistic/BoardsBarChart';
import { BoardsAreaChart } from '../../components/Statistic/BoardsAreaChart';

export function StatisticPage() {
  return (
    <div className="max-w-[1200px] p-4 mx-[auto] rounded-lg bg-[#F1F2F4] shadow-xl overflow-hidden ">
      <header className="grid grid-cols-[110px_1fr_110px] gap-4 mb-5">
        <BackButton />
        <h2 className="font-semibold text-lg text-blue-900 text-center uppercase">
          Statistic
        </h2>
      </header>
      <main>
        <StatisticCards />
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,1fr))] gap-4">
          <BoardsPieChart />
          <TasksPieChart />
          <BoardsBarChart />
          <BoardsAreaChart />
        </div>
      </main>
    </div>
  );
}
