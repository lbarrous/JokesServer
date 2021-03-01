import { Express } from "express";
import { JokesController } from "../controllers/index";

export function routes(app: Express) {
  app.get("/api/jokes", JokesController.getJokesByType);
}
