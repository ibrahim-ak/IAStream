const express = require("express");
const { checkSchema } = require("express-validator");

const postMovie = require("../../controller/movie/create");
const getMovies = require("../../controller/movie/get");
const getMovie = require("../../controller/movie/getbyid");
const deleteMovie = require("../../controller/movie/delete");
const updateMovie = require("../../controller/movie/update");
const createMovieSchema = require("../../validation/movie/index");
const permission = require("../../middleware/permission");

const router = express.Router({ mergeParams: true });

router
  .route("/user/:userId/movies/")
  .get(getMovies)
  .post(permission, checkSchema(createMovieSchema), postMovie);

router
  .route("/user/:userId/movie/:id")
  .get(getMovie)
  .put(permission, updateMovie)
  .delete(permission, deleteMovie);

module.exports = router;
