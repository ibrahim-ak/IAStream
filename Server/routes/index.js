const express = require("express");

const MovieRouter = require("../routes/movie");
const authRouter = require("../routes/auth");
const userRouter = require("../routes/user");

const router = express.Router({ mergeParams: true });

router.use("/auth", authRouter);
router.use("/movies", MovieRouter);
router.use("/users", userRouter);

module.exports = router;
