const Movie = require("../../modules/movie/index.js");
const { throwCustomError } = require("../../utils/error.js");
const { matchedData, validationResult } = require("express-validator");

const postMovie = async (req, res, next) => {
  try {
    const data = matchedData(req);
    const validationError = validationResult(req);

    if (!validationError.isEmpty()) {
      return throwCustomError(400, validationError.array()[0].msg);
    }

    const addMovie = await Movie.create(data);

    if (!addMovie) {
      return throwCustomError(400, "Cannot Create a new Movie");
    }

    res.status(201).json({ message: "Movie Detail has Created Successfully" });
    console.log("Movie Added");
  } catch (err) {
    next(err);
  }
};

module.exports = postMovie;
