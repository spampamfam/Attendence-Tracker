import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import logo from "/icons/logo.svg";
import HoverBarOverlay from "../../overlay/HoverBarOverlay";

import MainButton from "../../buttons/MainButton";
import DangerButton from "../../buttons/app/DangerButton";
import { logoutHandler } from "../../../../features/auth/userAPI";
const HoverBar = ({ setIsHoverBarOpen, isHoverBarOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      <HoverBarOverlay action={() => setIsHoverBarOpen(false)}>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="
        h-full w-[150px] sticky left-0 top-0 p-5
        flex flex-col justify-between
        bg-primary-color"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex flex-col gap-4">
            <img src={logo} className="mb-12" />
            <MainButton
              onClick={() => {
                setIsHoverBarOpen(false);
                navigate("/app/dashboard");
              }}
            >
              Dashboard
            </MainButton>
            <MainButton
              onClick={() => {
                setIsHoverBarOpen(false);
                navigate("/app/courses");
              }}
            >
              Courses
            </MainButton>
            <MainButton
              onClick={() => {
                setIsHoverBarOpen(false);
                navigate("/app/sessions");
              }}
            >
              Sessions
            </MainButton>
          </header>
          <footer className="flex flex-col gap-4">
            <MainButton
              onClick={() => {
                setIsHoverBarOpen(false);
                navigate("/app/settings");
              }}
            >
              Settings
            </MainButton>
            <DangerButton
              onClick={() => {
                setIsHoverBarOpen(false);
                navigate("/login");
                logoutHandler();
              }}
            >
              Logout
            </DangerButton>
          </footer>
        </motion.div>
      </HoverBarOverlay>
    </>
  );
};

export default HoverBar;
