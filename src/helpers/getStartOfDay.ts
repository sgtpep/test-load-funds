const getStartOfDay = (date: Date): Date => {
  const startOfDayDate = new Date(date);
  startOfDayDate.setUTCHours(0, 0, 0, 0);
  return startOfDayDate;
};

export default getStartOfDay;
