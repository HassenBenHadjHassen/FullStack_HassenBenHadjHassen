import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import { errorHandler } from "./middlewares/error.handler";
import { rateLimiter } from "./middlewares/RateLimiter";
import router from "./routes";
import { ERROR_MESSAGE, STATUS_CODES } from "./constants/status-code";

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

app.use("/api", router);

// 404 Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error(ERROR_MESSAGE.NOT_FOUND);
  res.status(STATUS_CODES.NOT_FOUND);
  next(error);
});

app.use(errorHandler);

export default app;
