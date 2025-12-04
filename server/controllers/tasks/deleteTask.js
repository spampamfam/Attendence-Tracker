import User from "../../database/schema/userSchema.js";

async function deleteTask(req, res) {
  const userId = res.locals.userId;
  const taskId = req.body.id;
  try {
    const targetUser = await User.findOne({ _id: userId });

    if (!targetUser) {
      return res.status(404).json({ message: "User not found" });
    }

    targetUser.tasks = targetUser.tasks.filter(
      (task) => task._id.toString() !== taskId
    );
    await targetUser.save();
    res
      .status(200)
      .json({ message: "Task deleted successfully", tasks: targetUser.tasks });
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

export default deleteTask;
