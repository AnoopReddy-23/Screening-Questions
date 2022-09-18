import { RequestHandler } from "express";

import { Users } from "../models/users";

export const createToDo: RequestHandler = async (req, res, next) => {
  var users = await Users.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Account created successfully", data: users });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
  const allUsers: Users[] = await Users.findAll();
  //console.log(allTodos);
  return res
    .status(200)
    .json({ message: "Data fetched successfully", data: allUsers });
};

