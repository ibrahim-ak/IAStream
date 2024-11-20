const express = require('express');
const { 
  getMovies,
  getMovie,
  postMovie,
  updateMovie,
  deleteMovie, } = require('../controller/movie.controller.js');

const router = express.Router();

router.get('/', getMovies);

router.get('/:id', getMovie);

router.post('/', postMovie);

router.put('/:id', updateMovie);

router.delete('/:id', deleteMovie);


module.exports = router;