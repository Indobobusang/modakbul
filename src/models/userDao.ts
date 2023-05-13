import { appDataSource } from "./appDataSource";

const checkUserByGoogleEmail = async (email: string) => {
  const result = await appDataSource.query(
    `SELECT
      u.email AS userEmail
    FROm users AS u
    WHERE u.email = ?`,
    [email]
  );
  return result;
};

const createGoogleUser = async (
  googleId: string,
  email: string,
  name: string,
  profileImage: string
) => {
  await appDataSource.query(
    `INSERT INTO
      users(
        social_id,
        email,
        name,
        profile_image_url
      ) VALUES (
        ?,
        ?,
        ?,
        ?
      )`,
    [googleId, email, name, profileImage]
  );
};

const getUserInfoByEmail = async (email: string) => {
  const getUserInfo = await appDataSource.query(
    `SELECT
      u.id AS userId,
      u.name AS userName,
      u.email AS userEmail,
      u.profile_image_url AS userProfileImage
    FROM users AS u
    WHERE u.email = ?`,
    [email]
  );
  return getUserInfo;
};

const getUserInfo = async (userId: number) => {
  const userInfo = await appDataSource.query(
    `SELECT
      u.name AS userName,
      u.profile_image_url AS userProfileImage,
      u.introduce AS userIntroduce
    FROM users AS u
    WHERE u.id = ?
    `,
    [userId]
  );
  return userInfo;
};

const getPostImage = async (userId: number) => {
  const postImage = await appDataSource.query(
    `SELECT
      p.id AS postId,
      pi.image_url AS postImage
    FROM posts AS p
    INNER JOIN post_images AS pi ON pi.post_id = p.id
    INNER JOIN users AS u ON u.id = p.user_id
    WHERE pi.id = (
      SELECT
        MIN(id)
      FROM post_images AS pi
      WHERE pi.post_id = p.id
    ) AND u.id = ?`,
    [userId]
  );
  return postImage;
};

const getLikeImage = async (userId: number) => {
  const likeImage = await appDataSource.query(
    `SELECT
    p.id AS postId,
    pi.image_url AS postImage
  FROM posts AS p
  INNER JOIN post_images AS pi ON pi.post_id = p.id
  INNER JOIN post_likes AS pl ON pl.post_id = p.id
  INNER JOIN users AS u ON u.id = pl.user_id
  WHERE pi.id = (
    SELECT
      MIN(id)
    FROM post_images AS pi
    WHERE pi.post_id = p.id
  ) AND u.id = ?`,
    [userId]
  );
  return likeImage;
};

const getScrapImage = async (userId: number) => {
  const scrapImage = await appDataSource.query(
    `SELECT
    p.id AS postId,
    pi.image_url AS postImage
  FROM posts AS p
  INNER JOIN post_images AS pi ON pi.post_id = p.id
  INNER JOIN scraps AS s ON s.post_id = p.id
  INNER JOIN users AS u ON u.id = s.user_id
  WHERE pi.id = (
    SELECT
      MIN(id)
    FROM post_images AS pi
    WHERE pi.post_id = p.id
  ) AND u.id = ?`,
    [userId]
  );
  return scrapImage;
};

export default {
  checkUserByGoogleEmail,
  createGoogleUser,
  getUserInfoByEmail,
  getUserInfo,
  getPostImage,
  getLikeImage,
  getScrapImage,
};
