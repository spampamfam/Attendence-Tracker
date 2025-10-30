import User from "../../database/schema/userSchema.js";

const deleteUser = async (req, res) => {
  const id = req.body._id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser)
      return res.status(404).json({ message: "User Not Found" });

    res
      .status(200)
      .json({ message: `${deletedUser.name}: Deleted Successfuly` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

export default deleteUser;
