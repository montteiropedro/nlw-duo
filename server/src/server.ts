import express from "express";
import cors from "cors";
import routes from "./routes";
import passport from "passport";
import { sessionConfig } from "./config/session";
import "./strategies/discord";

const app = express();

app.use(express.json());
app.use(cors({
  origin: [process.env.CLIENT_URL!],
  credentials: true
}));

app.set("trust proxy", 1);

app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server running ✨`);
});
