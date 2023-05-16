import express, { Router } from "express";
import mainController from "../controllers/mainController";
import { validateToken } from "../middlewares/auth";

const router: Router = express.Router();

router.get("", mainController.getMainPage);

export { router };
