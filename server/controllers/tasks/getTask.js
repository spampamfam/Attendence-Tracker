import User from "../../database/schema/userSchema.js";

async function getTask(req, res) {
  try {
    const { email } = req.body;
    const targetUser = await User.findOne({ email: email });
    res.status(200).json({ email: targetUser.email }, targetUser.tasks);
  } catch (error) {
    res.send(error.message);
  }
}

export default getTask;
