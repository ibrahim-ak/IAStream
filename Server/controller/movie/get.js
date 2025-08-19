const Movie = require('../../modules/movie/index.js');

// @desc    GET all movies
// @route   GET /api/movies/
const getMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();

    if (!allMovies)
    {
      return res.status(404).json({error: "Movies not Found"});
    }
    res.status(200).json(allMovies);
    console.log("Getting Movies");
  }
  catch (err) {
    console.log(err.message);
  }
}

module.exports = getMovies;