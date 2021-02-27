import { Request, Response } from "express";
import winston from "winston";
import JokesService from "../services/JokesService";

export async function getJokesByType(req: Request, res: Response) {
  const types = req.query.type as string[];
  winston.log("info", types);
  JokesService.createJoke({
    punchline: "punchline",
  setup: "setup",
  type: "type"
  });

  const jokes = await JokesService.findJokesByType(types);
  //const jokes = await JokesService.findAllJokes();

  return res.json({ jokes });
}
