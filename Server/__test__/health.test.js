const { describe, it } = require("@jest/globals");

function sum(a, b) {
  return a + b;
}

describe("health check", () => {
  it("should be get health of route", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
