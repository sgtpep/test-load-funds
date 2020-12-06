import Amount from "./types/Amount";
import LoadPayload from "./types/LoadPayload";
import getStartOfDayTimestamp from "./getStartOfDayTimestamp";
import getStartOfWeekTimestamp from "./getStartOfWeekTimestamp";

const parseAmount = (amount: string): Amount =>
  Number(amount.replace(/^\$/, ""));

const parseLoadPayload = (payload: string): LoadPayload => {
  const {
    customer_id: customerId,
    id,
    load_amount: loadAmount,
    time: isoTime,
  } = JSON.parse(payload);
  const time = new Date(isoTime);
  return {
    customerId,
    id,
    loadAmount: parseAmount(loadAmount),
    startOfDayTimestamp: getStartOfDayTimestamp(time),
    startOfWeekTimestamp: getStartOfWeekTimestamp(time),
    time,
  };
};

export default parseLoadPayload;
