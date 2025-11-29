import User from "../../database/schema/userSchema.js";
import bcrypt from "bcrypt";

export default async function CreateUser(req, res) {
  const { name, email, password } = req.body;
  try {
    let hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({
        message: "User created",
        userInfo: { name: name, email: email },
      });
  } catch (error) {
    res.status(400).json({ message: "Error", error: error });
  }
}
