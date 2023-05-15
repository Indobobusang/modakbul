import feedDao from "../models/feedDao";

const postFeedByUserId = async (
  userId: number,
  images: any,
  content: string
) => {
  return await feedDao.postFeedByUserId(userId, images, content);
};

export default {
  postFeedByUserId,
};
