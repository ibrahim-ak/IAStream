const express = require("express");
const MovieRouter = require("../routes/movie");

const router = express.Router({ mergeParams: true });

router.use("/movies", MovieRouter);

module.exports = router;