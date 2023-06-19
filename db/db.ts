// initializing the db
const Sequelize = require("sequelize");
export default new Sequelize(
  "postgres://postgres:1234@localhost:3000/vitest-sequelize"
);
// TODO: create the db and try and seed it  (?)
