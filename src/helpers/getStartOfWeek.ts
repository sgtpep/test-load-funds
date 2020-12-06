const weekStartsOn = 1;

const getStartOfWeek = (date: Date): Date => {
  const startOfWeekDate = new Date(date);
  const day = startOfWeekDate.getUTCDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  startOfWeekDate.setUTCDate(startOfWeekDate.getUTCDate() - diff);
  startOfWeekDate.setUTCHours(0, 0, 0, 0);
  return startOfWeekDate;
};

export default getStartOfWeek;
