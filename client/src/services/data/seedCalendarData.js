import { Temporal } from "@js-temporal/polyfill";
import { toScheduleXDate } from "./toScheduleXDate";

export function seedCalendarData(data) {
  const newData = data.tasks.map((task, index) => ({
    id: index,
    title: task.title,
    start: toScheduleXDate(new Date(task.start), "Africa/Cairo"),
    end: toScheduleXDate(new Date(task.end), "Africa/Cairo"),
  }));
  console.log(newData);
  return newData;
}
