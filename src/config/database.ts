import { Sequelize } from "sequelize";

export const database = new Sequelize({
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'typescript',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true
  }
})

