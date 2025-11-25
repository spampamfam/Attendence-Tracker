function generateCalendar(startYear, endYear) {
  const out = [];

  for (let year = startYear; year <= endYear; year++) {
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        // Create a date at midnight UTC (so it doesn’t shift to the previous day)
        const date = new Date(Date.UTC(year, month, day));

        out.push({
          date: date.toISOString().split("T")[0], // always accurate (YYYY-MM-DD)
          day: date.toLocaleDateString("en-US", {
            weekday: "long",
            timeZone: "UTC",
          }),
          dayOfWeek: date.getUTCDay(), // 0 = Sunday, 6 = Saturday
          dayNumber: day,
          month: date.toLocaleDateString("en-US", {
            month: "long",
            timeZone: "UTC",
          }),
          monthNumber: month + 1,
          year,
          week: Math.ceil(
            (day + new Date(Date.UTC(year, month, 1)).getUTCDay()) / 7
          ),
        });
      }
    }
  }

  return out;
}

export default generateCalendar;
