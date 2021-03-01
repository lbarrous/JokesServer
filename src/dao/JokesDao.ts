import { JokeAttributes, JokeModel } from "../db/models/Joke";
import { Op, Sequelize } from "sequelize";

export function create(joke: JokeAttributes): Promise<any> {
  return JokeModel.create({
    type: joke.type,
    setup: joke.setup,
    punchline: joke.punchline
  });
}

export function findAll(): Promise<any> {
  return JokeModel.findAll({ include: [{ all: true }] });
}

export function findByType(types: string[]): Promise<any> {
  return JokeModel.findOne({
    where: { type: { [Op.or]: [types] } },
    order: [Sequelize.fn("RAND")]
  });
}
