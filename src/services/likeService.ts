import likeDao from "../models/likeDao";

const postPostLike = async (userId: number, postId: number) => {
  const checkPostLike = await likeDao.checkPostLikeById(userId, postId);
  let postLike: boolean;

  if (checkPostLike.length === 0) await likeDao.postPostLike(userId, postId);
  else await likeDao.deletePostLike(userId, postId);

  const postLikeCheck = await likeDao.checkPostLikeById(userId, postId);

  if (postLikeCheck.length === 0) postLike = false;
  else postLike = true;

  return postLike;
};

export default { postPostLike };
