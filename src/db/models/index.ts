import { Options, Sequelize } from "sequelize";
import { getKeyValue } from "../../utils/index";

import config = require("../config/config.json");

const env: any = process.env.NODE_ENV || "development";

const dbConfig = getKeyValue(config)(env);
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig as Options
);

sequelize.sync({force:true});

export default sequelize;
