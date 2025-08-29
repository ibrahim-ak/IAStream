const { describe, it } = require("@jest/globals");
const { hashPassword } = require("../../../utils/bcrypt");

describe("Hashing Password to secure", () => {
  const password = "user123@";
  // It will return hash the password successfully
  it("should return the hash password successfully!", () => {
    const hash = hashPassword(password);
    expect(hash).toBeDefined();
    expect(typeof hash).toBe("string");
    expect(hash.length).toBeGreaterThan(0);
  })

  // It return all the password with the different hash
  it("should produce different to other", () => {
    const password1 = hashPassword(password);
    const password2 = hashPassword(password);

    expect(password1).not.toBe(password2);
  })
})