const { describe, it } = require("@jest/globals");
const { hashPassword, comparePassword } = require("../../../utils/bcrypt");

describe("compare the password function", () => {
  const password = "user123@";
  let compare;

  beforeAll(() => {
    compare = hashPassword(password);
  })

  it("should correctly compare a plain text password", () => {
    const isMatch = comparePassword(password, compare);
    expect(isMatch).toBe(true);
  })

  it("should return false for an incorrect password by passing plain text", () => {
    const incorrect = 'wrongpassword';
    const isMatch = comparePassword(password, incorrect);
    expect(isMatch).toBe(false);
  })
})