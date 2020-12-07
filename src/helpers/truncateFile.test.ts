import fs from "fs";
import truncateFile from "./truncateFile";

beforeEach(() =>
  jest.spyOn(fs, "truncateSync").mockImplementation(() => undefined)
);

it("does nothing if the file doesn't exist", () => {
  jest.spyOn(fs, "existsSync").mockImplementation(() => false);
  truncateFile("foo");
  expect(fs.truncateSync).toHaveBeenCalledTimes(0);
});

it("truncates a file", () => {
  jest.spyOn(fs, "existsSync").mockImplementation(() => true);
  truncateFile("foo");
  expect(fs.truncateSync).toHaveBeenCalledWith("foo");
});
