import express, { Router } from "express";
import feedController from "../controllers/feedController";
import { validateToken } from "../middlewares/auth";
import { upload } from "../utils/imageUploader";

const router: Router = express.Router();

router.post(
  "",
  upload.array("images"),
  validateToken,
  feedController.postFeedByUserId
);
router.get("/:postId", validateToken, feedController.getFeedDetailById);
router.get("/comment/:postId", feedController.getFeedCommentById);

export { router };
