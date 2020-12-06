import assert from "assert";
import { Interface, createInterface } from "readline";
import { createReadStream, existsSync } from "fs";

const readLines = (path: string): Interface => {
  assert(existsSync(path), `File ${path} doesn't exist.`);
  return createInterface({
    crlfDelay: Infinity,
    input: createReadStream(path),
  });
};

export default readLines;
