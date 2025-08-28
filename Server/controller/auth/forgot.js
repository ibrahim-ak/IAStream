const User = require("../../modules/user/index");
const OTP = require("../../modules/otp/index");
const { throwCustomError } = require("../../utils/error");
const generateOTP = require("../../utils/generate-otp");
const mongoose = require("mongoose");
const sendMail = require("../../services/stmp");
const { hashPassword } = require("../../utils/bcrypt");

const checkEmail = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  try {
    transaction.startTransaction();
    const { email } = req.body;

    const user = await User.findOne({ email }, null, { session: transaction });

    if (!user) {
      return throwCustomError(404, "Cannot find the account");
    }

    if (!user.isVerify) {
      return throwCustomError(400, "Account is not verify!");
    }

    const otp_string = generateOTP();

    const otp = await OTP.create(
      [{
        user_id: user._id,
        email: user.email,
        phone: user.phone,
        expireAt: new Date(Date.now() + 1000 * 60 * 10),
        otp: otp_string,
      }],
      { session: transaction },
    );

    if (!otp) {
      return throwCustomError("OTP is not generating!");
    }

    await sendMail(user.email, "auth/forgot", "Forgot Password", {
      name: user.name,
      otp: otp_string,
      email: user.email,
    });
    
    await transaction.commitTransaction();
    
    res.status(200).json({ message: "OTP has sent into your email address" });
  } catch (err) {
    await transaction.abortTransaction();
    next(err);
  } finally {
    await transaction.endSession();
  }
};

const sendVerifyOTP = async (req, res, next) => {
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

    const verifyOTP = await OTP.findOne({ otp }, null, { session: transaction });

    if (!verifyOTP) {
      return throwCustomError(400, "Invalid OTP");
    }

    if (verifyOTP.expireAt < new Date()) {
      return throwCustomError(400, "OTP is expired!");
    }

    const user = await User.findOne({ email }, null, { session: transaction });

    if (!user) {
      return throwCustomError(404, "Email record is not found!");
    }

    const deleteOTP = await OTP.findOneAndDelete(
      { otp },
      { session: transaction },
    );

    if (!deleteOTP) {
      return throwCustomError(400, "Something went wrong cannot delete otp");
    }

    await transaction.commitTransaction();

    res.status(200).json({ message: "OTP is valid!" });
  } catch (err) {
    await transaction.abortTransaction();
    next(err);
  } finally {
    await transaction.endSession();
  }
};

const forgotPassword = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  try {
    transaction.startTransaction();
    const { password, confirmPassword, email } = req.body;

    if (!email) {
      return throwCustomError(400, "Email is required");
    }

    const user = await User.findOne({ email }, null, { session: transaction });

    if (!user) {
      return throwCustomError(
        404,
        "Something went wrong! Cannot find the account!",
      );
    }

    if (!password && !confirmPassword) {
      return throwCustomError(400, "Invalid password");
    }

    if (password !== confirmPassword) {
      return throwCustomError(
        400,
        "New Password and Confirm Password is not match",
      );
    }

    const hash = hashPassword(confirmPassword);

    user.password = hash;
    await user.save({session: transaction});

    await transaction.commitTransaction();

    res.status(200).json({ message: "Forgot Password Successfully!" });
  } catch (err) {
    await transaction.abortTransaction();
    next(err);
  } finally {
    await transaction.endSession();
  }
};

const resendOTP = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  try {
    transaction.startTransaction();
    const { email } = req.body;

    const user = await User.findOne({ email }, null, {session: transaction});

    if (!user) {
      return throwCustomError(
        404,
        "Something went wrong! Cannot send the mail to the user",
      );
    }

    const otp_string = generateOTP();

    const otp = await OTP.create([{
      user_id: user._id,
      email: user.email,
      phone: user.phone,
      otp: otp_string,
      expireAt: new Date(Date.now() + 1000 * 60 * 10),
    }], {session: transaction});

    if (!otp) {
      return throwCustomError(400, "Cannot send the otp!");
    }

    await sendMail(user.email, "auth/forgot", "Resend OTP", {
      name: user.name,
      otp: otp_string,
      email: user.email,
    });

    await transaction.commitTransaction();

    res.status(200).json({ message: "OTP has resend successfully" });
  } catch (err) {
    await transaction.abortTransaction();
    next(err);
  }
  finally {
    await transaction.endSession();
  }
};

module.exports = {
  checkEmail,
  sendVerifyOTP,
  forgotPassword,
  resendOTP,
};
