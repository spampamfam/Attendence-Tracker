import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Layout from "../components/layout/Layout";

import Login from "../features/auth/Pages/Login";
import Signup from "../features/auth/Pages/Signup";

import AppLayout from "../components/layout/AppLayout";

import Dashboard from "../features/user/pages/Dashboard";
import Courses from "../features/user/pages/Courses";
import Calendar from "../features/user/pages/Calendar";
import Settings from "../features/user/pages/Settings";

import CourseModal from "../components/UI/modal/CourseModal";
import AddCourseModal from "../components/UI/modal/AddCourseModal";

const router = createBrowserRouter([
  //unprotected routes
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          //{ index: true, element: <Landing /> },
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },

  //protected routes
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/app",
        element: <AppLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "courses", element: <Courses /> },
          { path: "calendar", element: <Calendar /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
  {
    path: "/dev",
    element: <AppLayout />,
    children: [
      {
        path: "modal",
        children: [
          { path: "view", element: <CourseModal /> },
          { path: "add", element: <AddCourseModal /> },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
