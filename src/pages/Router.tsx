import { createBrowserRouter } from 'react-router';
import { Home } from './Home';
import { AppLayout } from './AppLayout';

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [{ index: true, Component: Home }],
  },
]);
