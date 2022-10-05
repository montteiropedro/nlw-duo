import { Router } from "express";
import { isAuthenticated } from "../../app/middleware/auth";

import UserController from "../../app/controllers/UserController";

const router = Router();

router.get("/profile", isAuthenticated, UserController.getUserData);

export default router;
