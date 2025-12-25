//need to make the request get checked before even sending the request

import { useState } from "react";

import MainButton from "../../../components/UI/buttons/MainButton";
import SecondryButton from "../../../components/UI/buttons/SecondryButton";
import NormalInputContainer from "../../../components/UI/input/NormalInputContainer";
import AuthContainer from "../components/AuthContainer";
import SignupContainer from "../components/SignupContainer";

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
      <SignupContainer>
        <header className="flex flex-col items-center mb-14">
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
          <h1 className="text-primary-color text-3xl outfit font-bold mt-2">
            Signup
          </h1>
          <p className="text-text-black/60 text-xl outfit font-light">
            Register New Account
          </p>
        </header>
        <form className="mb-4 grid grid-rows-[80px_100px_50px_20px]">
          <NormalInputContainer
            value={name}
            type={"text"}
            action={nameHandler}
            label={"Name"}
            hint={"You can't leave the Name blank"}
          />

          <NormalInputContainer
            value={email}
            type={"email"}
            action={emailHandler}
            label={"Email"}
            hint={"Please enter a valid email"}
          />

          <NormalInputContainer
            value={password}
            type={"password"}
            action={passwordHandler}
            label={"Password"}
            regex={"(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}"}
          />
          <p className="text-text-black/80 text-[11px] text-start">
            Password must be more then 8 characters At least one number, one
            lowercase letter, one uppercase letter
          </p>
        </form>
        <MainButton onClick={handleSubmission}>Signup</MainButton>
        <footer className="mt-4">
          <SecondryButton>Already have an account</SecondryButton>
        </footer>
      </SignupContainer>
    </>
  );
}
