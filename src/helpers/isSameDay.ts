import getStartOfDay from "./getStartOfDay";

const isSameDay = (a: Date, b: Date): boolean =>
  getStartOfDay(a).getTime() === getStartOfDay(b).getTime();

export default isSameDay;
