import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";

// import HomePage from "../features/home/pages/HomePage";
// import CoursesPage from "../features/courses/pages/CoursesPage";
// import SettingsPage from "../features/settings/pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // layout wraps every page
    children: [
      //   { index: true, element: <HomePage /> },
      //   { path: "courses", element: <CoursesPage /> },
      //   { path: "settings", element: <SettingsPage /> },
      // add more pages here
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
