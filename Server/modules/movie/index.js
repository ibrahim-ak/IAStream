const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter the Title"],
    },
    logo: {
      type: String,
      required: true,
    },
    big_image: {
      type: String,
      required: true,
    },
    small_image: {
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
    language: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    audio: {
      type: Array,
      required: true,
    },
    subtitle: {
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
