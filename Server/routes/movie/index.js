const express = require("express");
const { checkSchema } = require("express-validator");

const postMovie = require("../../controller/movie/create");
const getMovies = require("../../controller/movie/get");
const getMovie = require("../../controller/movie/getbyid");
const deleteMovie = require("../../controller/movie/delete");
const updateMovie = require("../../controller/movie/update");
const createMovieSchema = require("../../validation/movie/index");

const router = express.Router({ mergeParams: true });

router.route("/user/:userId/movies/").get(getMovies).post(checkSchema(createMovieSchema), postMovie);

router.route("/user/:userId/movie/:id").get(getMovie).put(updateMovie).delete(deleteMovie);

module.exports = router;
