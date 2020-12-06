import { existsSync, truncateSync } from "fs";

const truncateFile = (path: string): void => {
  if (existsSync(path)) {
    truncateSync(path);
  }
};

export default truncateFile;
