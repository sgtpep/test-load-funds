import fs from "fs";
import truncateFile from "./truncateFile";

it("does nothing if the file doesn't exist", () => {
  jest.spyOn(fs, "existsSync").mockImplementation(() => false);
  jest.spyOn(fs, "truncateSync").mockImplementation(() => undefined);
  truncateFile("foo");
  expect(fs.truncateSync).toHaveBeenCalledTimes(0);
});

it("truncates a file", () => {
  jest.spyOn(fs, "existsSync").mockImplementation(() => true);
  jest.spyOn(fs, "truncateSync").mockImplementation(() => undefined);
  truncateFile("foo");
  expect(fs.truncateSync).toHaveBeenCalledWith("foo");
});
