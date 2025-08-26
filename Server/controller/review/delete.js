const mongoose = require("mongoose");
const Review = require("../../modules/review");
const { throwCustomError } = require("../../utils/error");

const deleteV1 = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  transaction.startTransaction();
  try {
    const { userId } = req.user;
    const { movieId, reviewId } = req.params;

    if (!userId && !movieId) {
      return throwCustomError(400, "Invalid Credential");
    }

    const review = await Review.findOne(
      { user_id: userId, movie_id: movieId, _id: reviewId },
      { session: transaction },
    );

    if (!review) {
      return throwCustomError(404, "Cannot find the review");
    }

    const deleteReview = await Review.findByIdAndDelete(reviewId, {
      session: transaction,
    });

    if (!deleteReview) {
      return throwCustomError(
        400,
        "Something went wrong! Cannot delete the review",
      );
    }

    transaction.commitTransaction();

    res.status(204).send();
  } catch (err) {
    transaction.abortTransaction();
    next(err);
  } finally {
    transaction.endSession();
  }
};

module.exports = deleteV1;
