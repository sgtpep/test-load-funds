import CustomerId from "./types/CustomerId";
import LoadPayload from "./types/LoadPayload";
import LoadState from "./types/LoadState";
import isSameDay from "./helpers/isSameDay";
import isSameWeek from "./helpers/isSameWeek";
import loadStates from "./loadStates";

const getLoadState = (customerId: CustomerId, date: Date): LoadState => {
  const loadState = loadStates.get(customerId);
  if (!loadState) {
    return {
      dailyAmount: 0,
      dailyLoads: 0,
      ids: new Set<LoadPayload["id"]>(),
      lastDate: new Date(0),
      weeklyAmount: 0,
    };
  }
  const { lastDate } = loadState;
  return {
    ...loadState,
    ...(!isSameDay(date, lastDate) && {
      dailyAmount: 0,
      dailyLoads: 0,
    }),
    ...(!isSameWeek(date, lastDate) && {
      weeklyAmount: 0,
    }),
  };
};

export default getLoadState;
