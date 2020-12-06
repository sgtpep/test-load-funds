import getStartOfDay from "./getStartOfDay";

it.each([
  ["2000-01-01T00:00:00Z", "2000-01-01T00:00:00Z"],
  ["2000-01-01T01:00:00Z", "2000-01-01T00:00:00Z"],
  ["2000-01-01T23:59:59Z", "2000-01-01T00:00:00Z"],
  ["2000-01-02T00:00:00Z", "2000-01-02T00:00:00Z"],
])("returns the start of day for %p", (date, expected) =>
  expect(getStartOfDay(new Date(date))).toEqual(new Date(expected))
);
