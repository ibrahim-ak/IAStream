const { describe, it } = require("@jest/globals");
const { createToken } = require("../../../utils/jwt");
const userMocks = require("../../mocks/user");

describe("Create a JWT Token Generation", () => {
  const user = userMocks[0];
  const payload = { id: user._id, name: user.name, email: user.email, role: user.role };

  it("should generate a valid JWT token", () => {
    const token = createToken(payload);
    expect(token).toBeDefined();
  });

  it("should generate a valid token which is string type", () => {
    const token = createToken(payload);
    expect(typeof token).toBe("string");
  })

  // sign created at same secret that will return the same token
  it("should return token for each encrypted token", () => {
    const token1 = createToken(payload);
    const token2 = createToken(payload);

    expect(token1).toEqual(token2);
  })

  it("should create a token", () => {
    const token = createToken(payload);
    expect(token).not.toBe("secret");
  });
})