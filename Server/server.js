// Important modules import
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

// Directory modules import
const router = require("./routes/index.js");
const env = require("./configs/env.js");
const logger = require("./utils/logger.js");
const connectDB = require("./configs/db.js");
const pinoLogger = require("./middleware/logger.js");
const errorHandler = require("./middleware/error.js");
const swaggerSpec = require("./utils/swagger.js");

// Environment value
const port = env.PORT;
const username = env.DB_USERNAME;
const pw = env.DB_PASSWORD;
const DB = env.DB_NAME;
const allowed_origin = env.ALLOWED_ORIGIN;

// the uri is dynamic you need to change with yours
const uri = `mongodb+srv://${username}:${pw}@iastreamdb.yi3hnzj.mongodb.net/${DB}?retryWrites=true&w=majority&appName=IAStreamDB`;

// Database access
require("./configs/db.js");

// Server
const app = express();

// Middlewares
app.use(pinoLogger);
app.use(
  cors({
    origin: allowed_origin.split(","),
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTION"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use(errorHandler);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK"});
})

app.get("/health-check", (req, res) => {
  res.status(200).json({ message: "Good!"});
});


connectDB(uri);
// Server connection
app.listen(port, () => {
  logger.info(`Listening on port: ${port}`);
});
