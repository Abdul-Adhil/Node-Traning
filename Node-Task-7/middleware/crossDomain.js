require("dotenv").config();
corsOpt = {
  origin: process.env.CORS_ALLOW_ORIGIN || "*", // this work well to configure origin url in the server
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"], // to works well with web app, OPTIONS is required
  allowedHeaders: ["Content-Type", "Authorization"], // allow json and token in the headers
};
module.exports = corsOpt;
