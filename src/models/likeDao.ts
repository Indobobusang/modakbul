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

export default {
  checkPostLikeById,
  postPostLike,
  deletePostLike,
};
