import parseLoadPayload, { parseAmount } from "./parseLoadPayload";

it("parses the amount", () => expect(parseAmount("$1000")).toEqual(1_000));

it("parses the load payload string", () =>
  expect(
    parseLoadPayload(
      '{"id":"load","customer_id":"customer","load_amount":"$1000","time":"2000-01-01T00:00:00Z"}'
    )
  ).toEqual({
    customerId: "customer",
    date: new Date("2000-01-01T00:00:00Z"),
    id: "load",
    loadAmount: 1_000,
  }));
