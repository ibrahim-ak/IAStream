const User = require("../../modules/user/index.js");
const OTP = require("../../modules/otp/index.js");
const { throwCustomError } = require("../../utils/error.js");
const { hashPassword } = require("../../utils/bcrypt.js");
const { createToken } = require("../../utils/jwt.js");
const generateOTP = require("../../utils/generate-otp.js");
const sendMail = require("../../services/stmp.js");

const register = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return throwCustomError(400, "Email already registered! Please signin");
    }

    const hash = hashPassword(password);

    const user = await User.create({ name, email, phone, password: hash });

    if (!user) {
      return throwCustomError(400, "Something went wrong! Cannot create user");
    }

    const token = createToken(user._id);
    
    const otp_string = generateOTP();
  
    const otp = await OTP.create({ user_id: user._id, otp: otp_string });

    if (!otp) {
      return throwCustomError(400, "Something went wrong! OTP is not created");
    }

    await sendMail(
      user.email, 
      "auth/signup", 
      "Verify Your Email", 
      {
        name: user.name,
        otp: otp_string, 
        email: user.email
      }
    );

    res.status(201).json({ message: "SignUp Successfully!", data: token});
  }
  catch (err) {
    next(err);
  }
}

module.exports = register;