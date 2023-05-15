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

export default {
  postFeedByUserId,
};
