import bcrypt from "bcrypt";
import User from "../../database/schema/userSchema.js";

const editUser = async (req, res) => {
  const { _id, name, email, password } = req.body;

  try {
    const updateData = { name, email };

    // ✅ only hash password if provided
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(_id, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

export default editUser;
