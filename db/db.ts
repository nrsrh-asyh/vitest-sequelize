// initializing the db
import { Sequelize } from "sequelize";

export const db = new Sequelize(
  "postgresql://postgres:1234@localhost:5432/vitest-sequelize"
);
