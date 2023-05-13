import jwt, { JwtPayload } from "jsonwebtoken";
import { catchAsync } from "../utils/errorHandler";
import { Request, Response, NextFunction } from "express";

const validateToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token || token === "undefined" || token === "null") {
      const error: Error & { statusCode?: number } = new Error(
        "TOKEN IS NOT EXIST!"
      );
      error.statusCode = 400;
      throw error;
    }
    const secretKey = process.env.SECRET_KEY as string;
    const decode = jwt.verify(token, secretKey) as JwtPayload;

    if (!decode) {
      const error = new Error("USERID IS NOT EXIST!");
      (error as any).statusCode = 400;
      throw error;
    }

    req.user = decode.userId as number;
    next();
  }
);

const getUserIdIfReqestHasToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (token && token !== "undefined" && token !== "null") {
      const secretKey: any = process.env.SECRET_KEY;
      const decode: any = jwt.verify(token, secretKey);
      req.user = decode.userId;
    }

    next();
  }
);

export { validateToken, getUserIdIfReqestHasToken };
