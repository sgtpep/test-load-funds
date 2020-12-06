import Amount from "./types/Amount";
import LoadPayload from "./types/LoadPayload";

export const parseAmount = (amount: string): Amount =>
  Number(amount.replace(/^\$/, ""));

const parseLoadPayload = (payload: string): LoadPayload => {
  const {
    customer_id: customerId,
    id,
    load_amount: loadAmount,
    time,
  } = JSON.parse(payload);
  return {
    customerId,
    date: new Date(time),
    id,
    loadAmount: parseAmount(loadAmount),
  };
};

export default parseLoadPayload;
