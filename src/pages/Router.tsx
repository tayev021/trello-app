import { createBrowserRouter } from 'react-router';
import { AppLayout } from './AppLayout';
import { HomePage } from './HomePage/HomePage';
import { BoardPage } from './BoardPage/BoardPage';
import { StatisticPage } from './StatisticPage/StatisticPage';

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'board/:boardId',
        Component: BoardPage,
      },
      {
        path: 'statistic',
        Component: StatisticPage,
      },
    ],
  },
]);
