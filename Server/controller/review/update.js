const mongoose = require("mongoose");
const Review = require("../../modules/review");
const { throwCustomError } = require("../../utils/error");

const updateV1 = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  transaction.startTransaction();
  try {
    const { userId } = req.user;
    const { movieId, reviewId } = req.params;
    const { content } = req.body;

    if (!userId && !movieId) {
      return throwCustomError(400, "Invalid Credential");
    }

    const review = await Review.findOne({ user_id: userId, movie_id: movieId, _id: reviewId }, { session: transaction });

    if (!review) {
      return throwCustomError(404, "Cannot find the review");
    }

    const updateReview = await Review.findOneAndUpdate({ _id: reviewId}, { content }, { session: transaction });

    if (!updateReview) {
      return throwCustomError(400, "Something went wrong! Cannot update the review");
    }

    transaction.commitTransaction();

    res.status(200).json({ message: "Review Updated Successfully!", data: updateReview});
  }
  catch (err) {
    transaction.abortTransaction();
    next(err);
  }
  finally {
    transaction.endSession();
  }
}

module.exports = updateV1;