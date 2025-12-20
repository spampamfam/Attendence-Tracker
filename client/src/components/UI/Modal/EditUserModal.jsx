import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ModalContainer from "../container/ModalContainer";
import ModalOverlay from "../overlay/ModalOverlay";

import { editUserModalService } from "../../../services/dispatch/editUserModalService";
import { editUser } from "../../../features/auth/userAPI";

export default function EditUserModal() {
  const [name, setName] = useState(
    useSelector((state) => state.auth.user.name)
  );
  const [email, setEmail] = useState(
    useSelector((state) => state.auth.user.email)
  );
  const [studentId, setStudentId] = useState(
    useSelector((state) => state.auth.user.student_id)
  );
  const [age, setAge] = useState(useSelector((state) => state.auth.user.age));
  const [college, setCollege] = useState(
    useSelector((state) => state.auth.user.college)
  );
  const [major, setMajor] = useState(
    useSelector((state) => state.auth.user.major)
  );

  const handleSubmission = () => {
    const payload = {
      name,
      email,
      studentId,
      age,
      college,
      major,
    };
    editUser(payload);
  };

  return (
    <>
      <ModalOverlay
        action={() => {
          editUserModalService.setClose();
        }}
      >
        <ModalContainer>
          <header className="text-center">
            <h1>Edit User</h1>
          </header>
          <form>
            <h2 className="mt-1">Name</h2>
            <input
              type="text"
              value={name}
              placeholder="Edit your name"
              onChange={(e) => setName(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Email</h2>
            <input
              type="text"
              value={email}
              placeholder="Edit your email"
              onChange={(e) => setEmail(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Student ID</h2>
            <input
              type="text"
              value={studentId}
              placeholder="Enter your Student id"
              onChange={(e) => setStudentId(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">age</h2>
            <input
              type="text"
              value={age}
              placeholder="Enter your age"
              onChange={(e) => setAge(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">college</h2>
            <input
              type="text"
              value={college}
              placeholder="Enter your college"
              onChange={(e) => setCollege(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Major</h2>
            <input
              type="text"
              value={major}
              placeholder="Enter your Major"
              onChange={(e) => setMajor(e.target.value)}
              className="normalInput"
            />
          </form>

          <footer className="mt-8 flex justify-center">
            <button
              className="normalButton"
              onClick={() => {
                handleSubmission();
              }}
            >
              Save
            </button>
          </footer>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
}
