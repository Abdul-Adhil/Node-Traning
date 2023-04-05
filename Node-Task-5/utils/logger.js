const { createLogger, format, transports, error } = require("winston");

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "./utils/logger.log",
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
