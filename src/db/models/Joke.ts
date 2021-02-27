import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

export interface JokeAttributes {
  id: string;
  type: string;
  setup: string;
  punchline: string;
}

export class JokeModel extends Model<JokeAttributes> {
  public id!: number;
  public type!: string;
  public setup!: string;
  public punchline!: string;
}

JokeModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    setup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    punchline: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { sequelize, modelName: "JokeModel" }
);

/*
CREATE TABLE Jokes (id VARCHAR(20), owner VARCHAR(20),
       species VARCHAR(20), sex CHAR(1), birth DATE, death DATE); */