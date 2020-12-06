import getStartOfWeek from "./getStartOfWeek";

it.each([
  ["2000-01-03T00:00:00Z", "2000-01-03T00:00:00Z"],
  ["2000-01-03T01:00:00Z", "2000-01-03T00:00:00Z"],
  ["2000-01-04T00:00:00Z", "2000-01-03T00:00:00Z"],
  ["2000-01-09T23:59:59Z", "2000-01-03T00:00:00Z"],
  ["2000-01-10T00:00:00Z", "2000-01-10T00:00:00Z"],
])("returns the start of day for %p", (date, expected) =>
  expect(getStartOfWeek(new Date(date))).toEqual(new Date(expected))
);
