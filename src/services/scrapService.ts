import scrapDao from "../models/scrapDao";

const postPostScrap = async (userId: number, postId: number) => {
  const checkPostScrap = await scrapDao.checkPostScrapById(userId, postId);
  let scrapLike: boolean;

  if (checkPostScrap.length === 0) await scrapDao.postPostScrap(userId, postId);
  else await scrapDao.deletePostScrap(userId, postId);

  const postScrapCheck = await scrapDao.checkPostScrapById(userId, postId);

  if (postScrapCheck.length === 0) scrapLike = false;
  else scrapLike = true;

  return scrapLike;
};

export default { postPostScrap };
