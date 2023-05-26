import mainDao from "../models/mainDao";

const getMainPage = async () => {
  let mainPage = await mainDao.getMainPage();
  for (let i = 0; i < mainPage.length; i++) {
    mainPage[i].userFeedLike = false;
    mainPage[i].userFeedScrap = false;
  }
  return mainPage;
};

const getMainPageById = async (userId: number) => {
  let mainPage = await mainDao.getMainPage();

  for (let i = 0; i < mainPage.length; i++) {
    const postId = mainPage[i].postId;
    const feedLike = await mainDao.feedLikeById(userId, postId);
    const scrapLike = await mainDao.scrapLikeById(userId, postId);

    if (feedLike[0].userFeedLike === "1") {
      mainPage[i].userFeedLike = true;
    } else {
      mainPage[i].userFeedLike = false;
    }
    if (scrapLike[0].userFeedScrap === "1") {
      mainPage[i].userFeedScrap = true;
    } else {
      mainPage[i].userFeedScrap = false;
    }
  }
  return mainPage;
};

export default {
  getMainPage,
  getMainPageById,
};
