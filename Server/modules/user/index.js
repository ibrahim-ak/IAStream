const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerify: {
      type: Boolean,
      required: true,
      default: false,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      required: true,
      default: "USER",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
