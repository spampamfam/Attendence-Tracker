import User from "../../database/schema/userSchema.js";
import jwt from "jsonwebtoken";

async function getTask(req, res) {
  try {
    const id = res.locals.userID;
    const targetUser = await User.findOne({ id });
    const tasks = targetUser.tasks;
    res.status(200).json({ tasks });
  } catch (error) {
    res.send(error.message);
  }
}

export default getTask;
