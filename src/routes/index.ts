import express, { Router } from "express";
export const router: Router = express.Router();

import { router as userRouter } from "./userRouter";
import { router as likeRouter } from "./likeRouter";
import { router as scrapRouter } from "./scrapRouter";

router.use("/users", userRouter);
router.use("/likes", likeRouter);
router.use("/scraps", scrapRouter);

export default router;
