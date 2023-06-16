const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/study-saturdays");
// TODO: change the db string
module.exports = db;
