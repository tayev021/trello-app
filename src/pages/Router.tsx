import { createBrowserRouter } from 'react-router';
import { AppLayout } from './AppLayout';
import { HomePage } from './HomePage/HomePage';
import { BoardPage } from './BoardPage/BoardPage';

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
    ],
  },
]);
