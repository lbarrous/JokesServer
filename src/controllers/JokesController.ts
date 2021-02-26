import { Request, Response } from "express";
import JokesService from "../services/JokesService";

export function getJokesByType(req: Request, res: Response) {
  const types = req.query.type as string[];
  const { jokes } = JokesService.findJokesByType(types);
  return res.json({ jokes });
}
