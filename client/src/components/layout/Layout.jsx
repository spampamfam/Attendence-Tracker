import { Outlet } from "react-router-dom";
import NavBar from "../UI/navbar/NavBar";
import HeroContainer from "../UI/container/HeroContainer";

export default function AppLayout() {
  return (
    <div className="min-h-screen w-full bg-linear-to-t from-[#4B74B9] to-[#0B1F44]">
      <Outlet />
    </div>
  );
}
