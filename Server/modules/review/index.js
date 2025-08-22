const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
{
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  body: {
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