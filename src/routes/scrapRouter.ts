import express, { Router } from "express";
import scrapController from "../controllers/scrapController";
import { validateToken } from "../middlewares/auth";

const router: Router = express.Router();

router.post("/post/:postId", validateToken, scrapController.postPostScrap);

export { router };
