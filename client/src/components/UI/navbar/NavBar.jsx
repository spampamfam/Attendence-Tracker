import { useState } from "react";
import { AnimatePresence } from "motion/react";

import HoverBar from "./hoverbar/HoverBar";

import linesIcon from "/icons/lines.svg";
import SmallButton from "../buttons/smallButton";

export default function NavBar() {
  const [isHoverBarOpen, setIsHoverBarOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 w-full h-20
        bg-primary-color
         p-5 z-50 
          flex gap-5"
      >
        <SmallButton onClick={() => setIsHoverBarOpen(true)}>
          <img src={linesIcon} className="w-4 h-4" />
        </SmallButton>
        <h1 className="text-center text-3xl font-semibold sm:font-bold">
          Attendance Tracker
        </h1>
      </nav>
      <AnimatePresence initial={false}>
        {isHoverBarOpen && (
          <HoverBar
            setIsHoverBarOpen={setIsHoverBarOpen}
            isHoverBarOpen={isHoverBarOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
}
