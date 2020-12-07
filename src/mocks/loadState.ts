import LoadPayload from "../types/LoadPayload";
import LoadState from "../types/LoadState";

const loadState: LoadState = {
  dailyAmount: 0,
  dailyLoads: 0,
  ids: new Set<LoadPayload["id"]>(),
  lastDate: new Date("2000-01-01T00:00:00Z"),
  weeklyAmount: 0,
};

export default loadState;
