import { Request, Response } from "express";

class DiscordAuthController {
  async redirect(req: Request, res: Response) {
    try {
      return res.redirect("http://localhost:5173");
    }
    catch(error) {
      return res.sendStatus(400);
    }
  }

  async logout(req: Request, res: Response) {
    req.user = undefined;
    req.session.destroy(err => res.status(200).json({
      status: 200,
      message: "Logged out successfully."
    }));
    
    return res.clearCookie(process.env.SESSION_COOKIE_NAME!);
  }
}

export default new DiscordAuthController();
