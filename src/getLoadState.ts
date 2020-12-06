import CustomerId from "./types/CustomerId";
import LoadPayload from "./types/LoadPayload";
import LoadState from "./types/LoadState";
import loadStates from "./loadStates";

const getLoadState = (
  customerId: CustomerId,
  { startOfDayTimestamp, startOfWeekTimestamp }: LoadPayload
): LoadState => {
  const loadState = loadStates.get(customerId);
  if (!loadState) {
    return {
      dailyAmount: 0,
      dayLoads: 0,
      ids: new Set<LoadPayload["id"]>(),
      lastStartOfDayTimestamp: 0,
      lastStartOfWeekTimestamp: 0,
      weeklyAmount: 0,
    };
  }
  const { lastStartOfDayTimestamp, lastStartOfWeekTimestamp } = loadState;
  const isSameDay = startOfDayTimestamp === lastStartOfDayTimestamp;
  const isSameWeek = startOfWeekTimestamp === lastStartOfWeekTimestamp;
  return {
    ...loadState,
    ...(!isSameDay && {
      dailyAmount: 0,
      dayLoads: 0,
    }),
    ...(!isSameWeek && {
      weeklyAmount: 0,
    }),
  };
};

export default getLoadState;
