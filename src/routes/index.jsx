import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import BoardGames from '../pages/BoardGames/BoardGames';
import About from '../pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'board-games',
        element: <BoardGames />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;
