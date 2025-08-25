import {
  HiOutlineCalendarDateRange,
  HiOutlineChartBar,
  HiOutlineDocument,
} from 'react-icons/hi2';
import { StatisticCard } from './StatisticCard';
import { useStoreSelector } from '../../hooks/useStoreSelector';

export function StatisticCards() {
  const boards = useStoreSelector((store) => store.boards.boards);
  const cards = useStoreSelector((store) => store.cards.cards);
  const taskQuantity = cards.reduce(
    (acc, card) => (acc += card.tasks.length),
    0
  );

  return (
    <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 mb-5">
      <StatisticCard
        title="Total Boards"
        quantity={boards.length}
        icon={<HiOutlineCalendarDateRange />}
        iconColor="#5b21b6"
      />
      <StatisticCard
        title="Total Cards"
        quantity={cards.length}
        icon={<HiOutlineDocument />}
        iconColor="#ca8a04"
      />
      <StatisticCard
        title="Total Tasks"
        quantity={taskQuantity}
        icon={<HiOutlineChartBar />}
        iconColor="#10b981"
      />
    </ul>
  );
}
