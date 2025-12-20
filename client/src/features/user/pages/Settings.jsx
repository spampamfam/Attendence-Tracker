import { useState } from "react";
import { useSelector } from "react-redux";

import Button from "../../../components/UI/buttons/button";
import HeroContainer from "../../../components/UI/container/HeroContainer";
import SquareContainer from "../../../components/UI/container/SquareContainer";

export default function Courses() {
  const userData = useSelector((state) => state.auth.user);
  const [fontSize, setFontSize] = useState("16");

  return (
    <HeroContainer>
      <h1 className="outfit text-4xl bold text-shadow-2xs">Settings</h1>
      <section className="p-4">
        <h2 className="outfit text-4xl bold text-shadow-2xs mb-2">Account</h2>
        <h3>Name</h3>
        <div className="bg-input-container w-[200px] text-center rounded-xl border-black border-2 p-2">
          <p>{userData.name}</p>
        </div>
        <h3>Email</h3>
        <div className="bg-input-container w-[200px] text-center rounded-xl border-black border-2 p-2">
          <p>{userData.email}</p>
        </div>
        <h3>Student ID</h3>
        <div className="bg-input-container w-[200px] text-center rounded-xl border-black border-2 p-2">
          <p>{userData.student_id}</p>
        </div>
        <footer className="mt-2 flex gap-2">
          <Button>Change Password</Button>
          <Button>Edit Info</Button>
        </footer>
      </section>
    </HeroContainer>
  );
}
