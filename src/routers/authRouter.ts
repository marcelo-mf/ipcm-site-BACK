import { Router } from "express";
import { SignIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", SignIn);

export default authRouter;