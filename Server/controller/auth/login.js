const User = require("../../modules/user/index.js");
const { throwCustomError } = require("../../utils/error.js");
const { comparePassword } = require("../../utils/bcrypt.js");
const { createToken } = require("../../utils/jwt.js");

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      return throwCustomError(400, "Please provide email and password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return throwCustomError(404, "Email not exists! Please create a new one");
    }

    const verify = comparePassword(password, user.password);

    if (!verify) {
      return throwCustomError(400, "Invalid password");
    }

    const data = createToken(user._id);

    res.status(200).json({ message: "Login Successfully!", data: data});
  }
  catch (err) {
    next(err);
  }
}

module.exports = signin;