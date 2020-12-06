import buildLoadResult from "./buildLoadResult";
import getLoadState from "./getLoadState";
import isLoadAccepted from "./isLoadAccepted";
import isMainModule from "./isMainModule";
import outputLine from "./outputLine";
import parseLoadPayload from "./parseLoadPayload";
import readLines from "./readLines";
import setLoadState from "./setLoadState";
import truncateFile from "./truncateFile";

const loadFunds = async (
  inputPath: string,
  outputPath?: string
): Promise<void> => {
  if (outputPath) {
    truncateFile(outputPath);
  }
  for await (const line of readLines(inputPath)) {
    const loadPayload = parseLoadPayload(line);
    const { customerId, date, id, loadAmount } = loadPayload;
    const loadState = getLoadState(customerId, date);
    const { dailyAmount, dayLoads, ids, weeklyAmount } = loadState;
    if (ids.has(id)) {
      continue;
    }
    const isAccepted = isLoadAccepted(loadPayload, loadState);
    setLoadState(customerId, {
      ...loadState,
      ids: ids.add(id),
      ...(isAccepted && {
        dailyAmount: dailyAmount + loadAmount,
        dayLoads: dayLoads + 1,
        lastDate: date,
        weeklyAmount: weeklyAmount + loadAmount,
      }),
    });
    const loadResult = buildLoadResult(loadPayload, isAccepted);
    outputLine(loadResult, outputPath);
  }
};

export default loadFunds;

if (isMainModule(import.meta)) {
  await loadFunds(process.argv[2] ?? "input.txt", process.argv[3]);
}
