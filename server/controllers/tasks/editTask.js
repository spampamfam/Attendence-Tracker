import User from "../../database/schema/userSchema.js";

const editTask = async (req, res) => {
  const id = res.locals.userId;
  const taskData = req.body;
  console.log("got the request");
  try {
    const targetUser = await User.findOne({ _id: id });
    const targetTask = targetUser.tasks.find(
      (task) => taskData.id.toString() == task._id
    );

    console.log("Editing");
    targetTask.title = taskData.title ?? targetTask.title;
    targetTask.prof = taskData.prof ?? targetTask.prof;
    targetTask.start = taskData.start ?? targetTask.start;
    targetTask.end = taskData.end ?? targetTask.end;

    await targetUser.save();
    console.log("Saved");

    res.status(200).send({ tasks: targetUser.tasks });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export default editTask;
