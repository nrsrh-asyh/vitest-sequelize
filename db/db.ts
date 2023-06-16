// initializing the db (?)
const Sequelize = require("sequelize");
export default new Sequelize("postgres://localhost:5432/study-saturdays");
// TODO: change the db string
