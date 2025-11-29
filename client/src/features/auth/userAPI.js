import { redirect } from "react-router-dom";
import API from "../../api/axiosClient";

import { authService } from "../../services/dispatch/auth";

const LOGIN_END = import.meta.env.VITE_LOGIN_END;
const SIGNUP_END = import.meta.env.VITE_SIGNUP_END;
const LOGOUT_END = import.meta.env.VITE_LOGOUT_END;

export const loginHandler = async (email, password) => {
  if (!email || !password) throw new Error("Email and password are required");
  try {
    const payload = {
      email: email,
      password: password,
    };
    const res = await API.post(LOGIN_END, payload);
    authService.loginUser(res.data.userInfo);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

export const signupHandler = async (name, email, password) => {
  if (!name || !email || !password) throw new Error("All Fields are required");

  try {
    const res = await API.post(SIGNUP_END, { name, email, password });
    authService.loginUser(res.data.userInfo);
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};

export const logoutHandler = async () => {
  try {
    const res = API.post(LOGOUT_END);
    authService.logoutUser();
    console.log(res);
  } catch (error) {
    console.log(err.response?.data || err.message);
  }
};
