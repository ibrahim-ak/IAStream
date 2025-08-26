const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter the Title"],
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    actors: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
