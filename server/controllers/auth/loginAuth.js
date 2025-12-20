import supabase from "../../database/supabaseClient.js";

async function loginAuth(req, res) {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({
      message: "Auth error",
      error: "Email and Password are required",
    });

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({
        message: "Login failed",
        error: error.message,
      });
    }
    console.log(`${data.user.email} Login , ${new Date()}`);
    return res.status(200).send({
      message: "Login succeed",
      user: {
        id: data.user.id,
        email: data.user.email,
      },
      //data.user everything you need is in data here change it if you want to send somethig different for the frontend
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}

export default loginAuth;
