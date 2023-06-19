// defining admin model
const Sequelize = require("sequelize");
import db from "../db";
import { User } from "./user";

const Admin = db.define("admin", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Admin.belongsTo(User, { as: "user" });

module.exports = Admin;
