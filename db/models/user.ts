// defining user model
const Sequelize = require("sequelize");
import db from "../db";

export const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.beforeCreate((user) => {
  const nameFirst = user.firstName;
  const nameLast = user.lastName;

  user.firstName = nameFirst[0].toUpperCase() + nameFirst.slice(1);
  user.lastName = nameLast[0].toUpperCase() + nameLast.slice(1);
});
