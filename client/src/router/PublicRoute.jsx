import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "../components/UI/LoadingScreen";

export default function PublicRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const globalLoading = useSelector((state) => state.loading?.loading);

  if (globalLoading) {
    return <LoadingScreen fullscreen message={"Loading"} />;
  }

  if (isAuthenticated) {
    return <Navigate to="/app" />;
  }
  return <Outlet />;
}
