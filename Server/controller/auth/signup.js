const User = require("../../modules/user/index.js");
const OTP = require("../../modules/otp/index.js");
const { throwCustomError } = require("../../utils/error.js");
const { hashPassword } = require("../../utils/bcrypt.js");
const { createToken } = require("../../utils/jwt.js");
const generateOTP = require("../../utils/generate-otp.js");
const sendMail = require("../../services/stmp.js");
const mongoose = require("mongoose");
const { matchedData } = require("express-validator");
const { validationResult } = require("express-validator");

const register = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  try {
    transaction.startTransaction();
    const data = matchedData(req);
    const validationError = validationResult(req);
    
    if (!validationError.isEmpty()) {
      return throwCustomError(400, validationError.array()[0].msg);
    }

    const existUser = await User.findOne(
      { email: data.email },
      null,
      { session: transaction },
    );

    if (existUser) {
      return throwCustomError(400, "Email already registered! Please signin");
    }

    const hash = hashPassword(data.password);

    const user = await User.create(
     [{ name: data.name, email: data.email, phone: data.phone, password: hash }],
      { session: transaction },
    );

    if (!user) {
      return throwCustomError(400, "Something went wrong! Cannot create user");
    }

    const otp_string = generateOTP();

    const otp = await OTP.create(
      [{
        user_id: user._id,
        email: data.email,
        phone: data.phone,
        otp: otp_string,
        expireAt: new Date(Date.now() + 1000 * 60 * 10), // 10 minutes from now
      }],
      { session: transaction },
    );

    if (!otp) {
      return throwCustomError(400, "Something went wrong! OTP is not created");
    }

    await sendMail(data.email, "auth/signup", "Verify Your Email", {
      name: data.name,
      otp: otp_string,
      email: data.email,
    });
    
    await transaction.commitTransaction();

    res.status(201).json({
      message:
        "SignUp is successfully! Please check your email for verification",
    });
  } catch (err) {
    await transaction.abortTransaction();
    next(err);
  } finally {
    await transaction.endSession();
  }
};

const verifyOTP = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  try {
    transaction.startTransaction();

    const { email, otp } = req.body;

    if (!email) {
      return throwCustomError(400, "Email is required");
    }

    if (!otp) {
      return throwCustomError(400, "OTP is required");
    }

    const validOTP = await OTP.findOne({ otp }, null, { session: transaction });

    if (!validOTP) {
      return throwCustomError(400, "Invalid OTP");
    }

    if (validOTP.expireAt < new Date()) {
      return throwCustomError(400, "OTP expires");
    }

    const user = await User.findOne({ email }, null, { session: transaction });

    if (!user) {
      return throwCustomError(404, "Email record not found!");
    }

    if (user.isVerify) {
      return throwCustomError(400, "Email already verified");
    }

    user.isVerify = true;
    await user.save();

    const deleteOTP = await OTP.findOneAndDelete(
      { otp },
      { session: transaction },
    );

    if (!deleteOTP) {
      return throwCustomError(
        400,
        "Something went wrong! Cannot delete the otp",
      );
    }

    const token = createToken(user._id);
    
    await sendMail(user.email, "welcome", "Welcome to IAStream", {
      name: user.name,
      email: user.email,
    });
    
    await transaction.commitTransaction();
    res.status(200).json({ message: "Email Verified!", data: token });
  } catch (err) {
    await transaction.abortTransaction();
    next(err);
  } finally {
    await transaction.endSession();
  }
};

module.exports = { register, verifyOTP };
