const { describe, it } = require("@jest/globals");
const { verifyToken } = require("../../../utils/jwt");
const jwt = require("jsonwebtoken");
const env = require("../../../configs/env");

jest.mock("jsonwebtoken");


describe("Verify Token Testing", () => {
  const token = "fake.jwt.token";
  const payload = {id: 1};

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return true if token is valid", () => {
    jwt.verify.mockReturnValue(payload);

    const result = verifyToken(token);
    expect(jwt.verify).toHaveBeenCalledWith(token, env.JWT_SECRET);
    expect(result).toBe(payload);
  });

  it("should return true if token is valid", () => {
    jwt.verify.mockImplementation(() => {
      return true
    });

    const result = verifyToken(token);
    expect(jwt.verify).toHaveBeenCalledWith(token, env.JWT_SECRET);
    expect(result).toBe(true);
  });

  if("should return false if token is invalid", () => {
    jwt.verify.mockImplementation(() => {
      return false;
    });

    const result = verifyToken(token);
    expect(jwt.verify).toHaveBeenCalledWith(token, env.JWT_SECRET);
    expect(result).toBe(false);
  });
})