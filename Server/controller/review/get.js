const mongoose = require("mongoose");
const Review = require("../../modules/review");
const { throwCustomError } = require("../../utils/error");

const getV1 = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  transaction.startTransaction();
  try {
    const { userId } = req.user;
    const { movieId } = req.params;

    if (!userId && movieId) {
      return throwCustomError(400, "Invalid Crendential");
    }

    const reviews = await Review.findOne({ user_id: userId, movie_id: movieId });

    if (!reviews) {
      return throwCustomError(404, "Cannot find the review!");
    }

    res.status(200).json({ message: "Reviews Fetched Successfully!", data: reviews});

  }
  catch (err) {
    next(err);
  }
  finally {

  }
}