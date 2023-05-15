import express, { Router } from "express";
export const router: Router = express.Router();

import { router as userRouter } from "./userRouter";
import { router as likeRouter } from "./likeRouter";
import { router as scrapRouter } from "./scrapRouter";
import { router as feedRouter } from "./feedRouter";
import { router as commentRouter } from "./commentRouter";

router.use("/users", userRouter);
router.use("/likes", likeRouter);
router.use("/scraps", scrapRouter);
router.use("/feeds", feedRouter);
router.use("/comments", commentRouter);

export default router;
