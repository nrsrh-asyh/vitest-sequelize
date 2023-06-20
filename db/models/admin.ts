// defining admin model
import { Table, Column, Model, BelongsTo } from "sequelize-typescript";
import { User } from "./user";

type AdminAttr = {
  id: number;
  firstName: string;
  lastName: string;
};

@Table({ tableName: "Admin" })
export class Admin extends Model<AdminAttr> {
  @Column({ allowNull: false })
  id: number;

  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @BelongsTo(() => User)
  users?: User[];
}
