const Movie = require('../../modules/movie/index.js');

// @desc    Create a movie
// @route   POST /api/movies/:id
const postMovie = async (req, res, next) => {
  try {
    const addMovie = await Movie.create(req.body);

    if (!addMovie) {
      return res.status(404).json({error: "Cannot Create A Movie Detail"});
    }

    res.status(201).json({message: "Movie Detail has Created Successfully"});
    console.log("Movie Added");
  }
  catch (err) {
    next(err);
  }
}

module.exports = postMovie;