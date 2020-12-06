import Amount from "./Amount";
import LoadPayload from "./LoadPayload";
import Timestamp from "./Timestamp";

type LoadState = {
  dailyAmount: Amount;
  dayLoads: number;
  ids: Set<LoadPayload["id"]>;
  lastStartOfDayTimestamp: Timestamp;
  lastStartOfWeekTimestamp: Timestamp;
  weeklyAmount: Amount;
};

export default LoadState;
