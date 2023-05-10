import userService from "../services/userService";
import { catchAsync } from "../utils/errorHandler";
import { Request, Response } from "express";

const googleLogin = catchAsync(async (req: Request, res: Response) => {
  const googleToken = req.headers.authorization;

  if (!googleToken) {
    const error = new Error("GOOGLETOKEN IS NOT EXIST!");
    (error as any).statusCode = 400;
    throw error;
  }

  const accessToken = await userService.googleLogin(googleToken);
  return res.status(200).json({ accessToken: accessToken });
});

export default { googleLogin };
