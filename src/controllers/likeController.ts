import likeService from "../services/likeService";
import { catchAsync } from "../utils/errorHandler";
import { Request, Response } from "express";

const postPostLike = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user;
  const postId = Number(req.params.postId);

  const postLike = await likeService.postPostLike(userId, postId);
  return res.status(200).json({ like: postLike });
});

export default { postPostLike };
