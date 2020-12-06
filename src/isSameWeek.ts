import getStartOfWeek from "./getStartOfWeek";

const isSameWeek = (a: Date, b: Date): boolean =>
  getStartOfWeek(a).getTime() === getStartOfWeek(b).getTime();

export default isSameWeek;
