const User = require("../../modules/user/index.js");
const { throwCustomError } = require("../../utils/error");

const deleteUser = async (req, res, next) => {
  try {
    const { user_id } = req.body;

    if (!user_id) {
      return throwCustomError(400, "User Id need to delete an account");
    }

    const user = await User.findById(user_id);

    if (!user) {
      return throwCustomError(404, "Cannot find the User!");
    }

    const deleteUser = await User.findByIdAndDelete(user_id);

    if (!deleteUser) {
      return throwCustomError(400, "Something went cannot delete the user!");
    }

    res.status(204).send();
  }
  catch (err) {
    next(err);
  }
}

module.exports = deleteUser;