import { Request, Response } from "express";
import winston from "winston";
import JokesService from "../services/JokesService";

export async function getJokesByType(req: Request, res: Response) {
  const types = req.query.type as string[];
  console.log("getJokesByType -> req.query.type", req.query.type)
  winston.log("info", types);
  JokesService.createJoke({
    punchline: "punchline",
  setup: "setup",
  type: "type"
  });

  const jokes = await JokesService.findJokesByType(types);

  return res.json({ jokes });
}
