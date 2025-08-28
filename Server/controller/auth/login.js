const User = require("../../modules/user/index.js");
const { throwCustomError } = require("../../utils/error.js");
const { comparePassword } = require("../../utils/bcrypt.js");
const { createToken } = require("../../utils/jwt.js");
const mongoose = require("mongoose");

const signin = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  transaction.startTransaction();
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      return throwCustomError(400, "Please provide email and password");
    }

    const user = await User.findOne({ email }, null, { session: transaction });

    if (!user) {
      return throwCustomError(404, "Email not exists! Please create a new one");
    }

    const verify = comparePassword(password, user.password);

    if (!verify) {
      return throwCustomError(400, "Invalid password");
    }

    const token = createToken(user._id);
    
    await transaction.commitTransaction();
    res.status(200).json({ message: "Login Successfully!", data: token });
  } catch (err) {
    await transaction.abortTransaction();
    next(err);
  } finally {
    await transaction.endSession();
  }
};

module.exports = signin;
