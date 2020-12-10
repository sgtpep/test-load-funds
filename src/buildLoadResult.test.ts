import buildLoadResult from "./buildLoadResult";
import loadPayload from "./mocks/loadPayload";

it("builds the load output", () =>
  expect(buildLoadResult(loadPayload, true)).toEqual({
    accepted: true,
    customer_id: "customer",
    id: "load",
  }));
