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

export default {
  postFeedByUserId,
};
