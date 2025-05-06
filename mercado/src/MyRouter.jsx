import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import PaginaErro from "./pages/PaginaErro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EditarProduto from "./pages/EditarProduto";
import CadastarProduto from "./pages/CadastarProduto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastraproduto",
        element: <CadastarProduto />,
      },
      {
        path: "/editarproduto/:id",
        element: <EditarProduto />,
      },
    ],
  },
]);

export default router;
