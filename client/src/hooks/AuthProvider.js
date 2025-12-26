import supabase from "../api/supabaseClient";
import { authService } from "../services/dispatch/authService";
import { loadingService } from "../services/dispatch/loadingService";

export async function AuthProvider() {
  try {
    loadingService.start();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      authService.logoutUser();
      loadingService.stop();
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
      loadingService.stop();
      return;
    }

    authService.loginUser(userData);

    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        authService.logoutUser();
      }
    });

    loadingService.stop();
  } catch (err) {
    loadingService.stop();
    console.error(err);
    throw err;
  }
}
