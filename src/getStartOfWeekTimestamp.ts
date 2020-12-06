import Timestamp from "./types/Timestamp";

const weekStartsOn = 1;

const getStartOfWeekTimestamp = (date: Date): Timestamp => {
  const startOfWeekDate = new Date(date);
  const day = startOfWeekDate.getUTCDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  startOfWeekDate.setUTCDate(startOfWeekDate.getUTCDate() - diff);
  startOfWeekDate.setUTCHours(0, 0, 0, 0);
  return startOfWeekDate.getTime();
};

export default getStartOfWeekTimestamp;
