import isSameWeek from "./isSameWeek";

it.each([
  ["2000-01-03T00:00:00Z", "2000-01-03T00:00:00Z", true],
  ["2000-01-03T00:00:00Z", "2000-01-04T00:00:00Z", true],
  ["2000-01-03T00:00:00Z", "2000-01-10T00:00:00Z", false],
])("returns whether %p and %p are from the same week", (a, b, expected) =>
  expect(isSameWeek(new Date(a), new Date(b))).toEqual(expected)
);
