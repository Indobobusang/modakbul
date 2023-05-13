import scrapService from "../services/scrapService";
import { catchAsync } from "../utils/errorHandler";
import { Request, Response } from "express";

const postPostScrap = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user;
  const postId = Number(req.params.postId);

  const postScrap = await scrapService.postPostScrap(userId, postId);
  return res.status(200).json({ scrap: postScrap });
});

export default { postPostScrap };
