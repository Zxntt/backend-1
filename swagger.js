const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API By Phathaipak ",
      version: "1.0.0",
      description: "ระบบจัดการผู้ใช้และการยืนยันตัวตน ด้วย JWT (ภาษาไทย)",
    },
    servers: [
      {
        url: "/",
        description: "Current Server",
      },
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],

    tags: [
      { name: "Auth", description: "เข้าสู่ระบบและสมัครสมาชิก" },
      { name: "Users", description: "CRUD ผู้ใช้" },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [path.join(__dirname, "./routes/*.js")],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
