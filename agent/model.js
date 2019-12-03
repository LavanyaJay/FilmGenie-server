const Sequelize = require("sequelize");
const db = require("../db");
const RightOwner = require("../rightowner/model");
const Agent = db.define(
  "agent",
  {
    fullname: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    telephone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    job: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: "agent"
  }
);
module.exports = Agent;

Agent.belongsToMany(RightOwner, { through: "rightowneragent" });
RightOwner.belongsToMany(Agent, { through: "rightowneragent" });
