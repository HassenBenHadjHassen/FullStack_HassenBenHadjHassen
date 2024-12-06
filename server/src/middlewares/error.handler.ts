import { Request, Response, NextFunction } from "express";
import { STATUS_CODES, ERROR_MESSAGE } from "../constants/status-code";

interface CustomError extends Error {
  status?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || STATUS_CODES.SERVER_ERROR).json({
    success: false,
    message: err.message || ERROR_MESSAGE.SERVER_ERROR,
  });
};
