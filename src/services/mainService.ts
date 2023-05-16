import mainDao from "../models/mainDao";

const getMainPage = async () => {
  return await mainDao.getMainPage();
};

export default {
  getMainPage,
};
