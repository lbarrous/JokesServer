import { Request, Response } from "express";
import winston from "winston";
import JokesService from "../services/JokesService";

export function getJokesByType(req: Request, res: Response) {
  const types = req.query.type as string[];
  winston.log("info", types);
  const { jokes } = JokesService.findJokesByType(types);
  return res.json({ jokes });
}
