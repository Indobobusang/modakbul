import express from "express";
import cors from "cors";
import morgan from "morgan";

const { globalErrorHandler } = require("./utils/errorHandler");

export const createApp = () => {
  const app = express();

  app.use(express.json({ limit: "50mb" }));
  app.use(cors());
  app.use(morgan("dev"));

  app.use(globalErrorHandler);

  return app;
};
