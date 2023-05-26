import { appDataSource } from "./appDataSource";

const getMainPage = async () => {
  return await appDataSource.query(
    `SELECT
      p.id AS postId,
      p.title AS feedTitle,
      u.name AS userName,
      u.profile_image_url AS userProfileImage,
      pi.image_url AS feedImage,
      COUNT(pl.id)AS feedLikeCount,
      COUNT(s.id) AS feedScrapCount,
      COUNT(c.id) AS feedCommentCount
    FROM posts AS p
    INNER JOIN users AS u ON u.id = p.user_id
    INNER JOIN post_images AS pi ON pi.post_id = p.id
    LEFT JOIN post_likes AS pl ON pl.post_id = p.id
    LEFT JOIN scraps AS s ON s.post_id = p.id
    LEFT JOIN comments AS c ON c.post_id = p.id
    WHERE pi.id = (
      SELECT
        MIN(id)
      FROM post_images AS pi
      WHERE pi.post_id = p.id
    )
    GROUP BY p.id, pi.image_url`
  );
};

// const getMainPageById = async (userId: number) => {
//   return await appDataSource.query(
//     `SELECT
//       p.id AS postId,
//       p.title AS feedTitle,
//       u.name AS userName,
//       u.profile_image_url AS userProfileImage,
//       pi.image_url AS feedImage,
//       COUNT(pl.id)AS feedLikeCount,
//       COUNT(s.id) AS feedScrapCount,
//       COUNT(c.id) AS feedCommentCount,
//       EXISTS(
//         SELECT
//           pl.id
//         FROM post_likes AS pl
//         WHERE pl.post_id = p.id AND pl.user_id = ?) AS userFeedLike,
//       EXISTS(
//         SELECT
//           s.id
//         FROM scraps AS s
//         WHERE s.post_id = p.id AND s.user_id = ?) AS userFeedLike
//     FROM posts AS p
//     INNER JOIN users AS u ON u.id = p.user_id
//     INNER JOIN post_images AS pi ON pi.post_id = p.id
//     LEFT JOIN post_likes AS pl ON pl.post_id = p.id
//     LEFT JOIN scraps AS s ON s.post_id = p.id
//     LEFT JOIN comments AS c ON c.post_id = p.id
//     WHERE pi.id = (
//       SELECT
//         MIN(id)
//       FROM post_images AS pi
//       WHERE pi.post_id = p.id
//     )
//     GROUP BY p.id, pi.image_url`,
//     [userId, userId]
//   );
// };

const feedLikeById = async (userId: number, postId: number) => {
  return await appDataSource.query(
    `SELECT
      EXISTS(
        SELECT
          pl.id
        FROM post_likes AS pl
        WHERE pl.post_id = p.id AND pl.user_id = u.id) AS userFeedLike
    FROM posts AS p
    INNER JOIN users AS u ON u.id = ?
    WHERE p.id = ?`,
    [userId, postId]
  );
};

const scrapLikeById = async (userId: number, postId: number) => {
  return await appDataSource.query(
    `SELECT
      EXISTS(
        SELECT
          s.id
        FROM scraps AS s
        WHERE s.post_id = p.id AND s.user_id = u.id) AS userFeedScrap
    FROM posts AS p
    INNER JOIN users AS u ON u.id = ?
    WHERE p.id = ?`,
    [userId, postId]
  );
};

export default {
  getMainPage,
  feedLikeById,
  scrapLikeById,
  // getMainPageById,
};
