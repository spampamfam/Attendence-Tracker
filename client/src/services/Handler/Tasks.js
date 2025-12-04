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
    taskDataService.fetchData(res.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

export const getTask = async () => {
  const GETTASK_END = import.meta.env.VITE_GETTASK_END;
  try {
    const res = await API.get(GETTASK_END);
    taskDataService.fetchData(res.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

export const deleteTask = async (id) => {
  const DELETETASK_END = import.meta.env.VITE_DELETETASK_END;
  try {
    const res = await API.delete(DELETETASK_END, {
      data: { id },
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

export const editTask = async (payload, data) => {
  const EDITTASK_END = import.meta.env.VITE_EDITTASK_END;

  try {
    const res = await API.put(EDITTASK_END, payload);

    taskDataService.fetchData(res.data);
  } catch (err) {
    console.error("Failed to edit task:", err.response?.data || err.message);
  }
};
