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

export const Login: RequestHandler = async (req, res, next) => {
  var users = {...req.body};
  //console.log(users)
  const userOfDB: Users | null = await Users.findOne(users.username);
  //if userOfDB not existed
  if(userOfDB==null){
    return res.json({message:"Invalid username"})
  }
  else{
    if(userOfDB.password===users.password){
      //send token
      return res.json({message:"Login Success"})
    }
    else{
      return res.json({message:"Invalid password"})
    }
  }
  return res
    .status(200)
    .json({ message: "Account created successfully", data: users });
};
