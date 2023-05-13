import express, { Router } from "express";
import userController from "../controllers/userController";
import { validateToken } from "../middlewares/auth";

const router: Router = express.Router();

router.post("/googleLogin", userController.googleLogin);
router.get("/myPage", validateToken, userController.getMyPageInfo);

export { router };
