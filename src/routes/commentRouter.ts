import express, { Router } from "express";
import commentController from "../controllers/commentController";
import { validateToken } from "../middlewares/auth";

const router: Router = express.Router();

router.post("", validateToken, commentController.postPostCommentById);
router.post("/subComment", validateToken, commentController.postSubCommentById);
router.delete("", validateToken, commentController.deletePostCommentById);

export { router };
