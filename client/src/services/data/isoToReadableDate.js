const isoToReadableDate = (ISO) => {
  const date = new Date(ISO);

  const formatted = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Cairo",
  }).format(date);

  // console.log(formatted.split(" "));
  return formatted;
};

// isoToReadableDate("2025-12-18T14:35:41.751+00:00");
export default isoToReadableDate;
