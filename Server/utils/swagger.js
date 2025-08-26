const swaggerJSDoc = require('swagger-jsdoc');
const env = require('../configs/env');

const swaggerOptions = {
  definition: {
    openai: "3.0.0",
    info: {
      title: "IAStream API",
      version: "1.0.0",
      description: "An Express API with Swagger Documentation"
    },
    servers: [
      {
        url: `http://localhost:${env.PORT}`,
        description: "Development Server"
      },
    ],
  },
  apis: ["../routes/*.js", "../controller/*.js", "../app.js"],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;