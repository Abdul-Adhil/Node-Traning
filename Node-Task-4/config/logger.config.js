const { createLogger, format, transports, error } = require("winston");
require("dotenv").config();
const logger = createLogger({
  level: process.env.LOG_LEVEL,
  transports: [
    new transports.Console(),
    new transports.File({
      level: "info",
      filename: "./logs/logger.log",
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf(
          (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`,
          (error) => `${error.level}: ${[error.timestamp]}: ${error.message}`
        )
      ),
    }),
  ],
});

module.exports = logger;
