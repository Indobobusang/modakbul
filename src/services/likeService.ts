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

const postCommentLike = async (userId: number, commentId: number) => {
  const checkCommentLike = await likeDao.checkCommentLikeById(
    userId,
    commentId
  );
  let commentLike: boolean;

  if (checkCommentLike.length === 0)
    await likeDao.postCommentLike(userId, commentId);
  else await likeDao.deleteCommentLike(userId, commentId);

  const commentLikeCheck = await likeDao.checkCommentLikeById(
    userId,
    commentId
  );

  if (commentLikeCheck.length === 0) commentLike = false;
  else commentLike = true;

  return commentLike;
};

const postSubCommentLike = async (userId: number, subCommentId: number) => {
  const checkSubCommentLike = await likeDao.checkSubCommentLikeById(
    userId,
    subCommentId
  );
  let subCommentLike: boolean;

  if (checkSubCommentLike.length === 0)
    await likeDao.postSubCommentLike(userId, subCommentId);
  else await likeDao.deleteSubCommentLike(userId, subCommentId);

  const subCommentLikeCheck = await likeDao.checkSubCommentLikeById(
    userId,
    subCommentId
  );

  if (subCommentLikeCheck.length === 0) subCommentLike = false;
  else subCommentLike = true;

  return subCommentLike;
};

export default {
  postPostLike,
  postCommentLike,
  postSubCommentLike,
};
