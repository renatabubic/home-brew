const Sequelize = require("sequelize");
const db = require("../db");

const Drink = db.define("drink", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  ingredients: {
    type: Sequelize.ARRAY,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  recipe: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: "",
  },
});

module.exports = Drink;
