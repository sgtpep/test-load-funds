import LoadPayload from "../types/LoadPayload";
import LoadState from "../types/LoadState";

const loadState: LoadState = {
  dailyAmount: 0,
  dailyLoads: 0,
  ids: new Set<LoadPayload["id"]>(),
  lastDate: new Date(0),
  weeklyAmount: 0,
};

export default loadState;
