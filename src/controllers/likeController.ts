import likeService from "../services/likeService";
import { catchAsync } from "../utils/errorHandler";
import { Request, Response } from "express";

const postPostLike = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user;
  const postId = Number(req.params.postId);

  const postLike = await likeService.postPostLike(userId, postId);
  return res.status(200).json({ postlike: postLike });
});

const postCommentLike = catchAsync(async (req: Request, res: Response) => {
  const { userId, commentId } = req.body;

  const commentLike = await likeService.postCommentLike(userId, commentId);
  return res.status(200).json({ commentlike: commentLike });
});

const postSubCommentLike = catchAsync(async (req: Request, res: Response) => {
  const { userId, subCommentId } = req.body;

  const subCommentLike = await likeService.postSubCommentLike(
    userId,
    subCommentId
  );
  return res.status(200).json({ subCommentlike: subCommentLike });
});

export default {
  postPostLike,
  postCommentLike,
  postSubCommentLike,
};
