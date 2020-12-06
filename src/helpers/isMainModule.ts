import { fileURLToPath } from "url";

const isMainModule = (meta: ImportMeta): boolean =>
  fileURLToPath(meta.url) === process.argv[1];

export default isMainModule;
