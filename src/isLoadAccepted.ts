import LoadState from "./types/LoadState";
import LoadPayload from "./types/LoadPayload";
import { maxDailyAmount, maxDayLoads, maxWeeklyAmount } from "./consts";

const isLoadAccepted = (
  { loadAmount }: LoadPayload,
  { dailyAmount, dayLoads, weeklyAmount }: LoadState
): boolean => {
  if (dailyAmount + loadAmount > maxDailyAmount) {
    return false;
  }
  if (weeklyAmount + loadAmount > maxWeeklyAmount) {
    return false;
  }
  if (dayLoads + 1 > maxDayLoads) {
    return false;
  }
  return true;
};

export default isLoadAccepted;
