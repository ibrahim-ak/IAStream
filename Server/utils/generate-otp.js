const generateOTP = () => {
  let otp = "";
  while (otp.length < 6) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp.slice(0, 6);
};

module.exports = generateOTP;
