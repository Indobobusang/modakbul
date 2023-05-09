import { Request, Response } from "express";

export const catchAsync = (func: any) => {
  return (req: Request, res: Response, next: any) => {
    func(req, res, next).catch((err: any) => next(err));
  };
};

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: any
) => {
  console.error(err);
  res.status(err.statusCode || 500).json({ message: err.message || "ERROR" });
};
