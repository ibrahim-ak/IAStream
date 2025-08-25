const mongoose = require("mongoose");

const OTPSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    otp: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
  }
)

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;