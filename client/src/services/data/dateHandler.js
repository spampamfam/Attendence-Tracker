import "temporal-polyfill/global";

const dateHandler = (date) => {
  return Temporal.ZonedDateTime.from({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    timeZone: "Africa/Cairo",
  });
};

export default dateHandler;
