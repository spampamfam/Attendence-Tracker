import "temporal-polyfill/global";

const dateHandler = (date) => {
  const zoned = Temporal.ZonedDateTime.from({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    timeZone: "Africa/Cairo",
  });

  // Convert to PostgreSQL-safe UTC ISO string
  return zoned.toInstant().toString();
  // Example: "2025-12-12T23:49:12Z"
};

export default dateHandler;
