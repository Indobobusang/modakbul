import express, { Router } from "express";
import likeController from "../controllers/likeController";
import { validateToken } from "../middlewares/auth";

const router: Router = express.Router();

router.post("/post/:postId", validateToken, likeController.postPostLike);
router.post("/comment", validateToken, likeController.postCommentLike);
router.post("/subComment", validateToken, likeController.postSubCommentLike);

export { router };
