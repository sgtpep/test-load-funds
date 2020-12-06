import isMainModule from "./isMainModule";

it.each([
  [process.argv[1], true],
  [`${__dirname}/foo.ts`, false],
])("returns if %p module was invoked from the command line", (path, expected) =>
  expect(isMainModule({ url: `file://${path}` })).toEqual(expected)
);
