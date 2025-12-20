import { Temporal } from "@js-temporal/polyfill";
import { toScheduleXDate } from "./toScheduleXDate";

export function seedCalendarData(courses) {
  if (!courses || !Array.isArray(courses)) return [];

  const newData = courses.flatMap((course, courseIndex) =>
    (course.course_sessions || []).map((session, sessionIndex) => ({
      id: `${courseIndex}-${sessionIndex}`,
      title: course.course_name,

      end: toScheduleXDate(new Date(session.end_datetime), "Africa/Cairo"),
    }))
  );

  return newData;
}
