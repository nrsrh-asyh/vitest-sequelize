// initializing the db
const Sequelize = require("sequelize");
export default new Sequelize(
  "postgres://postgres:1234@localhost:5433/vitest-sequelize"
);
// TODO: change the db string
// DATABASE_URL=postgresql://postgres:1234@localhost:5432/postgres
