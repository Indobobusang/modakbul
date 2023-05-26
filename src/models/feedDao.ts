import { appDataSource } from "./appDataSource";

const postFeedByUserId = async (
  userId: number,
  images: any,
  title: string,
  content: string,
  x: number,
  y: number
) => {
  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();
    const createFeed = await queryRunner.query(
      `INSERT INTO
        posts (
          user_id,
          title,
          content,
          longitude,
          latitude,
          post_category_id
        ) VALUES (
          ?,
          ?,
          ?,
          ?,
          ?,
          1
        )`,
      [userId, title, content, x, y]
    );

    const postId = createFeed.insertId;

    for (let i = 0; i < images.length; i++) {
      await queryRunner.query(
        `INSERT INTO
          post_images (
            post_id,
            image_url
          ) VALUES (
            ?,
            ?
          )`,
        [postId, images[i].location]
      );
    }
    await queryRunner.commitTransaction();
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw error;
  } finally {
    await queryRunner.release();
  }
};

const getFeedById = async (postId: number) => {
  return await appDataSource.query(
    `SELECT
      u.name AS userName,
      u.profile_image_url AS userProfileImage,
      p.id AS postId,
      p.title AS feedTitle,
      p.content AS feedContent,
      p.created_at AS feedCreateTime,
      (SELECT
        Count(*)
      FROM comments AS c
      INNER JOIN posts AS p ON p.id = c.post_id) AS feedCommentCount,
      (SELECT
        Count(*)
      FROM post_likes AS pl
      INNER JOIN posts AS p ON p.id = pl.post_id) AS feedLikeCount,
      (SELECT
        Count(*)
      FROM scraps AS s
      INNER JOIN posts AS p ON p.id = s.post_id) AS feedScrapCount,
      pi.images AS feedImages
      FROM posts AS p
      INNER JOIN users AS u ON u.id = p.user_id
      LEFT JOIN(
        SELECT
          post_id,
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'imageId', id,
              'imageUrl', image_url
            )
          ) AS images
        FROM post_images
        GROUP BY post_id
      ) AS pi ON pi.post_id = p.id
    WHERE p.id = ?`,
    [postId]
  );
};

const getFeedByUserId = async (postId: number, userId: number) => {
  return await appDataSource.query(
    `SELECT
      u.name AS userName,
      u.profile_image_url AS userProfileImage,
      p.id AS postId,
      p.title AS feedTitle,
      p.content AS feedContent,
      p.created_at AS feedCreateTime,
      (SELECT
        Count(*)
      FROM post_likes AS pl
      INNER JOIN posts AS p ON p.id = pl.post_id) AS feedLikeCount,
      (SELECT
        Count(*)
      FROM scraps AS s
      INNER JOIN posts AS p ON p.id = s.post_id) AS feedScrapCount,
      pi.images AS feedImages,
      EXISTS(
        SELECT
          *
        FROM post_likes AS pl
        WHERE pl.post_id = ? AND pl.user_id = ?
      ) AS userFeedLike,
      EXISTS(
        SELECT
          *
        FROM scraps AS s
        WHERE s.post_id = ? AND s.user_id = ?
      ) AS userFeedScrap
      FROM posts AS p
      INNER JOIN users AS u ON u.id = p.user_id
      LEFT JOIN(
        SELECT
          post_id,
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'imageId', id,
              'imageUrl', image_url
            )
          ) AS images
        FROM post_images
        GROUP BY post_id
      ) AS pi ON pi.post_id = p.id
    WHERE p.id = ?`,
    [postId, userId, postId, userId, postId]
  );
};

const getFeedCommentById = async (postId: number) => {
  return await appDataSource.query(
    `SELECT
      c.id AS commentId,
      c.content AS commentContent,
      c.created_at AS commentCreateTime,
      u.id AS commentUserId,
      u.name AS commentUserName,
      u.profile_image_url AS commentUserProfileImage
    FROM comments AS c
    INNER JOIN posts AS p ON p.id = c.post_id
    INNER JOIN users AS u ON u.id = c.user_id
    WHERE p.id = ?`,
    [postId]
  );
};

export default {
  postFeedByUserId,
  getFeedById,
  getFeedByUserId,
  getFeedCommentById,
};
