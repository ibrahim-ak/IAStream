const mongoose = require("mongoose");
const Review = require("../../modules/review/index.js");
const { throwCustomError } = require("../../utils/error.js");

const createV1 = async (req, res, next) => {
  const transaction = await mongoose.startSession();
  transaction.startTransaction();

  try {
    const { userId } = req.user;
    const { movieId } = req.params;
    const { content } = req.body;

    if (!userId && !movieId) {
      return throwCustomError(400, "Invalid credentail");
    }
    
    const review = await Review.create({ movie_id: movieId, user_id: userId, content: content }, { session: transaction });

    if (!review) {
      return throwCustomError(400, "Cannot create a Review!");
    }

    res.status(201).json({ message: "Review created Successfully!", data: review});
  }
  catch (err) {
    transaction.abortTransaction();
    next(err);
  } finally {
    transaction.endSession();
  }
}

module.exports = createV1;