import passport from "passport";
import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2"
import { prisma } from "../../config/prisma";

import { encryptTokens } from "../../utils/encrypt_decrypt_tokens";
import { findOrCreateUser } from "./helpers";

passport.serializeUser((user, done) => {
  try {
    return done(null, user.id);
  }
  catch (error) {
    return done(error, null);
  }
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        accessToken: true
      }
    });

    if (user) return done(null, user);
  }
  catch (error) {
    return done(error, null);
  }
});

passport.use(
  new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID!,
    clientSecret: process.env.DISCORD_SECRET!,
    callbackURL: process.env.DISCORD_REDIRECT_URL,
    scope: ["identify"]
  }, 
  async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
    try {
      const { id: discordId } = profile;
      
      const encryptedTokens = encryptTokens(accessToken, refreshToken);
      const user = await findOrCreateUser(
        discordId,
        encryptedTokens.accessToken,
        encryptedTokens.refreshToken
      );
  
      return done(null, user);
    }
    catch (error) {
      return done(error as any, undefined); // ! Search for this error type.
    }
  })
);
