module.exports = (sequelize, Sequelize) => {
  const Jokes = sequelize.define("jokes", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type: {
      type: Sequelize.STRING
    },
    setup: {
      type: Sequelize.STRING
    },
    punchline: {
      type: Sequelize.STRING
    }
  });

  return Jokes;
};
