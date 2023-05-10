import express, { Router } from "express";
export const router: Router = express.Router();

import { router as userRouter } from "./userRouter";

router.use("/users", userRouter);

export default router;
