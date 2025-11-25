import CalendarData from "../../database/schema/calenderSchema.js";
import generateCalendar from "../../utils/generateCalendar.js";

async function putCalendarData(startYear, endYear) {
  try {
    const data = generateCalendar(startYear, endYear);

    await CalendarData.deleteMany({});

    await CalendarData.insertMany(data);

    console.log(
      `Calendar data inserted successfully for ${startYear}–${endYear}`
    );
  } catch (error) {
    console.error("Error inserting calendar data:", error);
  }
}

export default putCalendarData;
