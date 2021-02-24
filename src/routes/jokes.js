var JokesService = require("express").Router();
var route = require("express").Router();

export default app => {
  app.use("/jokes", route);

  route.get(
    "/",
    /* TODO: call validator */ (req, res) => {
      const typesOfJoke = req.query;
      const { jokes } = JokesService.findJokes(typesOfJoke);
      return res.json({ jokes }).status(200);
    }
  );
};
