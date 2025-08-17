import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { Modal } from './components/Modal/Modal';
import { Menu } from './components/Menu/Menu';
import { store } from './store/store';
import { router } from './pages/Router';

export function App() {
  return (
    <Provider store={store}>
      <Modal>
        <Menu>
          <RouterProvider router={router} />
        </Menu>
      </Modal>
    </Provider>
  );
}
