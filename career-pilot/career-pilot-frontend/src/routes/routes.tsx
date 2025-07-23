import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import AuthLayout from "../components/layout/AuthLayout";
import Test from "../pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path:"/test",
    element:<Test/>
  }
]);

export default router;
