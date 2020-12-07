import getLoadState from "./getLoadState";
import loadState from "./mocks/loadState";
import loadStates from "./loadStates";

it("returns the initial load state if no previous load state was found", () => {
  jest.spyOn(loadStates, "get").mockImplementation(() => undefined);
  expect(getLoadState("customer", new Date())).toEqual({
    dailyAmount: 0,
    dailyLoads: 0,
    ids: new Set(),
    lastDate: new Date("1970-01-01T00:00:00Z"),
    weeklyAmount: 0,
  });
});

it("returns the load state if the date is from the same day and week", () => {
  jest.spyOn(loadStates, "get").mockImplementation(() => ({
    ...loadState,
    dailyAmount: 1_000,
    dailyLoads: 1,
    ids: new Set(["load"]),
    weeklyAmount: 1_000,
  }));
  expect(getLoadState("customer", new Date("2000-01-01T01:00:00Z"))).toEqual({
    dailyAmount: 1_000,
    dailyLoads: 1,
    ids: new Set(["load"]),
    lastDate: new Date("2000-01-01T00:00:00Z"),
    weeklyAmount: 1_000,
  });
});

it("returns the load state with cleared daily limits if the date is not from the same day", () => {
  jest.spyOn(loadStates, "get").mockImplementation(() => ({
    ...loadState,
    dailyAmount: 1_000,
    dailyLoads: 1,
    weeklyAmount: 1_000,
  }));
  expect(getLoadState("customer", new Date("2000-01-02T00:00:00Z"))).toEqual(
    expect.objectContaining({
      dailyAmount: 0,
      dailyLoads: 0,
      weeklyAmount: 1_000,
    })
  );
});

it("returns the load state with cleared daily and weekly limits if the date is not from the same week", () => {
  jest.spyOn(loadStates, "get").mockImplementation(() => ({
    ...loadState,
    dailyAmount: 1_000,
    dailyLoads: 1,
    weeklyAmount: 1_000,
  }));
  expect(getLoadState("customer", new Date("2000-01-07T00:00:00Z"))).toEqual(
    expect.objectContaining({
      dailyAmount: 0,
      dailyLoads: 0,
      weeklyAmount: 0,
    })
  );
});
