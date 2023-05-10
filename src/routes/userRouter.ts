import express, { Router } from "express";
import userController from "../controllers/userController";

const router: Router = express.Router();

router.post("/googleLogin", userController.googleLogin);

export { router };
