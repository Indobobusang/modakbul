import feedDao from "../models/feedDao";

const postFeedByUserId = async (
  userId: number,
  images: any,
  title: string,
  content: string,
  x: number,
  y: number
) => {
  return await feedDao.postFeedByUserId(userId, images, title, content, x, y);
};

const getFeedDetailById = async (postId: number) => {
  const feed = await feedDao.getFeedById(postId);
  const comment = await feedDao.getFeedCommentById(postId);
  return { feed: feed, comment: comment };
};

export default {
  postFeedByUserId,
  getFeedDetailById,
};
