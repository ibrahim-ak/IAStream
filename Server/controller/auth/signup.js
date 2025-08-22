const User = require("../../modules/user/index");
const { throwCustomError } = require("../../utils/error.js");
const { hashPassword } = require("../../utils/bcrypt.js");
const { createToken } = require("../../utils/jwt.js");

const register = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    const existUser = User.findOne({ phone, email });

    if (existUser) {
      return throwCustomError(400, "Email already registered! Please signin");
    }

    const hash = hashPassword(password);

    const user = User.create({ name, email, phone, password: hash });

    if (!user) {
      return throwCustomError(400, "Something went wrong! Cannot create user");
    }

    const data = createToken(user._id);

    res.status(201).json({ message: "SignUp Successfully!", data: data});

  }
  catch (err) {
    next(err);
  }
}

module.exports = register;