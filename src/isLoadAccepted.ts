import LoadState from "./types/LoadState";
import LoadPayload from "./types/LoadPayload";
import { maxDailyAmount, maxDailyLoads, maxWeeklyAmount } from "./consts";

const isLoadAccepted = (
  { loadAmount }: LoadPayload,
  { dailyAmount, dailyLoads, weeklyAmount }: LoadState
): boolean => {
  if (loadAmount <= 0) {
    return false;
  }
  if (dailyAmount + loadAmount > maxDailyAmount) {
    return false;
  }
  if (weeklyAmount + loadAmount > maxWeeklyAmount) {
    return false;
  }
  if (dailyLoads + 1 > maxDailyLoads) {
    return false;
  }
  return true;
};

export default isLoadAccepted;
