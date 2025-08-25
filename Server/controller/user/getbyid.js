const User = require("../../modules/user/index.js");
const { throwCustomError } = require("../../utils/error.js");

const getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.body;

    if (!id) {
      return throwCustomError(404, "Cannot find the user id!");
    }

    const user = await User.findById(id);
    
    if (!user) {
      return throwCustomError(404, "Something went wrong! Cannot fetch the user!");
    }

    res.status(200).json({ message: "User fetched Successfully!", data: user});
  }
  catch (err) {
    next(err);
  }
}

module.exports = getSingleUser;