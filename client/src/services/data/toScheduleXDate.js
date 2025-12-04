export const toScheduleXDate = (date, timeZone = "Africa/Cairo") => {
  // Convert JS Date to ISO string with timezone
  const iso = date.toISOString(); // e.g., "2025-12-04T03:43:19.000Z"

  // Extract date and time without 'Z'
  const [datePart, timePart] = iso.split("T");
  const time = timePart.slice(0, 8); // hh:mm:ss

  // Build string like: "2025-12-04T03:43:19+00:00[Africa/Cairo]"
  return `${datePart}T${time}+02:00[${timeZone}]`;
};
