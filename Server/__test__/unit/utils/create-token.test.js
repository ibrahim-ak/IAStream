const { describe, it } = require("@jest/globals");
const { createToken } = require("../../../utils/jwt");
const userMocks = require("../../mocks/user");

describe("Create a JWT Token Generation", () => {
  const user = userMocks[0];
  const payload = { id: user._id, name: user.name, email: user.email, role: user.role };
  it("should generate a valid JWT token", () => {
    const token = createToken(payload);
    expect(token).toBeDefined();
  })
})