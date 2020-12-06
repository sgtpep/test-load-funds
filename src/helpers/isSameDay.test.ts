import isSameDay from "./isSameDay";

it.each([
  ["2000-01-01T00:00:00Z", "2000-01-01T00:00:00Z", true],
  ["2000-01-01T00:00:00Z", "2000-01-01T01:00:00Z", true],
  ["2000-01-01T00:00:00Z", "2000-01-02T00:00:00Z", false],
])("returns whether %p and %p are from the same day", (a, b, expected) =>
  expect(isSameDay(new Date(a), new Date(b))).toEqual(expected)
);
