const Sequelize = require("sequelize");
const db = require("../db");
const RightOwner = db.define(
  "rightowner",
  {
    description: {
      type: Sequelize.STRING
    },
    address1: {
      type: Sequelize.STRING
    },
    address2: {
      type: Sequelize.STRING
    },
    postcode: {
      type: Sequelize.STRING
    },
    telephone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: "rightowner"
  }
);
module.exports = RightOwner;
