const generateOTP = () => {
  let otp = "";

  for (let i = 0; i < 5; i++) {
    otp += Math.round(Math.random(1) * 10);
  }
  return otp;
}

module.exports = generateOTP;