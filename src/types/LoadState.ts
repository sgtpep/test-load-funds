import Amount from "./Amount";
import LoadPayload from "./LoadPayload";

type LoadState = {
  dailyAmount: Amount;
  dayLoads: number;
  ids: Set<LoadPayload["id"]>;
  lastDate: Date;
  weeklyAmount: Amount;
};

export default LoadState;
