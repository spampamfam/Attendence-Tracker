const toPostgresTimestamp = (calendarDate) => {
  // Remove the [Africa/Cairo] part
  const cleaned = calendarDate.split("[")[0];

  // Convert to ISO UTC
  return new Date(cleaned).toISOString();
};

export default toPostgresTimestamp;
