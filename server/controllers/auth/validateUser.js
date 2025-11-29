import jwt from "jsonwebtoken";

import User from "../../database/schema/userSchema.js";

const validateUser = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) throw Error("No Token Provided");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { email, _id } = decoded;
    const user = await User.findOne({ _id: _id });
    const userEmail = user.email;
    const userName = user.name;
    const targetUser = { email: userEmail, name: userName };
    res.status(200).send({ userInfo: targetUser });
    return targetUser;
  } catch (error) {
    res.status(401).send({ message: "Not authenticated" });
  }
};

export default validateUser;
