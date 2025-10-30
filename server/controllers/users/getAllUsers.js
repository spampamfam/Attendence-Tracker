import mongoose from "mongoose";
import User from "../../database/schema/userSchema.js";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export default getAllUsers;
