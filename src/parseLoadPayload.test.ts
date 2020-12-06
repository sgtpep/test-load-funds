import parseLoadPayload, { parseAmount } from "./parseLoadPayload";

it("parses the amount", () => expect(parseAmount("$1000")).toEqual(1_000));

it("parses the load payload string", () =>
  expect(
    parseLoadPayload(
      '{"id":"load1","customer_id":"customer1","load_amount":"$1000","time":"2000-01-01T00:00:00Z"}'
    )
  ).toEqual({
    customerId: "customer1",
    date: new Date("2000-01-01T00:00:00Z"),
    id: "load1",
    loadAmount: 1_000,
  }));
