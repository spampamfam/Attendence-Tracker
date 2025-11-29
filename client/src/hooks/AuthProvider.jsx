import API from "../api/axiosClient";
import { useEffect } from "react";
import { authService } from "../services/dispatch/auth";
import { useDispatch } from "react-redux";

function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const VALIDATE_END = import.meta.env.VITE_VALIDATE_END;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get(VALIDATE_END);
        authService.loginUser(res.data.userInfo);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
        // authService.logoutUser();
      }
    };

    fetchUser();
  }, [dispatch]);
  return children;
}

export default AuthProvider;
