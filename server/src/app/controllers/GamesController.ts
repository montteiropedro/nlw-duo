import { Request, Response } from "express";
import { prisma } from "../../config/prisma";


class GamesController {
  async index(req: Request, res: Response) {
    try {
      const games = await prisma.game.findMany({
        include: {
          _count: {
            select: {
              ads: true
            }
          }
        }
      });
  
      return res.status(200).json(games);
    }
    catch (error) {
      return res.status(404).json({
        status: 404,
        message: "Resource not found in database."
      });
    }
  }
}

export default new GamesController();
