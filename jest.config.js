export default {
  collectCoverageFrom: ["src/**/*"],
  coveragePathIgnorePatterns: [
    // See: https://github.com/kulshekhar/ts-jest/issues/1174, https://github.com/kulshekhar/ts-jest/issues/906, https://github.com/facebook/jest/issues/9430
    "src/loadFunds.ts",
  ],
  coverageReporters: ["text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
