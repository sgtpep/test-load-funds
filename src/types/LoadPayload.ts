import Amount from "./Amount";
import CustomerId from "./CustomerId";
import Nominal from "./Nominal";
import Timestamp from "./Timestamp";

interface LoadPayload {
  customerId: CustomerId;
  id: Nominal<string, "LoadPayloadId">;
  loadAmount: Amount;
  startOfDayTimestamp: Timestamp;
  startOfWeekTimestamp: Timestamp;
  time: Date;
}

export default LoadPayload;
