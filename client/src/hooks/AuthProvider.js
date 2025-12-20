import supabase from "../api/supabaseClient";
import { authService } from "../services/dispatch/authService";

export async function AuthProvider() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    authService.logoutUser();
    return;
  }

  const { data: userData, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (error) {
    console.error(error);
    authService.logoutUser();
    return;
  }

  authService.loginUser(userData);

  supabase.auth.onAuthStateChange((_event, session) => {
    if (!session?.user) {
      authService.logoutUser();
    }
  });
}
