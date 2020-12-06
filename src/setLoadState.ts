import CustomerId from "./types/CustomerId";
import LoadState from "./types/LoadState";
import loadStates from "./loadStates";

const setLoadState = (customerId: CustomerId, loadState: LoadState): void => {
  loadStates.set(customerId, loadState);
};

export default setLoadState;
