import { login, logout } from "../../features/auth/authSlice";

export const authService = {
  loginUser: (dispatch, user) => {
    dispatch(login(user));
  },
  logoutUser: (dispatch) => {
    dispatch(logout());
  },
};
