function unixToDate(timeStamp, period) {
  const incrementHours = 1.5 * period; //this gotta change if expanded
  const unixTimestamp = Number(timeStamp);
  const startDate = new Date(unixTimestamp * 1000);
  const startPeriodDate = startDate.toISOString().split("T")[0];
  const startPeriodTime = startDate.toISOString().split("T")[1].slice(0, 8);

  console.log("Start:", startPeriodDate, startPeriodTime);

  let endDate = new Date(startDate.getTime());
  endDate.setTime(endDate.getTime() + incrementHours * 60 * 60 * 1000);

  const endPeriodDate = endDate.toISOString().split("T")[0];
  const endPeriodTime = endDate.toISOString().split("T")[1].slice(0, 8);

  console.log("End:", endPeriodDate, endPeriodTime);
  const date = {
    startPeriodDate,
    startPeriodTime,
    endPeriodDate,
    endPeriodTime,
  };
  return date;
}

export default unixToDate;
