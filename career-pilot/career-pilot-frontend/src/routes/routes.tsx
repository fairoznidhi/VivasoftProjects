import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import App from "@/App";
import AuthLayout from "@/components/layout/AuthLayout";
import CustomerLayout from "@/components/layout/CustomerLayout";
import Test from "@/pages/Test";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";
import Home from "@/pages/Home";
import UploadResume from "@/pages/UploadResume";
import AiInterview from "@/pages/AiInterview";
import Jobs from "@/pages/Jobs";
import Courses from "@/pages/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/ai-interview",
        element: <AiInterview />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/upload-resume",
        element: <UploadResume />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
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
        element: <Register />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
