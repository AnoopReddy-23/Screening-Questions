"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const users_1 = require("../models/users");
const answers_1 = require("../models/answers");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "root",
    database: "my_db",
    logging: false,
    models: [users_1.Users, answers_1.Responses],
});
exports.default = connection;
