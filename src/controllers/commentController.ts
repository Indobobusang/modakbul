import commentService from "../services/commentService";
import { catchAsync } from "../utils/errorHandler";
import { Request, Response } from "express";

const postPostCommentById = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user;
  const { postId, content } = req.body;
  if (!userId || !postId || !content) {
    const error = new Error("KEY ERROR!");
    (error as any).statusCode = 400;
    throw error;
  }

  await commentService.postPostCommentById(userId, postId, content);
  return res.status(200).json({ message: "COMMENT UPLOAD SUCCESS!" });
});

const postSubCommentById = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user;
  const { commentId, content } = req.body;
  if (!userId || !commentId || !content) {
    const error = new Error("KEY ERROR!");
    (error as any).statusCode = 400;
    throw error;
  }

  await commentService.postSubCommentById(userId, commentId, content);
  return res.status(200).json({ message: "SUBCOMMENT UPLOAD SUCCESS!" });
});

const deletePostCommentById = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user;
    const { commentId } = req.body;

    await commentService.deletePostCommentById(userId, commentId);
    return res.status(200).json({ message: "COMMENT IS DELETED" });
  }
);

export default {
  postPostCommentById,
  postSubCommentById,
  deletePostCommentById,
};
