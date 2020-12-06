import isLoadAccepted from "./isLoadAccepted";
import loadPayload from "./mocks/loadPayload";
import loadState from "./mocks/loadState";
import { maxDailyAmount, maxDailyLoads, maxWeeklyAmount } from "./consts";

it("returns false if the load amount is negative", () =>
  expect(
    isLoadAccepted(
      {
        ...loadPayload,
        loadAmount: -1,
      },
      loadState
    )
  ).toBeFalsy());

it("returns false if the load amount is zero", () =>
  expect(
    isLoadAccepted(
      {
        ...loadPayload,
        loadAmount: 0,
      },
      loadState
    )
  ).toBeFalsy());

it("returns false if the load amount exceeds the maximum daily amount", () =>
  expect(
    isLoadAccepted(loadPayload, {
      ...loadState,
      dailyAmount: maxDailyAmount,
    })
  ).toBeFalsy());

it("returns false if the load amount exceeds the maximum weekly amount", () =>
  expect(
    isLoadAccepted(loadPayload, {
      ...loadState,
      weeklyAmount: maxWeeklyAmount,
    })
  ).toBeFalsy());

it("returns false if the load count exceeds the maximum daily loads", () =>
  expect(
    isLoadAccepted(loadPayload, {
      ...loadState,
      dailyLoads: maxDailyLoads,
    })
  ).toBeFalsy());

it("returns true if the load doesn't exceed any limit", () => {
  const { loadAmount } = loadPayload;
  expect(
    isLoadAccepted(loadPayload, {
      ...loadState,
      dailyAmount: maxDailyAmount - loadAmount,
      weeklyAmount: maxWeeklyAmount - loadAmount,
      dailyLoads: maxDailyLoads - 1,
    })
  ).toBeTruthy();
});
