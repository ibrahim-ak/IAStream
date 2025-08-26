const mongoose = require("mongoose");
const Review = require("../../modules/review");
const { throwCustomError } = require("../../utils/error");

const deleteV1 = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  transaction.startTransaction();
  try {
    const { userId } = req.user;
    const { movieId } = req.params;
    const { reviewId } = req.body;

    if (!userId && !movieId) {
      return throwCustomError(400, "Invalid Credential");
    }

    const review = await Review.findOne({ user_id: userId, movie_id: movieId, _id: reviewId});

    if (!review) {
      return throwCustomError(404, "Cannot find the review");
    }

    const deleteReview = await Review.findByIdAndDelete(reviewId);

    if (!deleteReview) {
      return throwCustomError(400, "Something went wrong! Cannot delete the review");
    }

    res.status(204).send();
  }
  catch (err) {
    transaction.abortTransaction();
    next(err);
  } finally {
    transaction.endSession();
  }
}

module.exports = deleteV1;