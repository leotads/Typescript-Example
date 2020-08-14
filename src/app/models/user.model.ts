import { Sequelize, Model, DataTypes, BuildOptions, IntegerDataType } from "sequelize";
import { database } from "../../config/database";

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public passwordHash: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: new DataTypes.STRING
    },
    passwordHash: {
      type: new DataTypes.STRING
    }
  },
  {
    tableName: "users",
    sequelize: database, // this bit is important
  }
);

User.sync({ force: false, alter: true }).then(() => console.log("User table created"));