import { appDataSource } from "./appDataSource";

const checkPostLikeById = async (userId: number, postId: number) => {
  return await appDataSource.query(
    `SELECT
      *
    FROM post_likes AS pl
    WHERE pl.user_id = ? AND pl.post_id = ?`,
    [userId, postId]
  );
};

const postPostLike = async (userId: number, postId: number) => {
  return await appDataSource.query(
    `INSERT INTO
      post_likes (
        user_id,
        post_id
      ) VALUES (
        ?,
        ?
      )`,
    [userId, postId]
  );
};

const deletePostLike = async (userId: number, postId: number) => {
  return await appDataSource.query(
    `DELETE FROM post_likes
    WHERE user_id = ? AND post_id = ?`,
    [userId, postId]
  );
};

const checkCommentLikeById = async (userId: number, commentId: number) => {
  return await appDataSource.query(
    `SELECT
      *
    FROM comment_likes AS cl
    WHERE cl.user_id = ? AND cl.comment_id = ?`,
    [userId, commentId]
  );
};

const postCommentLike = async (userId: number, commentId: number) => {
  return await appDataSource.query(
    `INSERT INTO
      comment_likes (
        user_id,
        comment_id
      ) VALUES (
        ?,
        ?
      )`,
    [userId, commentId]
  );
};

const deleteCommentLike = async (userId: number, commentId: number) => {
  return await appDataSource.query(
    `DELETE FROM comment_likes
    WHERE user_id = ? AND comment_id = ?`,
    [userId, commentId]
  );
};

const checkSubCommentLikeById = async (
  userId: number,
  subCommentId: number
) => {
  return await appDataSource.query(
    `SELECT
      *
    FROM sub_comment_likes AS scl
    WHERE scl.user_id = ? AND scl.sub_comment_id = ?`,
    [userId, subCommentId]
  );
};

const postSubCommentLike = async (userId: number, subCommentId: number) => {
  return await appDataSource.query(
    `INSERT INTO
      sub_comment_likes (
        user_id,
        sub_comment_id
      ) VALUES (
        ?,
        ?
      )`,
    [userId, subCommentId]
  );
};

const deleteSubCommentLike = async (userId: number, subCommentId: number) => {
  return await appDataSource.query(
    `DELETE FROM sub_comment_likes
    WHERE user_id = ? AND sub_comment_id = ?`,
    [userId, subCommentId]
  );
};

export default {
  checkPostLikeById,
  postPostLike,
  deletePostLike,
  checkCommentLikeById,
  postCommentLike,
  deleteCommentLike,
  checkSubCommentLikeById,
  postSubCommentLike,
  deleteSubCommentLike,
};
