import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout_component/LayoutComponent';
import { Home } from './components/home_component/HomeComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement:<>404 Not Found</>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
