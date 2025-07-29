import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import AuthLayout from "../components/layout/AuthLayout";
import CustomerLayout from "../components/layout/CustomerLayout";
import Test from "../pages/Test";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout/>,
    children: [
      {
        index:true,
        element: <Login />,
      },
      {
        path: "/ai-interview",
        element: <Login />,
      },
      {
        path: "/jobs",
        element: <Login />,
      },
      {
        path: "/courses",
        element: <Login />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/app",
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
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
  {
    path:"/test",
    element:<Test/>
  }
]);

export default router;
