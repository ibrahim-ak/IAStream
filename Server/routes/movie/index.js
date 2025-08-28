const express = require("express");

const postMovie = require("../../controller/movie/create");
const getMovies = require("../../controller/movie/get");
const getMovie = require("../../controller/movie/getbyid");
const deleteMovie = require("../../controller/movie/delete");
const updateMovie = require("../../controller/movie/update");

const router = express.Router({ mergeParams: true });

router.route("/:userId/movies/").get(getMovies).post(postMovie);

router.route("/:userId/movie/:id").get(getMovie).put(updateMovie).delete(deleteMovie);

module.exports = router;
