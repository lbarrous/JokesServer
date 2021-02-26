import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get( "/", ( req, res ) => {
  res.send( "Hellooooooo!" );
} );

/* // call sync()
const db = require("./models");
db.sequelize.sync();

// Jokes routes
require("./routes/jokes.js")(app); */

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});