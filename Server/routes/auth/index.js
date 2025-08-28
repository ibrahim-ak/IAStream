const express = require("express");

const { register, verifyOTP } = require("../../controller/auth/signup.js");
const signin = require("../../controller/auth/login.js");
const {
  checkEmail,
  sendVerifyOTP,
  forgotPassword,
  resendOTP,
} = require("../../controller/auth/forgot.js");

const router = express.Router({ mergeParams: true });

router.route("/signin").post(signin);
router.route("/signup").post(register);
router.route("/verify-otp").post(verifyOTP);
router.route("/email-verify").post(checkEmail);
router.route("/forgot-otp").post(sendVerifyOTP);
router.route("/forgot-password").post(forgotPassword);
router.route("/resend-otp").post(resendOTP);

module.exports = router;
