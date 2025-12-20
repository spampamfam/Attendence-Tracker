//need to make the request get checked before even sending the request

import { useState } from "react";

import NormalInputContainer from "../../../components/UI/input/NormalInputContainer";
import AuthContainer from "../components/AuthContainer";

import { signupHandler } from "../userAPI";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    signupHandler(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <AuthContainer>
        <header className="flex flex-col items-center ">
          <svg
            width="75"
            height="31"
            viewBox="0 0 75 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 0L18.9545 10.0752L25.6983 13.7358V23.811L37.5 30.2256L49.3016 23.811V13.7358L52.6735 11.9055V23.5088H56.0454V10.0752L37.5 0ZM48.9982 10.0752L37.5 16.3218L26.0018 10.0752L37.5 3.82857L48.9982 10.0752ZM45.9297 21.8296L37.5 26.397L29.0702 21.8296V15.5662L37.5 20.1504L45.9297 15.5662V21.8296Z"
              fill="black"
            />
          </svg>
          <h2>Attendance Tracker</h2>
        </header>
        <form className="my-15">
          <h2 className="mb-2">Name</h2>
          <NormalInputContainer
            value={name}
            type={"text"}
            placeholder={"Enter your Name"}
            action={nameHandler}
          />

          <h2 className="mb-2">Email/StudentID</h2>
          <NormalInputContainer
            value={email}
            type={"text"}
            placeholder={"Enter your Email"}
            action={emailHandler}
          />

          <h2 className="mb-2">Password</h2>
          <NormalInputContainer
            value={password}
            type={"password"}
            placeholder={"Enter your Password"}
            action={passwordHandler}
          />
          <button
            type="submit"
            className="w-[calc(100%-100px)] block mx-auto rounded-xl text-center p-2 bg-normalbtn-default hover:bg-normalbtn-hover text-white text-shadow-black text-shadow-4xs transition-all shadow-2xs shadow-black mt-5"
            onClick={handleSubmission}
          >
            Signup
          </button>
          <footer>
            <p>
              You Already Have an Account !!<a href="/login"> Click Here</a>
            </p>
          </footer>
        </form>
      </AuthContainer>
    </>
  );
}
