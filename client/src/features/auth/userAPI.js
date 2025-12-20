import { redirect } from "react-router-dom";
import API from "../../api/axiosClient";

import { authService } from "../../services/dispatch/authService";

import toast from "react-hot-toast";
import supabase from "../../api/supabaseClient";
import { taskDataService } from "../../services/dispatch/taskDataService";

const LOGIN_END = import.meta.env.VITE_LOGIN_END;
const SIGNUP_END = import.meta.env.VITE_SIGNUP_END;
const LOGOUT_END = import.meta.env.VITE_LOGOUT_END;

export const loginHandler = async (email, password) => {
  if (!email || !password) throw new Error("Email and password are required"); // remove the error handler to the main component

  try {
    //
    const { data: loginData, error: loginError } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

    const payload = {
      id: loginData.user.id,
      email: loginData.user.email,
      role: loginData.user.email,
      created_at: loginData.user.created_at,
    };

    authService.loginUser(payload);

    // console.log(loginData); // toast message
    // console.log(loginData); // userdata
  } catch (loginError) {
    console.error(loginError);
  }
};

export const signupHandler = async (name, email, password) => {
  if (!name || !email || !password) throw new Error("All fields are required");

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Signup failed:", error.message);
      return;
    }

    if (!data.user) {
      console.error("Signup succeeded but no user returned");
      return;
    }

    const payload = {
      id: data.user.id,
      email: data.user.email,
      role: data.user.user_metadata?.role || "student",
      full_name: name,
      created_at: data.user.created_at,
    };

    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert({
        id: payload.id,
        name: name,
      });

    authService.loginUser(payload);

    console.log("Signup successful:", payload.email);
  } catch (err) {
    console.error("Unexpected error:", err.message || err);
  }
};

export const logoutHandler = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error.message);
      return;
    }

    authService.logoutUser();

    console.log("User logged out successfully");
  } catch (err) {
    console.error("Unexpected logout error:", err.message || err);
  }
};
