"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const jokes = await require("../db/config/jokes.json");
    const arrayOfPromises = [];
    Array.from(jokes).map(async joke => {
      arrayOfPromises.push(
        queryInterface.bulkInsert("Jokes", [
          {
            punchline: joke.punchline,
            setup: joke.setup,
            type: joke.type,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ])
      );
    });
    await Promise.all(arrayOfPromises);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jokes", null, {});
  }
};
