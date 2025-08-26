const Movie = require("../../modules/movie/index.js");

// @desc    GET single movies
// @route   GET /api/movies/:id
const getMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleMovie = await Movie.findById(id);

    if (!singleMovie) {
      return res.status(404).json({ error: "Movie not Found" });
    }
    res.status(200).json(singleMovie);
    console.log("Getting Single Movie");
  } catch (err) {
    next(err);
  }
};

module.exports = getMovie;
