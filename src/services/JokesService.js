import JokesModel from "../models/jokesModel";

export default class JokesService {
  static createJoke(joke) {
    const jokeRecord = JokesModel.createJoke(joke);

    return { joke: jokeRecord };
  }

  static findJokes(type) {
    const arrayOfJokes = JokesModel.findJokesByType(type);

    return { jokes: arrayOfJokes };
  }
}
