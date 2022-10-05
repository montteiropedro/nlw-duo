import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

import { convertHourStringToMinutes } from "../../utils/convert_hour_string_to_minutes";
import { convertMinutesToHourString } from "../../utils/convert_minutes_string_to_hour";

import axios from "axios";

class AdsController {
  async index(req: Request, res: Response) {
    const { id: gameId } = req.params;
  
    if (!gameId) return res.status(400).json({
      status: 400,
      message: "Something went wrong with the game ID."
    });

    try {
      const ads = await prisma.ad.findMany({
        select: {
          id: true,
          name: true,
          yearsPlaying: true,
          weekDays: true,
          hourStart: true,
          hourEnd: true,
          useVoiceChannel: true,
        },
        where: { gameId },
        orderBy: { createdAt: "desc" }
      });
    
      return res.status(200).json(
        ads.map(ad => ({
          ...ad,
          weekDays: ad.weekDays.split(","),
          hourStart: convertMinutesToHourString(ad.hourStart),
          hourEnd: convertMinutesToHourString(ad.hourEnd)
        }))
      );
    }
    catch (error) {
      return res.status(404).json({
        status: 404,
        message: "Resource not found in database."
      });
    }
  }

  async store(req: Request, res: Response) {
    try {
      const { id: userId } = req.user!;
      const { id: gameId } = req.params;
      const data = req.body;

      if (!userId || !gameId || !data) return res.status(400).json({
        status: 400,
        message: "Something went wrong with the form data."
      });

      // TODO: Create a validation schema for the received data.

      return res.status(201).json(
        await prisma.ad.create({
          data: {
            userId: userId,
            gameId: gameId,
            name: data.name,
            yearsPlaying: data.yearsPlaying,
            discord: data.discord,
            weekDays: data.weekDays.join(","),
            hourStart: convertHourStringToMinutes(data.hourStart),
            hourEnd: convertHourStringToMinutes(data.hourEnd),
            useVoiceChannel: data.useVoiceChannel
          }
        })
      );
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response) return res.json({
        status: error.response.status,
        data: error.response.data
      });
      return res.sendStatus(400);
    }
  }

  async getDiscord(req: Request, res: Response) {
    const { id: adId } = req.params;

    if (!adId) return res.status(400).json({
      status: 400,
      message: "Something went wrong with the ad ID."
    });

    try {
      const { discord } = await prisma.ad.findFirstOrThrow({
        select: { discord: true },
        where: { id: adId }
      });
      
      return res.status(200).json({ discord });
    }
    catch(error) {
      return res.status(404).json({
        status: 404,
        message: "Resource not found in database."
      });
    }
  }
}

export default new AdsController();
