import User from "../../database/schema/userSchema.js";
import unixToDate from "../../utils/unixToDate.js";

async function postTask(req, res) {
  const { email, _id } = req.user;
  let taskData = req.body;

  console.log(taskData);
  //reqbody = {    
  //
  //}

  if (!taskData) throw new Error("No task data provided");

  const timeStamp = taskData.day;
  const period = taskData.period || 1;
  const response = unixToDate(timeStamp, period);
  //response will be something like this
  //  Startdate: 2025-10-10 date
  //  Starttime:10:30:00 time
  //  Enddate: 2025-10-10 date
  //  EndTime: 12:00:00 time

  taskData.day = response.startPeriodDate;
  taskData.startPeriod = response.startPeriodTime;
  taskData.endPeriod = response.endPeriodTime;

  const newTask = {
    title: taskData.title,
    prof: taskData.prof,
    day: taskData.day,
    period: period,
    startPeriod: taskData.startPeriod,
    endPeriod: taskData.endPeriod,
    // attend: taskData.attend,
    // abscent: taskData.abscent,
    // profAbscent: taskData.profAbscent,
    // total: taskData.total,
  };

  try {
    let targetUser = await User.findByIdAndUpdate(
      _id,
      { $push: { tasks: newTask } },
      { new: true }
    );
    res.status(200).send(targetUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export default postTask;
