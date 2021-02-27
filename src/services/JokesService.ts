import { JokeDao } from "../dao";
import { JokeAttributes } from "../db/models/Joke";

export default class JokesService {
  static createJoke(joke: JokeAttributes) {
    const jokeRecord = JokeDao.create(joke).catch((e) => console.log(e));

    return { joke: jokeRecord };
  }

  static findJokesByType(types: string[]) {
    const arrayOfJokes = JokeDao.findByType(types).catch((e) => console.log(e));

    return { jokes: arrayOfJokes };
  }
}
