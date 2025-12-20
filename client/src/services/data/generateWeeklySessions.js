const generateWeeklySessions = ({
  course_id,
  location,
  startDate,
  endDate,
  repeatWeeks,
}) => {
  const sessions = [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  for (let i = 0; i < repeatWeeks; i++) {
    sessions.push({
      course_id: course_id,
      location,
      start_datetime: new Date(
        start.getTime() + i * 7 * 24 * 60 * 60 * 1000
      ).toISOString(),
      end_datetime: new Date(
        end.getTime() + i * 7 * 24 * 60 * 60 * 1000
      ).toISOString(),
      status: "scheduled",
    });
  }

  return sessions;
};

export default generateWeeklySessions;
