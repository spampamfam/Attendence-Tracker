import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";

import MainButton from "../../../components/UI/buttons/MainButton";
import SecondryButton from "../../../components/UI/buttons/SecondryButton";
import NormalInputContainer from "../../../components/UI/input/NormalInputContainer";
import AuthContainer from "../components/AuthContainer";

import { loginHandler } from "../userAPI";
import { useNavigate } from "react-router-dom";

import EyeOpen from "/icons/eyeopen.svg";
import EyeClose from "/icons/eyeclose.svg";
export default function Login() {
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [pressistSession, setPressistSession] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (email && password) {
      const res = await loginHandler(email, password, pressistSession);
      if (res == true) {
        navigate("/app");
        setEmail("");
        setPassword("");
        toast.success("Login Successfully");
      } else {
        toast.error("Email or Password are invalid");
      }
    } else {
      toast.error("Email and password are required");
    }
  };

  return (
    <>
      <AuthContainer>
        <header className="flex flex-col items-center mb-14">
          <svg
            width="100"
            height="40"
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
            Login
          </h1>
          <p className="text-text-black/60 text-xl outfit font-light">
            Sign in to your account
          </p>
        </header>
        <form
          className="mb-4 grid grid-rows-[95px_50px_25px]"
          onSubmit={handleSubmission}
        >
          <NormalInputContainer
            value={email}
            type={"email"}
            action={emailHandler}
            label={"Email"}
            shouldFocus={true}
            hint={"Enter a valid Email Address"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                console.log("Enter pressed");
              }
            }}
          />

          <NormalInputContainer
            value={password}
            type={isShown ? "text" : "password"}
            action={passwordHandler}
            label={"Password"}
          />
          {/* <img
            src={isShown ? EyeClose : EyeOpen}
            className="absolute translate-y-26 right-12 cursor-pointer w-6 h-6"
            onClick={() => {
              setIsShown(!isShown);
            }}
          /> */}

          {/* <label htmlFor="" className="inline-flex mt-6 mb-4">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-sm "
              checked={pressistSession}
              onChange={(e) => {
                setPressistSession(e.target.checked);
              }}
            />

            <p className="text-black ml-1 pb-1 text-sm">Remember me</p>
          </label> */}
        </form>
        <MainButton onClick={handleSubmission}>Login</MainButton>
        <footer>
          <p className="text-text-black/80 text-xs text-center my-4">
            I forgot my password.{" "}
            <a className="underline text-blue-700/50 cursor-pointer">
              Click here to reset
            </a>
          </p>
          <SecondryButton
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register New Account
          </SecondryButton>
        </footer>
      </AuthContainer>
    </>
  );
}
