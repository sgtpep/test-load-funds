import { appendFileSync } from "fs";

const outputLine = (
  value: Parameters<typeof JSON.stringify>[0],
  path?: string
): void => {
  const line = JSON.stringify(value);
  if (path) {
    appendFileSync(path, `${line}\n`);
  } else {
    console.log(line);
  }
};

export default outputLine;
