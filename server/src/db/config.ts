import { Sequelize } from "sequelize-typescript";
import { Users } from "../models/users";
import {Responses} from '../models/answers'

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "my_db",
  logging: false,
  models: [Users,Responses],
});

export default connection;