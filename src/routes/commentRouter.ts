import express, { Router } from "express";
import commentController from "../controllers/commentController";
import { validateToken } from "../middlewares/auth";

const router: Router = express.Router();

router.post("", commentController.postPostCommentById);
router.post("/subComment", commentController.postSubCommentById);

export { router };
