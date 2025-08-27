const { throwCustomError } = require("../utils/error");
const { verifyToken } = require("../utils/jwt");
const { logger } = require("../utils/logger");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return throwCustomError(401, "Unauthorized");      
    }

    const [, tokenString] = token.split("Bearer ");

    if (!tokenString) {
      return throwCustomError(401, "Unauthorized");
    }

    const decoded = verifyToken(tokenString);

    if (!decoded) {
      return throwCustomError(401, "Unauthorized");
    }

    req.user = decoded;

    next();
  }
  catch (err) {
    logger.error(err);
    res.status(401).json({ message: "Unauthorized" });
  }
}

export { authenticate };