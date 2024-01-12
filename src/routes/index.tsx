import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage';
import RootPage from 'pages/RootPage';
import MainScreen from 'components/MainScreen';
import Resume from 'pages/Resume';

export const rootRouter = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <MainScreen />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
