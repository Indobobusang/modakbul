import mainService from "../services/mainService";
import { catchAsync } from "../utils/errorHandler";
import { Request, Response } from "express";

const getMainPage = catchAsync(async (req: Request, res: Response) => {
  const mainPage = await mainService.getMainPage();
  return res.status(200).json({ mainPage: mainPage });
});

export default {
  getMainPage,
};
