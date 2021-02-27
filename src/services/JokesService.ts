import { JokeDao } from "../dao";
import { JokeAttributes } from "../db/models/Joke";

export default class JokesService {
  static createJoke(joke: JokeAttributes) {
    return JokeDao.create(joke).catch((e) => console.log(e));
  }

  static findJokesByType(types: string[]) {
    return JokeDao.findByType(types).catch((e) => console.log(e));
  }

  static findAllJokes() {
    return JokeDao.findAll();
  }
}
