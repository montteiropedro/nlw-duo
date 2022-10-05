require("dotenv").config();
import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { DiscordUserData } from "../../utils/user/helpers";
import { decryptToken } from "../../utils/encrypt_decrypt_tokens";

/**
 * Verifies if the access token in req.user is still valid. In case it is not, destroy the session
 * and cookie.
 */
export async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (!req.user) return res.sendStatus(401);

  try {
    const decryptedAccessToken = decryptToken(req.user.accessToken);

    const data = await axios.get<DiscordUserData>(process.env.DISCORD_OAUTH2_USER!, {
      headers: {
        Authorization: `Bearer ${decryptedAccessToken}`
      }
    });

    if (data) next();
  }
  catch(error) { 
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      req.session.destroy(err => res.sendStatus(401));
      return res.clearCookie(process.env.SESSION_COOKIE_NAME!);
    }
    return res.sendStatus(400);
  }
}
