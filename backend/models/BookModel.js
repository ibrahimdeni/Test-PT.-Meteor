import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Books = db.define(
  "books",
  {
    name: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    publisher: {
      type: DataTypes.STRING,
    },
    published: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Books;
