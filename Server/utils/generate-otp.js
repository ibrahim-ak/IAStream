const generateOTP = () => {
  let otp = "";

  for (let i = 0; i < 6; i++) {
    otp += Math.round(Math.random() * 10);
  }
  return otp;
};

module.exports = generateOTP;
