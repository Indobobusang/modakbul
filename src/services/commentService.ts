import commentDao from "../models/commentDao";

const postPostCommentById = async (
  userId: number,
  postId: number,
  content: string
) => {
  return await commentDao.postPostCommentById(userId, postId, content);
};

const postSubCommentById = async (
  userId: number,
  commentId: number,
  content: string
) => {
  return await commentDao.postSubCommentById(userId, commentId, content);
};

export default {
  postPostCommentById,
  postSubCommentById,
};
