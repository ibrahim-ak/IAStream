const Movie = require("../../modules/movie/index.js");

// @desc    Update a movie
// @route   PUT /api/movies/:id
const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findMovie = await Movie.findByIdAndUpdate(id, req.body);

    if (!findMovie) {
      return res.status(404).json({ error: "Movie Not Found" });
    }
    res.status(200).json({ message: "Movie has Updated Successfully" });
    console.log("Movie Updated");
  } catch (err) {
    next(err);
  }
};

module.exports = updateMovie;
