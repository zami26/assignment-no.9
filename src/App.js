import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './componente/Blog/Blog';
import Topics from './componente/Topics/Topics';
import Statistic from './componente/Statistic/Statistic';
import Main from './layout/Main';
import Home from './componente/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
