import { DateTime } from "luxon";

export const toScheduleXDate = (utcString) => {
  // const utcString = "2025-12-15T23:46:52.778+00:00";

  const cairoDateTime = DateTime.fromISO(utcString, { zone: "utc" })
    .setZone("Africa/Cairo")
    .set({ hour: 6, minute: 0, second: 0, millisecond: 0 });

  console.log(cairoDateTime.toISO());
  // 2025-12-16T06:00:00.000+02:00
};
