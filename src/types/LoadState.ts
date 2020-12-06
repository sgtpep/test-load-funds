import Amount from "./Amount";
import LoadPayload from "./LoadPayload";

type LoadState = {
  dailyAmount: Amount;
  dailyLoads: number;
  ids: Set<LoadPayload["id"]>;
  lastDate: Date;
  weeklyAmount: Amount;
};

export default LoadState;
