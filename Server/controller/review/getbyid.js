const mongoose = require("mongoose");
const Review = require("../../modules/review");
const { throwCustomError } = require("../../utils/error");

const getByIdV1 = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  try {
    const { userId } = req.user;
    const { movieId, reviewId } = req.params;

    if (!userId && !movieId) {
      return throwCustomError(400, "Invalid Credential");
    }

    const review = await Review.findOne(
      { movie_id: movieId, user_id: userId, _id: reviewId },
      { session: transaction },
    );

    if (!review) {
      return throwCustomError(404, "Cannot find the review");
    }

    transaction.commitTransaction();

    res
      .status(200)
      .json({ message: "Review Fetched Successfully!", data: review });
  } catch (err) {
    transaction.abortTransaction();
    next(err);
  } finally {
    transaction.endSession();
  }
};

module.exports = getByIdV1;
