import buildLoadResult from "./buildLoadResult";
import getLoadState from "./getLoadState";
import isLoadAccepted from "./isLoadAccepted";
import loadStates from "./loadStates";
import outputLine from "./helpers/outputLine";
import parseLoadPayload from "./parseLoadPayload";
import readLines from "./helpers/readLines";
import truncateFile from "./helpers/truncateFile";

const loadFunds = async (
  inputPath = "input.txt",
  outputPath?: string
): Promise<void> => {
  if (outputPath) {
    truncateFile(outputPath);
  }
  for await (const line of readLines(inputPath)) {
    const loadPayload = parseLoadPayload(line);
    const { customerId, date, id, loadAmount } = loadPayload;
    const loadState = getLoadState(customerId, date);
    const { dailyAmount, dailyLoads, ids, weeklyAmount } = loadState;
    if (ids.has(id)) {
      continue;
    }
    const isAccepted = isLoadAccepted(loadPayload, loadState);
    loadStates.set(customerId, {
      ...loadState,
      ids: new Set([...ids, id]),
      ...(isAccepted && {
        dailyAmount: dailyAmount + loadAmount,
        dailyLoads: dailyLoads + 1,
        lastDate: date,
        weeklyAmount: weeklyAmount + loadAmount,
      }),
    });
    const loadResult = buildLoadResult(loadPayload, isAccepted);
    outputLine(loadResult, outputPath);
  }
};

export default loadFunds;
