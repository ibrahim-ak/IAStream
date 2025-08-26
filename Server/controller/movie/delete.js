const Movie = require("../../modules/movie/index.js");

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findMovie = await Movie.findByIdAndDelete(id);

    if (!findMovie) {
      return res.status(404).json({ error: "Movie Not Found" });
    }
    res.status(200).json({ message: "Movie has Deleted Successfully" });
    console.log("Movie Deleted");
  } catch (err) {
    next(err);
  }
};

module.exports = deleteMovie;
