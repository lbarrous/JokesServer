const db = require("../models");
const Jokes = db.jokes;

export default class JokesModel {
  static createJoke(joke) {
    // Save Joke in the database
    Jokes.create(joke)
      .then(data => {
        return data;
      })
      .catch(err => {
        throw Error(
          err.message || "Some error occurred while creating the Joke."
        );
      });
  }
  static findJokesByType(type) {
    // Retrieve all jokes from database
    Jokes.
    Jokes.findAll({ where: {
        type: [type]
    } })
      .then(data => {
        return data;
      })
      .catch(err => {
        throw Error(
          err.message || "Some error occurred while retrieving Jokes."
        );
      });
  }
}
