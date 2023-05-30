import { appDataSource } from "./appDataSource";

const postPostCommentById = async (
  userId: number,
  postId: number,
  content: string
) => {
  return await appDataSource.query(
    `INSERT INTO
      comments(
        user_id,
        post_id,
        content
    ) VALUES (
      ?,
      ?,
      ?
    )`,
    [userId, postId, content]
  );
};

const postSubCommentById = async (
  userId: number,
  commentId: number,
  content: string
) => {
  return await appDataSource.query(
    `INSERT INTO
      sub_comments(
        user_id,
        comment_id,
        content
    ) VALUES (
      ?,
      ?,
      ?
    )`,
    [userId, commentId, content]
  );
};

const deletePostCommentById = async (userId: number, commentId: number) => {
  return await appDataSource.query(
    `DELETE FROM
      comments
    WHERE comments.user_id =? AND comments.id = ?`,
    [userId, commentId]
  );
};

export default {
  postPostCommentById,
  postSubCommentById,
  deletePostCommentById,
};
