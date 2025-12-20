import store from "../../app/store";
import { login, logout } from "../../features/auth/authSlice";

export const authService = {
  loginUser: (dispatch, user) => {
    store.dispatch(login(user));
  },
  logoutUser: (dispatch) => {
    store.dispatch(logout());
  },
};
