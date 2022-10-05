import passport from "passport";

import { Router } from "express";
import DiscordAuthController from "../../app/controllers/DiscordAuthController";

const router = Router();

router.get("/discord", passport.authenticate("discord"));
router.get("/discord/redirect", passport.authenticate("discord"), DiscordAuthController.redirect);
router.delete("/logout", DiscordAuthController.logout);

export default router;
