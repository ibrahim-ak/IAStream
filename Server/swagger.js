const swaggerJSDoc = require('swagger-jsdoc');
const env = require('./configs/env');

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "IAStream API",
      version: "1.0.0",
      description: "An Express API with Swagger Documentation"
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        }
      }
    },
    security: [{
      bearerAuth: [],
    }],
    servers: [
      {
        url: `http://localhost:${env.PORT}`,
        description: "Development Server"
      },
    ],
  },
  apis: ["./server.js", "./routes/**/*.js", "./controller/**/*.js"],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;