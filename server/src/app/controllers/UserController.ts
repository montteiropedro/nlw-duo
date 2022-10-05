import axios from "axios";
import { Request, Response } from "express";
import { fetchDiscordData } from "../../utils/user/helpers";

class UserController {
  async getUserData(req: Request, res: Response) {
    try {
      const { data: discordData } = await fetchDiscordData(req.user!.accessToken);
      const { id, avatar, username, discriminator } = discordData;

      return res.status(200).json({
        id,
        avatar,
        username,
        discriminator
      });
    }
    catch(error) { 
      if (axios.isAxiosError(error) && error.response) return res.json({
        status: error.response.status,
        data: error.response.data
      });
      return res.sendStatus(400);
    }
  }
}

export default new UserController();
