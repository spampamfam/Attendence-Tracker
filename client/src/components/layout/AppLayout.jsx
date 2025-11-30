import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import NavBar from "../UI/navbar/NavBar";

import { getTask } from "../../services/Handler/Tasks";

export default function AppLayout() {
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="min-h-screen w-full bg-linear-to-t from-[#4B74B9] to-[#0B1F44]">
      <NavBar />
      <Outlet />
    </div>
  );
}
