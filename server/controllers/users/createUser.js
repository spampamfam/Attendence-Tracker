import supabase from "../../database/supabaseClient.js";

export default async function CreateUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (authError) {
      return res
        .status(400)
        .json({ message: "Auth Error", error: authError.message });
    }

    const { data: userProfile, error: profileError } = await supabase
      .from("users")
      .insert({
        id: authData.user.id,
        name: name,
      });

    if (profileError) {
      return res
        .status(400)
        .json({ message: "DB Error", error: profileError.message });
    }

    return res.status(201).json({
      message: "User Created",
      user: {
        id: authData.user.id,
        name,
        email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
}
