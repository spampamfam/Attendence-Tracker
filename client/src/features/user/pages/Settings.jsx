import { useState } from "react";
import { useSelector } from "react-redux";

import MainButton from "../../../components/UI/buttons/app/MainButton";
import MainContainer from "../../../components/UI/container/MainContainer";
import SquareContainer from "../../../components/UI/container/SquareContainer";
import { editUserModalService } from "../../../services/dispatch/editUserModalService";

import EditUserModal from "../../../components/UI/Modal/EditUserModal";

export default function Settings() {
  const userData = useSelector((state) => state.auth.user);
  const isEditUserModalServiceOpen = useSelector(
    (state) => state.editUserModal.open
  );

  return (
    <MainContainer>
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

        <h3>Age</h3>
        <div className="bg-input-container w-[200px] text-center rounded-xl border-black border-2 p-2">
          <p>{userData.age}</p>
        </div>

        <h3>College</h3>
        <div className="bg-input-container w-[200px] text-center rounded-xl border-black border-2 p-2">
          <p>{userData.college}</p>
        </div>

        <h3>Major</h3>
        <div className="bg-input-container w-[200px] text-center rounded-xl border-black border-2 p-2">
          <p>{userData.major}</p>
        </div>
        <footer className="mt-2 flex gap-2">
          <MainButton>Change Password</MainButton>
          <MainButton
            className="btn"
            onClick={() => editUserModalService.setOpen()}
          >
            Edit Info
          </MainButton>
        </footer>
      </section>
      {isEditUserModalServiceOpen && <EditUserModal />}
    </MainContainer>
  );
}
