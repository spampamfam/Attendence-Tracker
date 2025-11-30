import store from "../../app/store";
import { login, logout } from "../../features/auth/authSlice";

export const authService = {
  loginUser: (token) => {
    store.dispatch(login(token));
  },
  logoutUser: () => {
    store.dispatch(logout());
  },
};
