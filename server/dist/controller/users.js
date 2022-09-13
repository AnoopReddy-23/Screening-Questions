"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.getAllToDo = exports.createToDo = void 0;
const users_1 = require("../models/users");
const createToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var users = yield users_1.Users.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Account created successfully", data: users });
});
exports.createToDo = createToDo;
const getAllToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield users_1.Users.findAll();
    //console.log(allTodos);
    return res
        .status(200)
        .json({ message: "Data fetched successfully", data: allUsers });
});
exports.getAllToDo = getAllToDo;
const Login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var users = Object.assign({}, req.body);
    //console.log(users)
    const userOfDB = yield users_1.Users.findOne(users.username);
    //if userOfDB not existed
    if (userOfDB == null) {
        return res.json({ message: "Invalid username" });
    }
    else {
        if (userOfDB.password === users.password) {
            //send token
            return res.json({ message: "Login Success" });
        }
        else {
            return res.json({ message: "Invalid password" });
        }
    }
    return res
        .status(200)
        .json({ message: "Account created successfully", data: users });
});
exports.Login = Login;
