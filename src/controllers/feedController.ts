import feedService from "../services/feedService";
import { catchAsync } from "../utils/errorHandler";
import { Request, Response } from "express";
import { deleteImage } from "../utils/imageUploader";

const postFeedByUserId = catchAsync(async (req: Request, res: Response) => {
  const images: any = req.files;
  if (images.length === 0) {
    const error = new Error("IMAGE UPLOAD FAILED");
    (error as any).statusCode = 400;
    throw error;
  }

  try {
    const userId = req.user;
    const { title, content, x, y } = JSON.parse(req.body.data);
    if (!title || !content) {
      const error = new Error("NO CONTENT!");
      (error as any).statusCode = 400;
      throw error;
    }

    await feedService.postFeedByUserId(userId, images, title, content, x, y);
    return res.status(200).json({ message: "FEED UPLOAD SUCCESS!" });
  } catch (error) {
    for (let i = 0; i < images.length; i++) deleteImage(images[i].key);
    throw error;
  }
});

const getFeedDetailById = catchAsync(async (req: Request, res: Response) => {
  const postId = Number(req.params.postId);
  const userId = req.user;

  const feedDetail = await feedService.getFeedDetailById(postId, userId);
  return res.status(200).json({ feedDetail: feedDetail });
});

const getFeedCommentById = catchAsync(async (req: Request, res: Response) => {
  const postId = Number(req.params.postId);

  const feedComment = await feedService.getFeedCommentById(postId);
  return res.status(200).json({ feedComment: feedComment });
});

export default {
  postFeedByUserId,
  getFeedDetailById,
  getFeedCommentById,
};
