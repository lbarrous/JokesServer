import * as uuid from "uuid";
import { JokeAttributes, JokeModel } from "../db/models/Joke";

export function create(joke: JokeAttributes): Promise<any> {
  return JokeModel.create({
    id: uuid.v1(),
    type: joke.type,
    setup: joke.setup,
    punchline: joke.punchline
  });
}

export function findAll(): Promise<any> {
  return JokeModel.findAll({ include: [{ all: true }] });
}

export function findByType(type: string[]): Promise<any> {
  return JokeModel.findOne({ where: { type } });
}
