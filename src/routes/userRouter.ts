import express, { Router } from "express";
import { googleLogin } from "../controllers/userController";

const router: Router = express.Router();

router.post("/googleLogin", googleLogin);

export { router };
