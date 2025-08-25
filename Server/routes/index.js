const express = require("express");

const MovieRouter = require("../routes/movie");
const authRouter = require("../routes/auth");

const router = express.Router({ mergeParams: true });

router.use("/auth", authRouter);
router.use("/movies", MovieRouter);


module.exports = router;