const express = require("express");

const MovieRouter = require("../routes/movie");
const authRouter = require("../routes/auth");
const userRouter = require("../routes/user");
const reviewRouter = require("../routes/review");
const permission = require("../middleware/permission");
const { authenticate } = require("../middleware/auth");

const router = express.Router({ mergeParams: true });

router.use("/auth", authRouter);
router.use("/movies", authenticate, MovieRouter);
router.use("/users", authenticate, permission, userRouter);
router.use("/review", authenticate, reviewRouter);

module.exports = router;
