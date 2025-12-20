import supabase from "../../database/supabaseClient.js";

async function logout(req, res) {
  try {
    const { access_token } = req.body;

    if (!access_token) {
      return res.status(400).json({ message: "Access token required" });
    }

    const { error } = await supabase.auth.admin.signOutUser(access_token);

    if (error) {
      return res
        .status(400)
        .json({ message: "Logout failed", error: error.message });
    }

    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
}

export default logout;
