import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../buttons/button";
import DangerButton from "../buttons/DangerButton";

import logo from "/icons/Logo.svg";
import dashboard from "/icons/dashboard.svg";
import courses from "/icons/courses.svg";
import calender from "/icons/calender.svg";
import settings from "/icons/settings.svg";
import logout from "/icons/logout.svg";
import session from "/icons/session.svg";

import { logoutHandler } from "../../../features/auth/userAPI";

export default function NavBar() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav
        className="sticky left-0 top-0 w-18 bg-linear-to-b from-[#0B1F44] to-[#123267] h-screen hover:w-50 transition-all duration-350 py-4 group flex flex-col gap-5 justify-between z-50"
        onMouseEnter={() => {
          setTimeout(() => {
            setIsHovered(true);
          }, 200);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsHovered(false);
          }, 150);
        }}
      >
        <header>
          <section className="mb-6">
            <img src={logo} className="mx-auto" />
            <p className="bold outfit text-2xl text-center text-white opacity-0 group-hover:opacity-100 hover-fade ">
              Attendance Tracker
            </p>
          </section>
          <section className="flex flex-col justify-between items-center gap-4">
            {isHovered ? (
              <Button action={() => navigate("/app/dashboard")}>
                Dashboard
              </Button>
            ) : (
              <img src={dashboard} className="mx-auto " />
            )}

            {isHovered ? (
              <Button action={() => navigate("/app/courses")}>Courses</Button>
            ) : (
              <img src={courses} className="mx-auto " />
            )}

            {isHovered ? (
              <Button action={() => navigate("/app/sessions")}>Sessions</Button>
            ) : (
              <img src={session} className="mx-auto " />
            )}

            {/* {isHovered ? (
              <Button action={() => navigate("/app/calendar")}>Calender</Button>
            ) : (
              <img src={calender} className="mx-auto " />
            )} */}
          </section>
        </header>
        <footer className="flex flex-col justify-between items-center gap-4">
          {isHovered ? (
            <Button action={() => navigate("/app/settings")}>Settings</Button>
          ) : (
            <img src={settings} className="mx-auto " />
          )}

          {isHovered ? (
            <DangerButton action={logoutHandler}>Logout</DangerButton>
          ) : (
            <img src={logout} className="mx-auto " />
          )}
        </footer>
      </nav>
    </>
  );
}
