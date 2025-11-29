import User from "../../database/schema/userSchema.js";

import refreshToken from "./refreshToken.js";
import accessToken from "./accessToken.js";

import bcrypt from "bcrypt";

async function loginAuth(req, res) {
  const { email, password } = req.body;
  const keysToRemove = ["_id", "password", "__v"];

  try {
    const targetUser = await User.findOne({ email: email });
    if (!targetUser) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, targetUser.password);
    if (!isMatch)
      return res.status(401).json({ message: "invalid credentials" });

    accessToken(targetUser, res);
    refreshToken(targetUser, res);

    const userObj = targetUser.toObject();
    keysToRemove.forEach((key) => delete userObj[key]);

    console.log(`${new Date()}, ${email} : Logged in `);
    return res
      .status(200)
      .json({
        Message: "Login Succussfully",
        userInfo: {
          email: userObj.email,
          name: userObj.name,
          created_at: userObj.created_at,
        },
      });
  } catch (error) {
    res.status(500).json({ message: "Error Logging in", error });
  }
}

export default loginAuth;
