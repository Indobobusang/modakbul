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
  return res.status(200).json({ access_token: accessToken });
});

const getMyPageInfo = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user;
  const myPageInfo = await userService.getMyPageInfo(userId);
  return res.status(200).json({ myPage: myPageInfo });
});

export default {
  googleLogin,
  getMyPageInfo,
};
