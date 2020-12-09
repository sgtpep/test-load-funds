import LoadPayload from "./types/LoadPayload";

interface LoadResult extends Pick<LoadPayload, "id"> {
  accepted: boolean;
  customer_id: LoadPayload["customerId"];
}

const buildLoadResult = (
  { customerId, id }: LoadPayload,
  isAccepted: boolean
): LoadResult => ({
  id,
  customer_id: customerId,
  accepted: isAccepted,
});

export default buildLoadResult;
