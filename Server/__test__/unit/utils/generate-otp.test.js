const { describe, it }  = require("@jest/globals");
const generateOTP = require("../../../utils/generate-otp");

describe("Generate OTP functionality", () => {
  // OTP need to return the 6-digit password
  it("should return a 6-digit password as a string", () => {
    expect(generateOTP()).toHaveLength(6);
  })

  // OTP return only the digit not an alphabet
  it("should return the expected expresssion password as a string", () => {
    expect(generateOTP()).toMatch(/^\d+$/);
  })

  // OTP return unique value in every return
  it("should return the OTP has to be unique to other otp", () => {
    const otp1 = generateOTP();
    const otp2 = generateOTP();

    expect(otp1).not.toBe(otp2);
  })
})