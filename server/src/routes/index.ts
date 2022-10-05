import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./user";

import GamesController from "../app/controllers/GamesController";
import AdsController from "../app/controllers/AdsController";
import { isAuthenticated } from "../app/middleware/auth";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

router.get("/games", GamesController.index);
router.post("/games/:id/ads", isAuthenticated, AdsController.store);
router.get("/games/:id/ads", AdsController.index);
router.get("/ads/:id/discord", AdsController.getDiscord);

export default router;
