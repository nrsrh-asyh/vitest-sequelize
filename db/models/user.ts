// defining user model
import { Table, Column, Model, BeforeCreate } from "sequelize-typescript";

type UserAttr = {
  firstName: string;
  lastName: string;
  email: string;
};

@Table({ tableName: "User" })
export class User extends Model<UserAttr> {
  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column({ allowNull: false })
  email: string;

  @BeforeCreate
  static createCapitalName(user: User) {
    const nameFirst = user.firstName;
    const nameLast = user.lastName;

    user.firstName = nameFirst[0].toUpperCase() + nameFirst.slice(1);
    user.lastName = nameLast[0].toUpperCase() + nameLast.slice(1);
  }
}
