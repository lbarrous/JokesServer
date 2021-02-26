import { Express } from "express";
import { JokesController } from "../controllers/index";

export function routes(app: Express) {
    /* ?type=1&type=2 */
  app.get("/api/jokes", JokesController.getJokesByType);
}
