import API from "../../api/axiosClient";
import dateHandler from "../data/dateHandler";
import { taskDataService } from "../dispatch/taskDataService";

export const newTask = async (payload) => {
  const NEWTASK_END = import.meta.env.VITE_NEWTASK_END;
  const { startDate, endDate } = payload;
  const eventStart = dateHandler(startDate);
  const eventEnd = dateHandler(endDate);
  payload.startDate = eventStart;
  payload.endDate = eventEnd;
  try {
    const res = await API.post(NEWTASK_END, payload);
    console.log(res);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

export const getTask = async () => {
  const GETTASK_END = import.meta.env.VITE_GETTASK_END;
  try {
    const res = await API.get(GETTASK_END);
    console.log(res.data.tasks);
    taskDataService.fetchData(res.data);
  } catch (err) {
    console.log(err);
  }
};
