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

export default {
  checkUserByGoogleEmail,
  createGoogleUser,
  getUserInfoByEmail,
};
