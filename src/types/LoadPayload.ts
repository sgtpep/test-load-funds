import Amount from "./Amount";
import CustomerId from "./CustomerId";
import Nominal from "./Nominal";

interface LoadPayload {
  customerId: CustomerId;
  date: Date;
  id: Nominal<string, "LoadPayloadId">;
  loadAmount: Amount;
}

export default LoadPayload;
