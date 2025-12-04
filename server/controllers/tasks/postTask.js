import User from "../../database/schema/userSchema.js";
import dirtyToUnix from "../../utils/dirtyToUnix.js";

async function postTask(req, res) {
  const id = res.locals.userID;
  let taskData = req.body;

  if (!taskData) throw new Error("No task data provided");

  taskData.startDate = dirtyToUnix(taskData.startDate);
  taskData.endDate = dirtyToUnix(taskData.endDate);

  const newTask = {
    title: taskData.title,
    prof: taskData.name,
    start: taskData.startDate,
    end: taskData.endDate,
    attend: 0,
    abscent: 0,
    profAbscent: 0,
    total: 0,
  };

  try {
    let targetUser = await User.findOneAndUpdate(
      { id },
      { $push: { tasks: newTask } },
      { new: true }
    );
    console.log(targetUser);
    res.status(200).send(targetUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export default postTask;
