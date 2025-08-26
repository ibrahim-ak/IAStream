const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
{
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  movie_id: {
    type: mongoose.Types.ObjectId,
    ref: "Movie"
  },
  content: {
    type: String,
    required: true,
  }
},
{
  timestamp: true,
}
);

const Review = mongoose.model("review", ReviewSchema);

module.exports = Review;