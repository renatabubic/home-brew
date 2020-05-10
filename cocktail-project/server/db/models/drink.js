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
    defaultValue:
      "https://i.pinimg.com/originals/34/2f/e5/342fe5bc236343bfc84c41b00a25100a.png",
  },
});

module.exports = Drink;
