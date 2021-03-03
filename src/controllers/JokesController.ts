import { Request, Response } from "express";
import JokesService from "../services/JokesService";

export async function getJokesByType(req: Request, res: Response) {
  const types = req.query.type as string[];
  const jokes = await JokesService.findJokesByType(types);
<<<<<<< HEAD
=======

>>>>>>> 08df6a5286d8c1f2703d469e4b30a111be980d66
  return res.json({ jokes });
}
