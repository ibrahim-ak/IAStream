const User = require("../../modules/user/index.js");
const { throwCustomError } = require("../../utils/error.js");

const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();

    if (!user) {
      return throwCustomError(404, "Cannot find the users");
    }

    res.status(200).json({ message: "User fetched Successfully", data: user });
  }
  catch (err) {
    next(err);
  }
}

module.exports = getAllUser;