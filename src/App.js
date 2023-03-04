import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Header from './componente/Header/Header';
import Home from './componente/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
