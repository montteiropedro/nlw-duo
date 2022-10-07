require("dotenv").config();
import session from "express-session";
import MongoStore from "connect-mongo";

declare global {
  namespace Express {
    interface User {
      id: string;
      accessToken: string;
    }
  }
}

declare module "express-session" {
  interface SessionData {
    userId?: string;
  }
}

export const sessionConfig = session({
  secret: process.env.SESSION_SECRET!,
  name: process.env.SESSION_COOKIE_NAME!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "none",
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 // 24h
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_DB_URL!,
    dbName: process.env.MONGO_DB_NAME!
  })
});
