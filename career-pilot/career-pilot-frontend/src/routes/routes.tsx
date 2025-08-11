import App from "@/App";
import AuthLayout from "@/components/layout/AuthLayout";
import HomeLayout from "@/components/layout/HomeSublayout";
import NavbarLayout from "@/components/layout/NavbarLayout";
import { startActions } from "@/constants/paths";
import AiInterview from "@/pages/AiInterview";
import Courses from "@/pages/Courses";
import ExploreCuratedJobs from "@/pages/ExploreCuratedJobs";
import Home from "@/pages/Home";
import Jobs from "@/pages/Jobs";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import Test from "@/pages/Test";
import UploadResume from "@/pages/UploadResume";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <HomeLayout />,
        children: [
          ...startActions.map((action) => ({
            path: action.path,
            element: <action.component />,
          })),
        ],
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
      {
        path: "/explore-curated-jobs",
        element: <ExploreCuratedJobs />,
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
