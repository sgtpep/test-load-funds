import fs from "fs";
import readLines from "./readLines";
import readline from "readline";

it("throws on a non-existing file", () => {
  jest.spyOn(fs, "existsSync").mockImplementation(() => false);
  expect(() => readLines("foo")).toThrow("File foo doesn't exist.");
});

it("creates a readline interface", () => {
  jest
    .spyOn(fs, "createReadStream")
    .mockImplementation(() => expect.any(Object));
  jest.spyOn(fs, "existsSync").mockImplementation(() => true);
  jest
    .spyOn(readline, "createInterface")
    .mockImplementation(() => expect.any(Object));
  readLines("foo");
  expect(readline.createInterface).toHaveBeenCalledWith({
    crlfDelay: Infinity,
    input: expect.any(Object),
  });
});
