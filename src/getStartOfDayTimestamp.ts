import Timestamp from "./types/Timestamp";

const getStartOfDayTimestamp = (date: Date): Timestamp => {
  const startOfDayDate = new Date(date);
  startOfDayDate.setUTCHours(0, 0, 0, 0);
  return startOfDayDate.getTime();
};

export default getStartOfDayTimestamp;
