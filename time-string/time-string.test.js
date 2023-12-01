// time-string.test.js

const formatAsSecondsAsString = require("./formatAsSecondsAsString");

test("formats 1 second correctly", () => {
  expect(formatAsSecondsAsString(1)).toBe("1 second");
});

test("formats 50 seconds correctly", () => {
  expect(formatAsSecondsAsString(50)).toBe("50 seconds");
});
