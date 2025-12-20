import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import API from "../api/axiosClient";

export default function PrivateRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
