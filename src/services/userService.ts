import axios from "axios";
import jwt from "jsonwebtoken";
import userDao from "../models/userDao";

const googleLogin = async (googleToken: string) => {
  const googleAPI = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${googleToken}`;
  const googleResponse = await axios
    .get(googleAPI, {
      headers: {
        authorization: `Bearer ${googleToken}`,
      },
    })
    .then((el: any) => {
      return el.data;
    })
    .catch((error) => {
      console.log("error =", error);
    });
  const googleId = googleResponse.id;
  const email = googleResponse.email;
  const name = googleResponse.name;
  const profileImage = googleResponse.picture;

  const checkGoogleUser = await userDao.checkUserByGoogleEmail(email);
  if (checkGoogleUser.length === 0) {
    await userDao.createGoogleUser(googleId, email, name, profileImage);
  }
  const userInfo = await userDao.getUserInfoByEmail(email);
  const secretKey = process.env.SECRET_KEY as string;
  const payLoad = { userId: userInfo[0].userId };
  const accessToken = jwt.sign(payLoad, secretKey);
  return accessToken;
};

const getMyPageInfo = async (userId: number) => {
  const userInfo = await userDao.getUserInfo(userId);
  const postImage = await userDao.getPostImage(userId);
  const likeImage = await userDao.getLikeImage(userId);
  const scrapImage = await userDao.getScrapImage(userId);
  return {
    userInfo: userInfo,
    postImage: postImage,
    likeImage: likeImage,
    scrapImage: scrapImage,
  };
};

export default {
  googleLogin,
  getMyPageInfo,
};
