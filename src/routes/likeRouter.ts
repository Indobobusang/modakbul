import express, { Router } from "express";
import likeController from "../controllers/likeController";
import { validateToken } from "../middlewares/auth";

const router: Router = express.Router();

router.post("/post/:postId", validateToken, likeController.postPostLike);
router.post("/comment", likeController.postCommentLike);
router.post("/subComment", likeController.postSubCommentLike);

export { router };
