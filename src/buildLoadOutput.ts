import LoadPayload from "./types/LoadPayload";

type LoadOutput = Pick<LoadPayload, "id"> & {
  accepted: boolean;
  customer_id: LoadPayload["customerId"];
};

const buildLoadOutput = (
  { customerId, id }: LoadPayload,
  isAccepted: boolean
): LoadOutput => ({
  id,
  customer_id: customerId,
  accepted: isAccepted,
});

export default buildLoadOutput;
