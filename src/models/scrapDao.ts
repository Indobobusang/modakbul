import { appDataSource } from "./appDataSource";

const checkPostScrapById = async (userId: number, postId: number) => {
  return await appDataSource.query(
    `SELECT
      *
    FROM scraps AS s
    WHERE s.user_id = ? AND s.post_id = ?`,
    [userId, postId]
  );
};

const postPostScrap = async (userId: number, postId: number) => {
  return await appDataSource.query(
    `INSERT INTO
      scraps (
        user_id,
        post_id
      ) VALUES (
        ?,
        ?
      )`,
    [userId, postId]
  );
};

const deletePostScrap = async (userId: number, postId: number) => {
  return await appDataSource.query(
    `DELETE FROM scraps
    WHERE user_id = ? AND post_id = ?`,
    [userId, postId]
  );
};

export default {
  checkPostScrapById,
  postPostScrap,
  deletePostScrap,
};
