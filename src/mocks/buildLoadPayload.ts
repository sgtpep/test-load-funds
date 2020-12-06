import LoadPayload from "../types/LoadPayload";
import startOfDayTimestamp from "../getStartOfDayTimestamp";
import startOfWeekTimestamp from "../getStartOfWeekTimestamp";

const buildLoadPayload = (date = "2000-01-01T00:00:00Z"): LoadPayload => {
  const time = new Date(date);
  return {
    customerId: "customer1",
    id: "load1",
    loadAmount: 1_000,
    startOfDayTimestamp: startOfDayTimestamp(time),
    startOfWeekTimestamp: startOfWeekTimestamp(time),
    time,
  };
};

export default buildLoadPayload;
