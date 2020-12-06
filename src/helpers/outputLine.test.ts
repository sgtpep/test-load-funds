import fs from "fs";
import outputLine from "./outputLine";

it("logs a line of a stringified object to the console", () => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  outputLine({ foo: "bar" });
  expect(console.log).toHaveBeenCalledWith('{"foo":"bar"}');
});

it("appends a line of a stringified object to a file", () => {
  jest.spyOn(fs, "appendFileSync").mockImplementation(() => {});
  outputLine({ foo: "bar" }, "foo");
  expect(fs.appendFileSync).toHaveBeenCalledWith("foo", '{"foo":"bar"}\n');
});
