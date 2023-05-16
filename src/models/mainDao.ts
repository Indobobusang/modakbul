import { appDataSource } from "./appDataSource";

const getMainPage = async () => {
  return await appDataSource.query(
    `SELECT
      p.title AS feedTitle,
      u.name AS userName,
      u.profile_image_url AS userProfileImage,
      pi.image_url AS feedImage,
      (SELECT
        COUNT(*)
      FROM post_likes AS pl
      INNER JOIN posts AS p ON p.id = pl.post_id
      ) AS feedLikeCount,
      (SELECT
        COUNT(*)
      FROM scraps AS s
      INNER JOIN posts AS p ON p.id = s.post_id
      ) AS feedScrapCount,
      (SELECT
        COUNT(*)
      FROM comments AS c
      INNER JOIN posts AS p ON p.id = c.post_id
      ) AS feedCommentCount
    FROM posts AS p
    INNER JOIN users AS u ON u.id = p.user_id
    INNER JOIN post_images AS pi ON pi.post_id = p.id
    WHERE pi.id = (
      SELECT
        MIN(id)
      FROM post_images AS pi
      WHERE pi.post_id = p.id
    )
    `
  );
};

export default {
  getMainPage,
};
