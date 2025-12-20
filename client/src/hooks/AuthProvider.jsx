import supabase from "../api/supabaseClient";
import { useEffect } from "react";
import { authService } from "../services/dispatch/authService";
import { useDispatch } from "react-redux";

function AuthProvider({ children }) {
  const dispatch = useDispatch();

  // Helper to extract only serializable user data
  const getSerializableUser = (supabaseUser) => {
    if (!supabaseUser) return null;
    return {
      id: supabaseUser.id,
      email: supabaseUser.email,
    };
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const serializableUser = getSerializableUser(session.user);
        authService.loginUser(dispatch, serializableUser);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          const serializableUser = getSerializableUser(session.user);
          authService.loginUser(dispatch, serializableUser);
        } else {
          authService.logoutUser(dispatch);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [dispatch]);

  return children;
}

export default AuthProvider;
