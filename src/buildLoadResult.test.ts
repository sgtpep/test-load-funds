import buildLoadPayload from "./mocks/buildLoadPayload";
import buildLoadResult from "./buildLoadResult";

it("build the load output", () =>
  expect(buildLoadResult(buildLoadPayload(), true)).toEqual({
    accepted: true,
    customer_id: "customer1",
    id: "load1",
  }));
