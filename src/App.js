import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './componente/Blog/Blog';
import Topics from './componente/Topics/Topics';
import Statistic from './componente/Statistic/Statistic';
import Main from './layout/Main';
import Home from './componente/Home/Home';
import Quiz from './componente/quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/',
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
    },
    { path: '*', element: <div>Nothing found here: ERROR 404</div> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
