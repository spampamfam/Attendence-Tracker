import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";

import Dashboard from "../features/user/pages/Dashboard";
import Courses from "../features/user/pages/Courses";
import Calendar from "../features/user/pages/Calendar";
import Settings from "../features/user/pages/Settings";

import CourseModal from "../components/UI/Modal/CourseModal";

const router = createBrowserRouter([
  //unprotected routes
  {
    path: "/",
    // element: <Layout />, //implement this
    children: [
      //   { index: true, element: <Landing /> },
      //   { path: "login", element: <Login /> },
      //   { path: "signup", element: <Signup/> },
    ],
  },

  //protected routes
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "courses", element: <Courses /> },
      { path: "calendar", element: <Calendar /> },
      { path: "settings", element: <Settings /> },
      { path: "modal", element: <CourseModal /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
