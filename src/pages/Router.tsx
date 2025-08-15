import { createBrowserRouter } from 'react-router';
import { HomePage } from './HomePage/HomePage';
import { AppLayout } from './AppLayout';

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [{ index: true, Component: HomePage }],
  },
]);
