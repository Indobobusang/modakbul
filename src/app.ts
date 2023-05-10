import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes";
import { globalErrorHandler } from "./utils/errorHandler";

export const createApp = () => {
  const app = express();

  app.use(express.json({ limit: "50mb" }));
  app.use(cors());
  app.use(morgan("dev"));

  app.use(routes);
  app.use(globalErrorHandler);

  return app;
};
