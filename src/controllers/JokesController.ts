import { Request, Response } from "express";
import JokesService from "../services/JokesService";

export async function getJokesByType(req: Request, res: Response) {
  const types = req.query.type as string[];
  const jokes = await JokesService.findJokesByType(types);
  return res.json({ jokes });
}
