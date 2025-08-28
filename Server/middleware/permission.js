const User = require("../modules/user");
const { throwCustomError } = require("../utils/error");

const permission = async (req, res, next) => {
  try {
    const { userId } = req.user;

    if (!userId) {
      return throwCustomError(404, "UserId is required");
    }

    const user = await User.findById(userId);

    if (!user) {
      return throwCustomError(404, "Cannot find the user!");
    }

    if (user.role !== "ADMIN") {
      return throwCustomError(403, "User is not an Administrator");
    }

    next();
  }
  catch (err) {
    res.status(403).json({ message: "User is not an Administrator"});
  }
}

module.exports = permission;