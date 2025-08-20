const mongoose = require('mongoose');
const logger = require('../utils/logger.js');

const connectDB = async (uri) => {
     const connectionState = mongoose.connection.readyState;

     if (connectionState === 0) {
          logger.debug("Database is disconnected");
     }
     else if (connectionState === 1) {
          logger.info("Database is already connected...");
          return;
     }
     else if (connectionState === 2) {
          logger.debug("Database is connecting...");
     }

     try {
          const conn = await mongoose.connect(uri);
          logger.info(`Established a connection to the database with ${conn.connection.host}`);
     }
     catch (err) {
          logger.error("Something went wrong when connecting to the database", err);
     }
}

module.exports = connectDB;