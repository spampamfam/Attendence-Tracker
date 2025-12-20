const isoToReadableDate = (ISO) => {
  const date = new Date(ISO);

  const formatted = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Cairo",
  }).format(date);

  return formatted;
  //   console.log(formatted.split(" "));
};

export default isoToReadableDate;
