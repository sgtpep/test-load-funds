import buildLoadOutput from "./buildLoadOutput";
import buildLoadPayload from "./mocks/buildLoadPayload";

it("build the load output", () =>
  expect(buildLoadOutput(buildLoadPayload(), true)).toEqual({
    accepted: true,
    customer_id: "customer1",
    id: "load1",
  }));
